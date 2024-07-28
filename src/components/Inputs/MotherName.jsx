import React, { useState } from "react";

const MotherName = () => {
  const [motherName, setMotherName] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9. ]*$/;
    if (regex.test(value)) {
      setMotherName(value);
    }
    // setMotherName(value);
  };

  return (
    <div className="relative hover:drop-shadow-md">
      <label htmlFor="motherName"></label>
      <input
        type="text"
        id="motherName"
        value={motherName}
        pattern="[a-zA-Z]*"
        maxLength={20}
        onChange={handleInputChange}
        placeholder="Mother's full name (e.g. Lata Singh)"
        className={`w-full px-2 py-2 rounded-xl border-2 focus:outline-none`}
      />
    </div>
  );
};

export default MotherName;
