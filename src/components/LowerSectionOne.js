import React from "react";
import image from "../assets/section-one-img.svg";
import { motion } from "framer-motion";

function LowerSectionOne() {
    return (
        <div className='section-one container pt-5 pb-5'>
            <div className='row justify-content-center justify-content-lg-between'>
                <motion.div
                    className='col-12 col-md-8 col-lg-6 mb-5 mb-lg-0'
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                    }}
                >
                    <img
                        className='section-one__image'
                        src={image}
                        alt='house'
                    />
                </motion.div>
                <div className='col-12 col-lg-6 col-xl-5'>
                    <motion.h3
                        className='section-one__heading text-center text-lg-start'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.3,
                        }}
                    >
                        We Help You To Find Your Dream Home
                    </motion.h3>
                    <motion.p
                        className='section-one__desc text-center text-lg-start'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.7,
                            duration: 0.3,
                        }}
                    >
                        From cozy cottages to luxurious estates, our dedicated
                        team guides you through every step of the journey,
                        ensuring your dream home becomes a reality.
                    </motion.p>
                    <div className='row'>
                        <div className='col'>
                            <motion.h3
                                className='section-one__quantity text-center text-lg-start'
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.9,
                                    duration: 0.3,
                                }}
                            >
                                8K+
                            </motion.h3>
                            <motion.p
                                className='section-one__label text-center text-lg-start'
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1.1,
                                    duration: 0.3,
                                }}
                            >
                                Houses Available
                            </motion.p>
                        </div>
                        <div className='col'>
                            <motion.h3
                                className='section-one__quantity text-center text-lg-start'
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 1.3,
                                    duration: 0.3,
                                }}
                            >
                                6K+
                            </motion.h3>
                            <motion.p
                                className='section-one__label text-center text-lg-start'
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1.5,
                                    duration: 0.3,
                                }}
                            >
                                Houses Sold
                            </motion.p>
                        </div>
                        <div className='col'>
                            <motion.h3
                                className='section-one__quantity text-center text-lg-start'
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 1.7,
                                    duration: 0.3,
                                }}
                            >
                                2K+
                            </motion.h3>
                            <motion.p
                                className='section-one__label text-center text-lg-start'
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1.9,
                                    duration: 0.3,
                                }}
                            >
                                Trusted Agents
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LowerSectionOne;
