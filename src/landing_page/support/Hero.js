import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-3' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='' style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className='row p-3' id='supportRow'>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticke</h1>
                    <input placeholder='Eg. how to do I activate F&O, why is my order getting reject...' id='supportInput'/><br/>
                    <a href='' style={{textDecoration:"underline"}}>Track account opening</a>
                    <a href='' style={{textDecoration:"underline"}}>Track segment activation</a>
                    <a href='' style={{textDecoration:"underline"}}>Intraday margins</a>
                    <a href='' style={{textDecoration:"underline"}}>Kite user manual</a>
                </div>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href='' style={{textDecoration:"underline"}}>Current Takeovers and Delisting - January 2024</a><br/></li>
                        <li><a href='' style={{textDecoration:"underline"}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>                   
                    
                </div>
            </div>
        </section>
    );
}

export default Hero;