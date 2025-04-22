import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Import the Robot TARS image
import tarsImage from "../assets/images/tar.webp"; // Update with the correct path

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with custom options
  }, []);

  return (
    <div className="landing-page h-screen bg-gradient-to-r from-background via-surface to-background text-textPrimary flex flex-col items-center justify-center space-y-8 px-4 sm:px-8 md:px-16">
      {/* Hero Section */}
      <div className="text-center space-y-4" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-primary">
          Tic-Tac-Tars Challenge
        </h1>
        <p className="text-lg sm:text-xl text-textSecondary max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Face off against the brilliant, robotic TARS or engage in a friendly battle. Who will claim the victory?
        </p>
      </div>

      {/* Robot TARS Image */}
      <div className="tars-image mb-8" data-aos="zoom-in" data-aos-delay="400">
        <img
          src={tarsImage}  // Path to your Robot TARS image
          alt="Robot TARS"
          className="w-36 h-36 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-primary shadow-glow"
        />
      </div>

      {/* Play Options */}
      <div className="buttons flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6" data-aos="fade-up" data-aos-delay="600">
        <button
          className="btn btn-primary bg-primary hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          onClick={() => navigate("/tars-game")}
        >
          Challenge TARS
        </button>
        <button
          className="btn btn-secondary bg-secondary hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          onClick={() => navigate("/friend-game")}
        >
          Friendly Battle
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
