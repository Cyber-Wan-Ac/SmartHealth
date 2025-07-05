// src/pages/About.jsx

import React from "react";

const BackgroundWrapper = ({ children }) => (
  <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
      style={{ backgroundImage: "url('/heart-bg.jpg')" }}
    />
    <div className="relative z-10">{children}</div>
  </div>
);

export default function About() {
  return (
    <BackgroundWrapper>
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Smart Heart</h2>
        <p className="mb-4">
          The <strong>Smart Heart Pulse and EKG Monitoring System</strong> is an advanced health monitoring solution 
          designed for continuous, real-time tracking of cardiovascular data.
        </p>
        <p className="mb-4">
          Using high-precision sensors and integrated software, the system captures detailed heart activity and 
          visualizes it in real-time through dynamic charts. This device is especially useful in clinical environments 
          and home care setups, allowing healthcare professionals and patients to stay informed about heart health 
          without the need for bulky or complex equipment.
        </p>
        <p className="mb-4">
          Features include instant PDF reporting, patient data management, live sensor feeds, and easy-to-read 
          analytics, all accessible from a clean web interface.
        </p>
        <p>
          With a focus on accessibility and simplicity, the platform is suitable for hospitals, remote diagnostics, 
          educational purposes, and personal health tracking.
        </p>
      </div>
    </BackgroundWrapper>
  );
}
