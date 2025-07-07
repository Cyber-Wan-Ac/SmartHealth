import React from "react";
import { Button } from "../components/ui/button";

const Home = ({ onGetStarted }) => {
  return (
    <section className="relative w-full h-screen">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/pulse-bg.jpg')" }}
      ></div>

      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Smart Heart Pulse Sensors
        </h1>
        <p className="text-lg mb-6">
          Monitor, Record, and Download Your Heart Data
        </p>
        <Button onClick={onGetStarted}>Get Started</Button>
      </div>
    </section>
  );
};

export default Home;
