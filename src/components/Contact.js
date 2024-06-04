import React from "react";

function Contact() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        fetch("/some-api", { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <div className='contact-main-container pb-5 pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='heading-main text-center mb-1 m-auto w-100 w-md-50'>
                            Do You Have Any Questions?
                        </h3>
                        <h3 className='heading-main text-center mb-5 m-auto w-100 w-md-50'>
                            Get Help From Us
                        </h3>

                        <div className='row justify-content-center'>
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
                                className='d-flex justify-content-center w-100'
                            >
                                <input
                                    className='input-email me-3 w-50'
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
