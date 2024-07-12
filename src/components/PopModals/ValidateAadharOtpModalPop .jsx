import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const ValidateAadharOtpModalPop = ({
  isValidateAadharOtpModalVisible,
  onClose,
}) => {
  const [aadharOtp, setAadharOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isValidateAadharButtonClicked, setValidateAadharButtonClicked] =
    useState(false);

  if (!isValidateAadharOtpModalVisible) return null;

  const handleAadharInputChange = (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      return;
    }
    setAadharOtp(value);
    if (value.length == 0) {
      setError("Please enter aadhar OTP");
      setSuccess("");
    } else if (value.length < 6) {
      setSuccess("");
      setError("Please enter aadhar OTP");
    } else if (value.length == 6) {
      setSuccess("Please click on submit button");
      setError("");
    } else {
      setError("");
    }
  };
  const handleValidateAadharButtonClicked = (e) => {
    setValidateAadharButtonClicked(true);
    console.log("HII");
  };
  const validateButtonClass = () => {
    return `text-xl text-white font-bold text-center px-10 py-2 ${
      isValidateAadharButtonClicked ? "border-2 border-gray-900" : ""
    } rounded-2xl bg-red-300 hover:bg-red-900`;
  };

  const changeBorder = () => {
    if (error) return "border-red-700";
    if (aadharOtp.length === 6) return "border-green-500";
    return "border-gray-300";
  };
  return (
    <>
      <div
        id="modalNoAadharOption"
        className="fixed  inset-0 bg-black bg-opacity-50 backdrop-blur-md  flex justify-center  "
      >
        <div className="bg-slate-50 rounded-2xl px-2  lg:w-1/2 h-1/2 mt-40">
          <div className=" w-full  flex justify-between ... pt-8 px-4 ">
            <div className=" ">
              <h1 className="font-bold text-2xl opacity-40 ">
                Please Aadhar Enter OTP
              </h1>
            </div>
            <div className="flex justify-end ">
              <CloseIcon
                fontSize="large"
                className=" text-red-500 font-bold cursor-pointer  hover:text-red-700 transition duration-200 "
                onClick={onClose}
              />
            </div>
          </div>
          <div className=" w-full px-5  pt-6">
            <div className="w-full px-4 py-10 px- hover:drop-shadow-md">
              <div className="bg-pink-50  py-2  px-4 rounded-3xl shadow-inner">
                <div className="px-4 py-4 ">
                  <div className="  rounded-lg">
                    <label htmlFor="aadharOtp"></label>
                    <input
                      type="text"
                      id="aadharOtp"
                      value={aadharOtp}
                      maxLength={6}
                      onChange={handleAadharInputChange}
                      placeholder="Enter Aadhar OTP"
                      className={`w-full px-4 py-2 rounded-xl border-2 focus:outline-none ${changeBorder()} `}
                    />

                    {error && (
                      <p className="absolute text-red-700 text-xs mt-1 px-5">
                        {error}
                      </p>
                    )}
                    {success && (
                      <p className="absolute text-green-700 text-xs mt-1 px-5">
                        {success}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full  flex justify-center items-center  ">
              <div className=" py-5 ">
                <div className=" rounded-2xl  bg-red-300 hover:bg-red-900">
                  <button
                    type="button"
                    onClick={handleValidateAadharButtonClicked}
                    className={`text-xl text-white font-bold text-center px-10 py-2 ${validateButtonClass()}`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidateAadharOtpModalPop;
