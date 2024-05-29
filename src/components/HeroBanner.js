import React from "react";
import heroImage from "../assets/herro-image.png";

function HeroBanner() {
    return (
        <div className='hero-main container'>
            <div className='row h-100'>
                <div className='col-12 col-md-4 d-flex flex-column justify-content-end justify-content-md-center align-items-center align-items-md-start'>
                    <div className='row'>
                        <div className='col'>
                            <p className='hero-text text-center text-md-start'>
                                Explore our curated selection of exquisite
                                properties meticulously tailored to your unique
                                dream home vision
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-primary'>Signup</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-8 d-flex flex-column mt-5 mt-md-0 justify-content-start justify-content-md-center align-items-center align-items-md-start'>
                    <img
                        className='hero-image'
                        src={heroImage}
                        alt='house.png'
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
