import React from "react";

function Univers() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p style={{fontSize:"1.2em"}}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-2 mt-5">
          <img src="media/images/smallcaseLogo.png"/>
          <p className="text-small text-muted">thematic investment platforms</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted">Algo & strategy platforms</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ width: "53%" }} />
          <p className="text-small text-muted">Option trading platforms</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted">thematic investment platforms</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.svg" style={{ width: "42%" }} />
          <p className="text-small text-muted">Algo & strategy platforms</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted">Option trading platforms</p>
        </div>
        <div className="mt-5 mb-5">
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
    </div>
  );
}

export default Univers;
