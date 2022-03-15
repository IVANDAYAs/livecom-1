import React from "react";
import "./landing.css";
import landingimg from "./images/landing.JPG";
import landinglogo from "./images/logo.png";

export default function(){
    return(
            <div className="landing">
                <img className="landbg" src={landingimg}></img>
                    <div className="landingtext">
                        <img className="landlogo" src={landinglogo}></img>
                        <h4><b>make living sustainable</b></h4>
                        <br />
                        <h2>Avail a 7 day free trial</h2>
                        <h5>We are your well wishers</h5>
                        <h6>STAND A CHANCE TO GET AN EXCLUSIVE LIVECO NFT</h6>
                        <h5 className="lh">Yoga & mindfulness &emsp;&emsp; S &C &emsp;&emsp; HIIT &emsp;&emsp; Cardio vascular endurance training</h5>
                        <div className="lbtn1">
                            <a href="/register"><button  type="button" class="btn  lbtn"> <b>SIGNUP</b></button></a>
                            <button  type="button" class="btn  lbtn"><b>KNOW MORE</b></button>
                        </div>
                    </div>  
            </div>
    );
}