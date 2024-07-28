import React, { useState } from "react";

const EmailAddressInput = ({ setBasicData }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex =
      /^[a-zA-Z0-9._]+@(gmail\.com|gmail\.co|hotmail\.com|yahoo\.com)$/;

    setEmailAddress(value);
    setBasicData({ emailAddress: value });

    if (value.length == 0) {
      setError("Please enter a valid email");
    } else if (!regex.test(value)) {
      setError("Please enter a valid email Id less than 20 char");
    } else {
      setError("");
    }
  };

  return (
    <div className="relative hover:drop-shadow-md">
      <label htmlFor="emailAddress"></label>
      <input
        type="text"
        id="emailAddress"
        value={emailAddress}
        onChange={handleInputChange}
        placeholder="Email Address"
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

export default EmailAddressInput;
