// src/pages/Home.jsx

import React from "react";
import { Button } from "../components/ui/Button";

const Home = ({ onGetStarted }) => {
  return (
    <div className="text-center py-40 bg-cover bg-center" style={{ backgroundImage: "url('/pulse-bg.jpg')" }}>
      <h1 className="text-5xl font-bold text-white mb-4">Smart Heart Pulse Sensors</h1>
      <p className="text-white text-lg">
        Monitor, Record, and Download Your Heart Data in Real-Time
      </p>
      <Button className="mt-6" onClick={onGetStarted}>
        Get Started
      </Button>
    </div>
  );
};

export default Home;
