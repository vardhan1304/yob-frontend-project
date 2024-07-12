import React, { useState } from "react";

const PanNumberInput = () => {
  const [panNumber, setpanNumber] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9]+$/;
    const emailUpperCase = value.toUpperCase();
    setpanNumber(emailUpperCase);

    if (value.length == 0) {
      setError("Please enter valid PAN number");
    } else if (!regex.test(value)) {
      setError("Please enter a valid PAN number");
    } else {
      setError("");
    }
  };

  return (
    <div className="relative hover:drop-shadow-md">
      <label htmlFor="panNumber"></label>
      <input
        type="text"
        id="panNumber"
        value={panNumber}
        pattern="[a-zA-Z0-9]*"
        maxLength={10}
        onChange={handleInputChange}
        placeholder="Permanent Account Number (PAN)"
        className={`w-full px-2 py-2 rounded-xl border-2 focus:outline-none ${
          error ? "border-red-700" : "border-gray-300"
        }`}
      />
      {error && (
        <p className="absolute text-red-700 text-xs mt-1 px-5">{error}</p>
      )}
    </div>
  );
};

export default PanNumberInput;
