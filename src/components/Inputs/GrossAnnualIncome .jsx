import React, { useState } from "react";

const GrossAnnualIncome = () => {
  const [annualIncome, setAnnualIncome] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      return;
    }
    setAnnualIncome(value);
  };

  return (
    <div className="relative hover:drop-shadow-md">
      <label htmlFor="annualIncome"></label>
      <input
        type="text"
        id="annualIncome"
        value={annualIncome}
        maxLength={10}
        onChange={handleInputChange}
        placeholder="Gross annual income in Rupee"
        className={`w-full px-2 py-2 rounded-xl border-2 focus:outline-none`}
      />
    </div>
  );
};

export default GrossAnnualIncome;
