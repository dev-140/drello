import React from "react";
import { motion } from "framer-motion";

function Contact() {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        fetch("/some-api", { method: form.method, body: formData });

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <div className='contact-main-container pb-5 pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <motion.h3
                            className='heading-main text-center mb-1 m-auto w-100 w-md-50'
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.3,
                            }}
                        >
                            Do You Have Any Questions?
                        </motion.h3>
                        <motion.h3
                            className='heading-main text-center mb-5 m-auto w-100 w-md-50'
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.7,
                                duration: 0.3,
                            }}
                        >
                            Get Help From Us
                        </motion.h3>

                        <motion.div
                            className='row justify-content-center'
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.8,
                                duration: 0.3,
                            }}
                        >
                            <p className='text text--main width--fit'>
                                <i className='bi bi-check-circle'></i> Chat live
                                with our support team
                            </p>
                            <p className='text text--main width--fit mb-5'>
                                <i className='bi bi-check-circle'></i> Browse
                                our FAQ
                            </p>

                            <form
                                method='post'
                                onSubmit={handleSubmit}
                                className='d-flex justify-content-center w-100 flex-column flex-md-row'
                            >
                                <input
                                    className='input-email mb-3 me-0 mb-md-0 me-md-3'
                                    placeholder='Enter your Email Address'
                                    type='email'
                                    name='myInput'
                                />

                                <button
                                    type='submit'
                                    className='btn btn-primary'
                                >
                                    Submit
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
