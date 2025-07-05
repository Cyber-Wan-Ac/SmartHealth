// src/pages/Patients.jsx

import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { db } from "../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download } from "lucide-react";

const BackgroundWrapper = ({ children }) => (
  <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
      style={{ backgroundImage: "url('/heart-bg.jpg')" }}
    />
    <div className="relative z-10">{children}</div>
  </div>
);

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const patientsRef = ref(db, "patients");
    onValue(patientsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.entries(data).map(([id, val]) => ({
          id,
          name: val.name || id,
          bpm_history: val.bpm_history ? Object.values(val.bpm_history) : [],
        }));
        setPatients(formatted);
      }
    });
  }, []);

  const downloadPDF = (patient) => {
    const doc = new jsPDF();
    doc.text(`Heart Rate Report - ${patient.name}`, 20, 10);
    autoTable(doc, {
      head: [["Time (s)", "Heart Rate (BPM)"]],
      body: patient.bpm_history.map((bpm, idx) => [idx + 1, bpm]),
    });
    doc.save(`${patient.name}_heart_rate.pdf`);
  };

  return (
    <BackgroundWrapper>
      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Patient Data</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="bg-white">
                <td className="border p-2">{p.id}</td>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">
                  <Button onClick={() => downloadPDF(p)}>
                    <Download className="inline-block mr-1" /> Download PDF
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BackgroundWrapper>
  );
}
