import React from "react";
import STCards from "./lower-section-cards/STCards";

function LowerSectionTwo() {
    return (
        <div className='section-two container pt-5 pb-5'>
            <div className='row'>
                <div className='col'>
                    <h3 className='section-two__heading pb-2 text-center'>
                        Why Choose Us
                    </h3>
                    <p className='section-two__desc text-center pb-5'>
                        Elevating Your Home Buying Experience with Expertise,
                        Integrity, and Unmatched Personalized Service
                    </p>

                    <div className='row st-card'>
                        <STCards
                            image='0'
                            name='Expert Guidance'
                            label='Benefit from our team`s seasoned expertise for a smooth buying experience'
                        ></STCards>
                        <STCards
                            image='1'
                            name='Personalized Service'
                            label='Our services adapt to your unique needs, making your journey stress-free'
                        ></STCards>
                        <STCards
                            image='2'
                            name='Transparent Process'
                            label='Stay informed with our clear and honest approach to buying your home'
                        ></STCards>
                        <STCards
                            image='3'
                            name='Exceptional Support'
                            label='Providing peace of mind with our responsive and attentive customer service'
                        ></STCards>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LowerSectionTwo;
