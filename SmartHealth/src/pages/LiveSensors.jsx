// src/pages/LiveSensors.jsx

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
  const [bpmData, setBpmData] = useState([]);

  useEffect(() => {
    const bpmRef = ref(db, "patients/P001/bpm_history");

    onValue(bpmRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const values = Object.values(data);
        setBpmData(values.slice(-30)); // ambil 30 data terakhir
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

  return (
    <BackgroundWrapper>
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Live Heart Rate</h2>
        <Line data={chartData} />
      </div>
    </BackgroundWrapper>
  );
}
