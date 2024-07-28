import React, { useState } from "react";

const AadharNumberInput = ({ setBasicData }) => {
  const [aadharNumber, setAadharNumber] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    // // Validate mobile number with regex
    // const isValidMobileNumber = /^[0-9]{0,10}$/.test(value);

    // if (isValidMobileNumber || value === '') {
    //   setMobileNumber(value);
    //   setError('');
    // } else {
    //   setError('Please enter a valid 10-digit mobile number');
    // }
    if (!/^\d*$/.test(value)) {
      return;
    }
    setAadharNumber(value);
    setBasicData({ aadharNumber: value });
    if (value.length == 0) {
      setError("Please enter Aadhar number");
    } else if (value.length < 12) {
      setError("Please enter a valid 12-digit Aadhar Number");
    } else {
      setError("");
    }
  };

  return (
    <div className="relative hover:drop-shadow-md">
      <label htmlFor="aadharNumber"></label>
      <input
        type="text"
        id="aadharNumber"
        value={aadharNumber}
        maxLength={12}
        onChange={handleInputChange}
        placeholder="12 digit Aadhar Number"
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

export default AadharNumberInput;
