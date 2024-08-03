import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="mb-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 fs-5 mb-5"
          style={{
            width: "15%",
            margin: "0 auto",
            backgroundColor: "rgb(56, 126, 209)",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
