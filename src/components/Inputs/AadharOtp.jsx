import React, { useState } from "react";

function AadhatOtp({ setAadharOtpEntered }) {
  const [aadharOtp, setAadharOtp] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      return;
    }
    setAadharOtp(value);
    if (value.length == 6) setAadharOtpEntered(true);

    if (value.length == 0) {
      setError("Please aadhar Otp");
    } else if (value.length < 6) {
      setError("Please enter a valid 6-digit aadhar Otp");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <div className="relative hover:drop-shadow-md">
        <label htmlFor="aadharOtp"></label>
        <input
          type="text"
          id="aadharOtp"
          value={aadharOtp}
          maxLength={6}
          onChange={handleInputChange}
          placeholder="Enter aadhar Otp"
          className={`w-full px-2 py-2 rounded-xl border-2 focus:outline-none ${
            error ? "border-red-700" : "border-gray-300"
          }`}
        />
        {error && (
          <p className="absolute text-red-700 text-xs mt-1 px-5">{error}</p>
        )}
      </div>
    </div>
  );
}

export default AadhatOtp;
