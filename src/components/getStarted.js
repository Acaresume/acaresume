import React from 'react';
import '../css/getStarted.css'
import Particles from "react-particles-js";

//Component for the Landing Page
function GetStarted() {

    return (
        <div className="getstarted">
            
            <div className="header">
                <img className="header__logo" alt="logo" />
                <h3> AcaResume🚀</h3>
            </div>

            <div className="content__left">
                <div className="content__left__description">
                    <h1>Heading for Functioning</h1>
                    <h2>👉 Point One</h2>
                    <h2>👉 Point Two</h2>
                    <h2>👉 Point Three</h2>
                </div>
                <div className="content__left__btn">
                    <h3 className="content__left__btn__text">Build Your Resume</h3>
                </div>
            </div>

        </div>
    )
}

export default GetStarted;