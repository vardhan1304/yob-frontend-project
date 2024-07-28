import React, { useEffect, useState, useRef } from "react";
import "../../index.css";

import VerifiedIcon from "@mui/icons-material/Verified";

import MobileNumberInput from "../Inputs/MobileNumberInput ";
import EmailAddressInput from "../Inputs/EmailAddressInput ";
import PanNumberInput from "../Inputs/PanNumberInput ";
import AadharNumberInput from "../Inputs/AadharNumberInput ";
import DateInput from "../Inputs/DateInput ";
import urls from "../../../configs/Urls";
import NoAadharClickPopUp from "../PopModals/NoAadharClickPopUp ";
import ValidateAadharOtpModalPop from "../PopModals/ValidateAadharOtpModalPop ";
import GrossAnnualIncome from "../Inputs/GrossAnnualIncome ";
import MotherName from "../Inputs/MotherName";
import OrganisationDetails from "../Inputs/OrganisationDetails";
import Occupation from "../Inputs/Occupation";
import SourceOfIncome from "../Inputs/SourceOfIncome";
import OCCUPATION_N_SOURCE_OF_INCOME from "../../Constants/OCCUPATION_N_SOURCE_OF_INCOME ";
import ProductBar from "../Product/ProductBar";
import Radio from "@mui/material/Radio";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import AirplanemodeActiveTwoToneIcon from "@mui/icons-material/AirplanemodeActiveTwoTone";
import BeachAccessTwoToneIcon from "@mui/icons-material/BeachAccessTwoTone";
import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";
import Checkbox from "@mui/material/Checkbox";
import AadhatOtp from "../Inputs/AadharOtp";

function MainContent() {
  const [editable, setEditable] = useState(true);
  const [aadharNumber, setAadharNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [emailAddersss, setEmailAddersss] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [panNumber, setpanNumber] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isValidateAadharOtpModalVisible, setValidateAadharOtpModalVisible] =
    useState(false);
  const [basicDetails, setBasicDetails] = useState({
    mobileNumber,
    emailAddersss,
    dateOfBirth,
    aadharNumber,
    panNumber,
  });
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const [selectedSourceOfIncome, setSelectedSourceOfIncome] = useState("");
  const [showOccuptnDropdown, setOccuptnDropdown] = useState(false);
  const [showSrcOfIncmDropdown, setSrcOfIncmDropdown] = useState(false);
  const [isGetOtpButtonEnabled, setGetOtpButtonEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("platinum");

  const [getOtpSuccess, setGetOtpSuccess] = useState(false);
  const [otpEntered, setOtpEntered] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const setAadharOtpEntered = (val) => {
    setOtpEntered(val);
  };

  const setBasicData = (data) => {
    setBasicDetails((prevValue) => ({
      ...prevValue,
      ...data,
    }));
  };

  useEffect(() => {
    const validateForm = () => {
      const {
        mobileNumber,
        emailAddress,
        dateOfBirth,
        aadharNumber,
        panNumber,
      } = basicDetails;
      // Simple validation logic for demonstration
      setGetOtpButtonEnabled(
        mobileNumber.length == 10 &&
          emailAddress &&
          aadharNumber.length == 12 &&
          panNumber.length == 10 &&
          dateOfBirth
      );
    };

    validateForm();
  }, [basicDetails]);

  // Find the occupations data from the imported data
  const occupations = OCCUPATION_N_SOURCE_OF_INCOME[0];

  // Find the sources of income based on selected occupation
  const sourcesOfIncome = selectedOccupation
    ? occupations.find((occupation) => occupation.value === selectedOccupation)
        .sourceIncomeArr[0]
    : [];

  // Define refs for the input components
  const occupationRef = useRef(null);
  const sourceOfIncomeRef = useRef(null);

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
    console.log("In main content method  : ", basicDetails);
    // setValidateAadharOtpModalVisible(true);
    const mobileNumber = document.getElementById("mobileNumber").value;
    const emailId = document.getElementById("emailAddress").value;
    const dob = document.getElementById("dob").value;
    const aadharNumber = document.getElementById("aadharNumber").value;
    const url = urls.generateAadharOtp;
    console.log("URL : " + url);
    const currentDate = new Date().toISOString().slice(0, 10);
    console.log(currentDate);
    setGetOtpSuccess(true);

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
      <div>
        <form autoComplete="off">
          <div id="basicDetailfom" className=" conntainer  flex flex-wrap mx-4">
            <div className="w-full sm:w-full pt-4 pl-4 text-xl">
              <p>Enter details to start your savings journey now!</p>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2 hover:drop-shadow-md">
              <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-inner">
                <MobileNumberInput setBasicData={setBasicData} />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-2 hover:drop-shadow-md">
              <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-md">
                <DateInput setBasicData={setBasicData} />
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-2 hover:drop-shadow-md">
              <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-md">
                <EmailAddressInput setBasicData={setBasicData} />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-2 hover:drop-shadow-md">
              <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-md">
                <PanNumberInput setBasicData={setBasicData} />
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-2 hover:drop-shadow-md">
              <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-md">
                <AadharNumberInput setBasicData={setBasicData} />
              </div>
            </div>

            <div
              className={` ${
                !getOtpSuccess
                  ? "hidden"
                  : "w-full lg:w-1/2 p-2 hover:drop-shadow-md"
              }`}
            >
              <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-md">
                <AadhatOtp setAadharOtpEntered={setAadharOtpEntered} />
              </div>
            </div>

            <div className=" py-5 pl-4 ">
              <div
                className={`rounded-2xl ${
                  getOtpSuccess
                    ? "hidden"
                    : isGetOtpButtonEnabled
                    ? "bg-red-800 hover:bg-red-900"
                    : "bg-gray-300"
                } }${!isGetOtpButtonEnabled ? "cursor-not-allowed" : ""} `}
              >
                <button
                  type="button"
                  onClick={submitForm}
                  disabled={!isGetOtpButtonEnabled}
                  className="text-xl text-white font-bold text-center px-10 py-2 "
                >
                  Get OTP
                </button>
              </div>
            </div>
            <div className="w-full  lg:pl-4 sm:w-1/2 flex p-2 lg:w-1/2 sm:ml-auto p2  ">
              <div className=" py-5">
                <div
                  className={`rounded-2xl ${
                    getOtpSuccess ? "bg-gray-300 cursor-not-allowed" : "hidden"
                  }   ${
                    otpEntered
                      ? "bg-red-800 hover:bg-red-900"
                      : "cursor-not-allowed"
                  }`}
                >
                  <button
                    type="button"
                    onClick={submitForm}
                    disabled={!isGetOtpButtonEnabled}
                    className="text-xl text-white font-bold text-center px-10 py-2 "
                  >
                    Validate Otp
                  </button>
                </div>
              </div>
            </div>

            {/* "w-full sm:w-1/2  flex lg:w-1/2 sm:justify-end lg:justify-start sm:pr-4 " */}
          </div>
        </form>
      </div>
      <div className={` ${getOtpSuccess ? "hidden" : "w-full  flex      "} `}>
        <div className="py-3 px-5   rounded-lg">
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

      <div id="professionaldetails" className="py-6 ">
        <div className="pl-6 w-full text-xl">
          <p>
            Please Enter your <strong>professional & personal details</strong>
          </p>
        </div>
        <div className="  flex  flex-wrap">
          {/* <div className="w-full lg:w-1/2 p-4 hover:drop-shadow-md">			
	            <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-inner">			
	              <OrganisationDetails />			
	            </div>			
	          </div> */}

          <div className="w-full lg:w-1/2 px-4 py-2 hover:drop-shadow-md">
            <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-inner">
              <Occupation
                ref={occupationRef}
                value={selectedOccupation}
                options={occupations}
                setOccuptnDropdown={setOccuptnDropdown}
                showOccuptnDropdown={showOccuptnDropdown}
                setSrcOfIncmDropdown={setSrcOfIncmDropdown}
                onChange={(occupation) => {
                  setSelectedOccupation(occupation);
                  setSelectedSourceOfIncome(""); // Clear source of income when occupation changes
                }}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-2  hover:drop-shadow-md">
            <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-inner">
              <SourceOfIncome
                ref={sourceOfIncomeRef}
                value={selectedSourceOfIncome}
                setOccuptnDropdown={setOccuptnDropdown}
                showSrcOfIncmDropdown={showSrcOfIncmDropdown}
                setSrcOfIncmDropdown={setSrcOfIncmDropdown}
                options={sourcesOfIncome}
                onChange={(sourceOfIncm) =>
                  setSelectedSourceOfIncome(sourceOfIncm)
                }
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4 py-2  hover:drop-shadow-md">
            <div className="bg-pink-50  py-5  px-4 rounded-3xl shadow-inner">
              <GrossAnnualIncome />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-2  hover:drop-shadow-md">
            <div className="bg-pink-50 py-5  px-4 rounded-3xl shadow-inner">
              <MotherName />
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        <div className="pt-1 px-6 bg-gray-300 opacity-30"></div>
      </div>

      <div id="productDetails" className="">
        <div className="pl-6 w-full text-xl">
          <p>
            Select your <strong>Product</strong>
          </p>
        </div>

        <div id="productView" className=" px-6 w-full  py-2  ">
          <div className=" bg-white rounded-xl shadow border-2">
            <div className="text-center text-red-900 text-lg font-bold pt-2 ">
              <p>Each product gives you</p>
            </div>
            <ProductBar />
          </div>
        </div>

        <div id="cardDetails" className="lg:mx-20 sm:mx-5 py-4">
          <div className="flex  flex-1 flex-row">
            <div className=" w-1/3 px-4"></div>

            <div className=" mx-4 w-1/3 rounded-xl bg-white shadow-md">
              <div className="">
                <div className="text-center pt-6 pb-2 ">
                  <p>Exclusive for you</p>
                </div>
                <div className="text-center ">
                  <p className="text-xl font-bold">₹10,000 </p>
                  <p className="text-xs py-1">Average Monthly Balance</p>
                  <p className="text-xs py-1"> VISA Classic Debit card</p>
                </div>
                <div className="text-center mt-2 bg-gray-300 rounded-b-xl">
                  <Radio
                    className="text-red-900"
                    color="warning"
                    onChange={handleChange}
                    checked={selectedValue === "classic"}
                    value="classic"
                  />
                  <span className="text-xl  text-white">Select</span>
                </div>
              </div>
            </div>

            <div className=" mx-4 w-1/3 rounded-xl bg-white shadow-md ">
              <div>
                <div className="text-center pt-6 pb-2">
                  <p>Popular</p>
                </div>
                <div className="text-center ">
                  <p className="text-xl font-bold">₹25,000 </p>
                  <p className="text-xs py-1">Average Monthly Balance</p>
                  <p className="text-xs py-1">VISA Platinum Debit card</p>
                </div>
                <div className="text-center mt-2 bg-gray-300 rounded-b-xl">
                  <Radio
                    className="text-red-900"
                    color="warning"
                    onChange={handleChange}
                    checked={selectedValue === "platinum"}
                    value="platinum"
                  />
                  <span className="text-xl text-white ">Select</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="productDetails" className=" lg:mx-20 sm:mx-5 ">
          <div id="productDescription" className="flex flex-1 flex-row py-2">
            <div className="w-1/3 px-3 ">
              <div className=" flex flex-col  text-center text-xs lg:px-20 sx:px-4 ">
                <div className=" py-4">
                  <AirplanemodeActiveTwoToneIcon className="text-red-900" />
                  <span className="px-2">Airport Lounge Acces</span>
                </div>

                <div className="border-t-2 py-2">
                  <h1>10% </h1>
                  <span>
                    <p>instant discount</p>
                  </span>
                  <div>
                    <p>on TATA CLIQ</p>
                  </div>
                </div>

                <div className="border-t-2 py-2">
                  <div>Upto </div>
                  <div>
                    20% Off <span>on yatra</span>
                  </div>

                  <div>on flight and hotels</div>
                </div>

                <div className="border-t-2 py-4">
                  <div>
                    10% Off <span>on Myntra</span>
                  </div>

                  <div>
                    <p>on all your purchases</p>
                  </div>
                </div>

                <div className="border-t-2 py-4">
                  <BeachAccessTwoToneIcon className="text-red-900" />
                  <span className="px-2">Personal Accident Cover</span>
                </div>

                <div className="border-t-2 py-6">
                  <h1>Daily Cash Withdrawal</h1>
                </div>

                <div className="border-t-2 py-4">
                  <h1>Air Accident Cover</h1>
                </div>
              </div>
            </div>

            <div className="w-1/3  px-4  ">
              <div className=" flex flex-col text-center px-4 bg-white shadow-md mr-3  ">
                <div className="py-4">
                  <CloseOutlinedIcon />
                </div>
                <div className="border-t-2 py-4">
                  <DoneOutlinedIcon />
                </div>
                <div className="border-t-2 py-4 pb-6">
                  <DoneOutlinedIcon />
                </div>
                <div className="border-t-2 py-4 pb-6">
                  <DoneOutlinedIcon />
                </div>
                <div className="border-t-2 py-4">
                  <DoneOutlinedIcon />
                </div>
                <div className="border-t-2 py-4">
                  <h1>₹1 Lakhs</h1>
                </div>
                <div className="border-t-2 py-4">
                  <h1>₹5 Lakhs </h1>
                </div>
              </div>
            </div>

            <div className="w-1/3 px-4 ">
              <div className=" flex flex-col text-center px-4 bg-white  shadow-md">
                <div className="py-4">
                  <DoneOutlinedIcon />
                </div>
                <div className="border-t-2 py-4">
                  <DoneOutlinedIcon />
                </div>
                <div className="border-t-2 py-4  pb-6">
                  <DoneOutlinedIcon />
                </div>
                <div className="border-t-2 py-4 pb-6">
                  <DoneOutlinedIcon />
                </div>
                <div className="border-t-2 py-4">
                  <DoneOutlinedIcon />
                </div>
                <div className="border-t-2 py-4">
                  <h1>₹2 Lakhs</h1>
                </div>
                <div className="border-t-2 py-4">
                  <h1>₹35 Lakhs </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        <div className="pt-1 px-6 bg-gray-300 opacity-30"></div>
      </div>

      <div className="" id="disclaimer">
        <div className="px-6">
          <h1 className="text-xl font-semibold">Disclaimer</h1>
        </div>

        <div id="disc1" className="px-6  py-4">
          <div className="px-6 bg-white py-6 rounded-md ">
            <AssistantPhotoRoundedIcon />
            <span className="pl-4 text-sm font-normal">
              I confirm that
              <strong>
                I am not a politically exposed person nor related to one
                (required as per RBI guideline).
              </strong>
              For any change, I will visit the nearest branch and update my
              details.
            </span>
          </div>
        </div>

        <div id="disc2" className=" px-6  py-4">
          <div className="px-6 bg-white py-6 rounded-md ">
            <AssistantPhotoRoundedIcon />
            <span className="pl-4 text-sm font-normal">
              I confirm that
              <strong>
                I am an Indian citizen, born in India and a tax resident of
                India (required as per RBI guideline).
              </strong>
              For any change, I will visit the nearest branch and update my
              details.
            </span>
          </div>
        </div>

        <div id="disc2" className=" px-6  py-4">
          <div className="px-6 bg-white py-6 rounded-md ">
            <AssistantPhotoRoundedIcon />
            <span className="pl-4 text-sm font-normal">
              I confirm that
              <strong>I will complete full KYC within 30 days. </strong> In case
              of failure in doing so, bank reserves a right to initiate closure
              of my savings account.
            </span>
          </div>
        </div>

        <div id="disc2" className=" px-6  py-4">
          <div className="px-6 bg-white py-8 rounded-md ">
            <Checkbox color="success" />
            <span className="pl-4 text-sm font-normal">
              I accept all
              <button className="text-red-900 font-bold hover:font-extrabold hover:underline underline-offset-2 ">
                terms and condition
              </button>
              related to AXIX Bank.
            </span>
          </div>
        </div>
      </div>

      <div id="proceedtoopnacc" className="">
        <div className="py-5 ">
          <div className=" text-right mr-10">
            <button
              type="button"
              className="text-xl text-white font-bold text-center px-6 py-3  bg-slate-300  rounded-xl"
            >
              Proceed to open account
            </button>
          </div>
        </div>
      </div>

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
