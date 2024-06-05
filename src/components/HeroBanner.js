import React from "react";
import heroImage from "../assets/herro-image.png";
import { motion } from "framer-motion";

function HeroBanner() {
    return (
        <div className='hero-main container'>
            <div className='row h-100'>
                <div className='col-12 col-md-4 d-flex flex-column justify-content-end justify-content-md-center align-items-center align-items-md-start'>
                    <div className='row'>
                        <div className='col'>
                            <motion.p
                                className='hero-text text-center text-md-start'
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.3,
                                }}
                            >
                                Explore our curated selection of exquisite
                                properties meticulously tailored to your unique
                                dream home vision
                            </motion.p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <motion.button
                                className='btn btn-primary btn--big'
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.3,
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                Signup
                            </motion.button>
                        </div>
                    </div>
                </div>
                <motion.div
                    className='col-12 col-md-8 d-flex flex-column mt-5 mt-md-0 justify-content-start justify-content-md-center align-items-center align-items-md-start'
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.7,
                        duration: 0.5,
                    }}
                >
                    <img
                        className='hero-image'
                        src={heroImage}
                        alt='house.png'
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default HeroBanner;
