import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import "../../index.css";

function Header() {
  return (
    <>
      <div id="header" className="bg-red-900 flex justify-between ...">
        <div>
          <img
            className="px-5 py-2 size-50"
            src="./src/assets/logo-yob.png"
            alt="Logo"
          ></img>
        </div>

        <div className="order-last text-2xl">
          <h1 className="text-zinc-50 py-6 mr-20">Open your savings Account</h1>
        </div>

        <div />
      </div>
    </>
  );
}

export default Header;
