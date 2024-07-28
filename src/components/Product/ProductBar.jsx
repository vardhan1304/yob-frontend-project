import React from "react";

import VerifiedIcon from "@mui/icons-material/Verified";
function ProductBar() {
  return (
    <>
      <div className=" py-2 flex justify-between pb-4 ">
        <div className=" pl-20 ">
          <p className="text-xl">
            <VerifiedIcon className="text-red-900" />
            Up to <strong> 7.0 %</strong>{" "}
          </p>
          <p className="text-sm text-center">p.a. interest</p>
        </div>
        <div className="text-xs">
          <p className="text-xl">
            <VerifiedIcon className="text-red-900" />
            <strong> Monthly</strong>{" "}
          </p>
          <p className="text-sm text-center">interest credit</p>
        </div>
        <div className="text-xs pr-20">
          <p className="text-xl">
            <VerifiedIcon className="text-red-900 " />
            <strong> Zero Charges</strong>{" "}
          </p>
          <p className="text-sm text-center">on all Services</p>
        </div>
      </div>
    </>
  );
}

export default ProductBar;
