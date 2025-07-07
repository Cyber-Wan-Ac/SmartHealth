import React from "react";

const BackgroundWrapper = ({ children, image }) => (
  <div className="relative min-h-screen">
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
    <div className="absolute inset-0 bg-black opacity-40 z-0" />
    <div className="relative z-10">{children}</div>
  </div>
);

export default BackgroundWrapper;
