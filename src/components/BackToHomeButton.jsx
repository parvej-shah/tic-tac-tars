import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackToHomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="bg-primary text-textPrimary py-2 px-4 rounded-md shadow-subtle hover:bg-secondary transition duration-300 ease-in-out"
    >
      Back to Home
    </button>
  );
}
