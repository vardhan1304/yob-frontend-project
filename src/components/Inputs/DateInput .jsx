import React, { useRef, useState } from "react";

const DateInput = ({ setBasicData }) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState("");
  const ref = useRef();

  const handleInputChange = (e) => {
    const value = e.target.value;

    setDateOfBirth(value);
    setBasicData({ dateOfBirth: value });
  };

  return (
    <div className="relative hover:drop-shadow-md">
      <label htmlFor="dob"></label>
      <input
        type="text"
        placeholder="Date of birth"
        id="dob"
        ref={ref}
        max={getTodayDate()}
        value={dateOfBirth}
        //  onChange={({target}) => setSelectedDate(target?.value)}
        onChange={handleInputChange}
        onFocus={() => {
          if (ref.current) {
            ref.current.type = "date";
          }
        }}
        onBlur={() => {
          if (ref.current) {
            ref.current.type = dateOfBirth ? "date" : "text";
          }
        }}
        className={`w-full  px-2 py-2 rounded-xl border-2 focus:outline-none ${
          error ? "border-red-700" : "border-gray-300 "
        }`}
      />
      {error && (
        <p className="absolute text-red-700 text-xs mt-1 px-5">{error}</p>
      )}
    </div>
  );
};

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear() - 18;
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Add leading zero if month or day is less than 10
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
export default DateInput;
