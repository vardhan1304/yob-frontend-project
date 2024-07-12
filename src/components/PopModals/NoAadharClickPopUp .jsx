import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const NoAadharClickPopUp = ({ isModalVisible, onClose }) => {
  if (!isModalVisible) return null;

  return (
    <>
      <div
        id="modalNoAadharOption"
        className="fixed  inset-0 bg-black bg-opacity-50 backdrop-blur-md  flex justify-center items-center "
      >
        <div className="bg-white rounded-2xl px-4 mx-10">
          <div className=" w-full  flex justify-between ... pt-4  px-4">
            <div className="">
              <h1 className="font-bold text-2xl opacity-40 ">
                Explore other options
              </h1>
            </div>
            <div className="">
              <CloseIcon
                fontSize="large"
                className=" text-red-500 font-bold cursor-pointer  hover:text-red-700 transition duration-200 "
                onClick={onClose}
              />
            </div>
          </div>
          <div className="px-4 py-4 ">
            <div className="px-6  bg-gray-100 rounded-lg">
              <div className="py-4">
                <h1 className="font-bold">
                  Don’t remember your <br />
                  Aadhaar number?
                </h1>
              </div>
              <div className="py-3 text-xs pb-10">
                <p>
                  <strong>In order to retrieve your Aadhar online,</strong>
                  <br />
                  <strong>Step 1:</strong>"Visit the UIDAI site below"
                  <br />
                  <strong>Step 2:</strong>"Enter your name and search by
                  registered mobile number or email address"
                  <br />
                  <strong>Step 3:</strong>"Retrieve your Aadhaar number via OTP
                  verification"
                  <br />
                  <strong>Step 4:</strong>"Resume your IDFC FIRST savings
                  account portal and enter your Aadhaar number to continue your
                  journey"
                </p>
              </div>
            </div>
            <div className=" items-center flex justify-center ">
              <div
                id="mdoalOr"
                className=" fixed p-2 rounded-full border-4  bg-gray-100"
              >
                <h1>
                  <strong>OR</strong>
                </h1>
              </div>
            </div>

            <div className="px-6 rounded-lg mt-2 bg-gray-100 ">
              <div>
                <h1 className="font-bold pt-4">
                  Don’t have an <br />
                  Aadhaar number?
                </h1>
              </div>
              <div className="py-3 text-xs  mb-10 pb-10">
                <p>
                  Open your savings account by opting for an{" "}
                  <strong>offline branch-based journey</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoAadharClickPopUp;
