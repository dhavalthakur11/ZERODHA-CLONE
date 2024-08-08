import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row p-5 text-center mt-5">
        <h1 className="fs-1">Pricing</h1>
        <p className="fs-5 mt-2 text-muted">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row p-5 text-center mt-5 border-top border-bottom">
        <div className="col-4 p-4" >
          <img src="media/images/pricing0.svg" style={{width:"70%"}}/>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted mt-4" style={{fontSize:"1.2em"}}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" style={{width:"70%"}}/>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted mt-4" style={{fontSize:"1.2em"}}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricing0.svg" style={{width:"70%"}}/>
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted mt-4" style={{fontSize:"1.2em"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="mb-5 mt-3 text-muted fs-5">
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

export default Hero;
