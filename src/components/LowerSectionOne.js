import React from "react";
import image from "../assets/section-one-img.svg";

function LowerSectionOne() {
    return (
        <div className='section-one container pt-5 pb-5'>
            <div className='row justify-content-center justify-content-lg-between'>
                <div className='col-12 col-md-8 col-lg-6 mb-5 mb-lg-0'>
                    <img
                        className='section-one__image'
                        src={image}
                        alt='house'
                    />
                </div>
                <div className='col-12 col-lg-6 col-xl-5'>
                    <h3 className='section-one__heading text-center text-lg-start'>
                        We Help You To Find Your Dream Home
                    </h3>
                    <p className='section-one__desc text-center text-lg-start'>
                        From cozy cottages to luxurious estates, our dedicated
                        team guides you through every step of the journey,
                        ensuring your dream home becomes a reality.
                    </p>
                    <div className='row'>
                        <div className='col'>
                            <h3 className='section-one__quantity text-center text-lg-start'>
                                8K+
                            </h3>
                            <p className='section-one__label text-center text-lg-start'>
                                Houses Available
                            </p>
                        </div>
                        <div className='col'>
                            <h3 className='section-one__quantity text-center text-lg-start'>
                                6K+
                            </h3>
                            <p className='section-one__label text-center text-lg-start'>
                                Houses Sold
                            </p>
                        </div>
                        <div className='col'>
                            <h3 className='section-one__quantity text-center text-lg-start'>
                                2K+
                            </h3>
                            <p className='section-one__label text-center text-lg-start'>
                                Trusted Agents
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LowerSectionOne;
