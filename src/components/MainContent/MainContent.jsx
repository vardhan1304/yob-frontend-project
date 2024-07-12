import React, { useEffect, useState } from "react";
import "../../index.css";

import MobileNumberInput from "../Inputs/MobileNumberInput ";
import EmailAddressInput from "../Inputs/EmailAddressInput ";
import PanNumberInput from "../Inputs/PanNumberInput ";
import AadharNumberInput from "../Inputs/AadharNumberInput ";
import DateInput from "../Inputs/DateInput ";
import urls from "../../../configs/Urls";
import NoAadharClickPopUp from "../PopModals/NoAadharClickPopUp ";
import ValidateAadharOtpModalPop from "../PopModals/ValidateAadharOtpModalPop ";

function MainContent() {
  const [editable, setEditable] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isValidateAadharOtpModalVisible, setValidateAadharOtpModalVisible] =
    useState(false);

  // let disab = false;

  console.log("editable now = " + editable);

  function showAnotherOption() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }
  function closeValidateAadharModal() {
    setValidateAadharOtpModalVisible(false);
  }

  function submitForm() {
    setValidateAadharOtpModalVisible(true);
    const mobileNumber = document.getElementById("mobileNumber").value;
    const emailId = document.getElementById("emailAddersss").value;
    const dob = document.getElementById("dob").value;
    const aadharNumber = document.getElementById("aadharNumber").value;
    const url = urls.generateAadharOtp;
    console.log("URL : " + url);
    const currentDate = new Date().toISOString().slice(0, 10);
    console.log(currentDate);

    console.log("editable before calling method now = " + editable);

    setEditable(false);
    console.log("editable afterr  calling method now = " + editable);

    const body = JSON.stringify({ mobileNumber, emailId, dob, aadharNumber });
    console.log(body);
    console.log("edit afftr clicking otp " + editable);

    // disab = true;
    // console.log( "Previously disdable = false "+" Now disab = " + disab);
  }

  return (
    <>
      <form autoComplete="off">
        <div id="basicDetailfom" className=" conntainer  flex flex-wrap mx-4">
          <div className="w-full sm:w-full pt-4 pl-4">
            <h1>Enter details to start your savings journey now!</h1>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-2 hover:drop-shadow-md">
            <div className="bg-pink-50 p5-2 py-5  px-4 rounded-3xl shadow-inner">
              <MobileNumberInput />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-2 hover:drop-shadow-md">
            <div className="bg-pink-50 p5-2 py-5  px-4 rounded-3xl shadow-md">
              <DateInput />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-2 hover:drop-shadow-md">
            <div className="bg-pink-50 p5-2 py-5  px-4 rounded-3xl shadow-md">
              <EmailAddressInput />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-2 hover:drop-shadow-md">
            <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-md">
              <PanNumberInput />
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-2 hover:drop-shadow-md">
            <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-md">
              <AadharNumberInput />
            </div>
          </div>
          <div className="w-full  lg:pl-4 sm:w-1/2 flex p-2 lg:w-1/2 sm:ml-auto p2  ">
            <div className=" py-5">
              <div className=" rounded-2xl  bg-red-300 hover:bg-red-900">
                <button
                  type="button"
                  onClick={submitForm}
                  className="text-xl text-white font-bold text-center px-10 py-2 "
                >
                  Get OTP
                </button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2  flex lg:w-1/2 sm:justify-end lg:justify-start sm:pr-4 ">
            <div className="py-5 ">
              <div>
                <button
                  type="button"
                  className="text-red-900 hover:text hover:font-bold hover:underline underline-offset-2 "
                  onClick={showAnotherOption}
                >
                  Click here
                </button>
              </div>
              <div>
                <p className="text-xs">If you don't have Aadhar</p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <NoAadharClickPopUp
        isModalVisible={isModalVisible}
        onClose={closeModal}
      />
      <ValidateAadharOtpModalPop
        isValidateAadharOtpModalVisible={isValidateAadharOtpModalVisible}
        onClose={closeValidateAadharModal}
      />
    </>
  );
}

export default MainContent;
