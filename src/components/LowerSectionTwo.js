import React from "react";
import STCards from "./lower-section-cards/STCards";
import { motion } from "framer-motion";

function LowerSectionTwo() {
    return (
        <div className='section-two container pt-5 pb-5'>
            <div className='row'>
                <div className='col'>
                    <motion.h3
                        className='heading-main pb-2 text-center'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.3,
                        }}
                    >
                        Why Choose Us
                    </motion.h3>
                    <motion.p
                        className='section-two__desc text-center pb-5'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5,
                        }}
                    >
                        Elevating Your Home Buying Experience with Expertise,
                        Integrity, and Unmatched Personalized Service
                    </motion.p>

                    <motion.div
                        className='row st-card'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.3,
                        }}
                    >
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default LowerSectionTwo;
