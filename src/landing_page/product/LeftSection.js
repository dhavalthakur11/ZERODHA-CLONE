import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <img src={imageURL}/>
            </div>
            <div className="col-6 p-5 mt-5 links">
                <div>
                <h1>{productName}</h1>
                <p className="mt-4 fs-5 text-muted">{productDescription}</p>
                <a href={tryDemo} style={{fontSize:"1.2em"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore} style={{marginLeft:"20%",fontSize:"1.2em"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="mt-4">
                <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                <a href={appStore} style={{marginLeft:"5%"}}><img src="media/images/appStoreBadge.svg"/></a>
                </div>              
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
