import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mb-1 border-top">
        <h1 className=" text-center mt-3">People</h1>
      </div>
      <div className="row p-3" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <div className="col-6 text-center">
          <img src="media/images/nithinKamath.jpg" style={{width:"50%",borderRadius:"100%"}}/>
          <h4 className="text-muted mt-5">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p><a href="">Connect on Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
