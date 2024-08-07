import React from 'react';

function RightSection({  
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return ( 
        <div className="container mt-5">
        <div className="row">
            <div className="col-6 p-5 mt-5">
                <div>                
                <h1>{productName}</h1>
                <p className="mt-4 fs-5 text-muted">{productDescription}</p>
                <a href={learnMore} style={{fontSize:"1.2em"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>             
            </div>
            <div className="col-6 mb-5">
                <img src={imageURL}/>
            </div>
        </div>
    </div>
     );
}

export default RightSection;