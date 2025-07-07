import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { db } from "../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const BackgroundWrapper = ({ children }) => (
  <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
      style={{ backgroundImage: "url('/heart-bg.jpg')" }}
    />
    <div className="relative z-10">{children}</div>
  </div>
);

export default function LiveSensors() {
  const [patients, setPatients] = useState([]);
  const [bpmData, setBpmData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const patientsRef = ref(db, "patients");

    onValue(patientsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, patient]) => ({
          id,
          ...patient,
        }));
        setPatients(list);

        // Ambil BPM history pasien pertama untuk grafik
        const firstPatient = list[0];
        if (firstPatient?.bpm_history) {
          const values = Object.values(firstPatient.bpm_history);
          setBpmData(values.slice(-30)); // ambil 30 terakhir
        }
      }
    });
  }, []);

  const chartData = {
    labels: bpmData.map((_, i) => i + 1),
    datasets: [
      {
        label: "Heart Rate (BPM)",
        data: bpmData,
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const handleView = (id) => {
    navigate(`/patient/${id}`);
  };

  return (
    <BackgroundWrapper>
      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Live Heart Rate & Patients</h2>

        {/* Daftar Pasien */}
        <div className="grid gap-4 mb-8">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="flex items-center justify-between bg-white rounded shadow p-4"
            >
              <div>
                <p className="font-semibold">{patient.name}</p>
                <p className="text-sm text-gray-500">Age: {patient.age}</p>
                <p className="text-sm text-gray-500">
                  BPM: {patient.current_bpm ?? "N/A"}
                </p>
              </div>
              <Button onClick={() => handleView(patient.id)}>
                Lihat Kondisi
              </Button>
            </div>
          ))}
        </div>

        {/* Grafik */}
        <h3 className="text-2xl font-semibold mb-4">Grafik Heart Rate</h3>
        <Line data={chartData} />
      </div>
    </BackgroundWrapper>
  );
}
