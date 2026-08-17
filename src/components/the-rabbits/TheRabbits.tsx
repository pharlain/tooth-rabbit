import { useState } from "react";
import image from "../../assets/rabbit.png";

const generateRandomNumber = (from = 1, to = 100) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

const BackgroundImage = () => {
  const [position] = useState(() => ({
    top: generateRandomNumber(0, 90),
    left: generateRandomNumber(0, 90),
  }));

  return (
    <div
      className="absolute w-[5%] h-[5%] opacity-50"
      style={{ top: `${position.top}%`, left: `${position.left}%` }}
    >
      <img src={image} alt="Background" className="w-full h-full object-contain" />
    </div>
  );
};

const TheRabbits = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <BackgroundImage />
      <BackgroundImage />
      <BackgroundImage />
      <BackgroundImage />
    </div>
  );
};

export default TheRabbits;