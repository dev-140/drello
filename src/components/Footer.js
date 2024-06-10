import React from "react";
import logo from "../assets/logo.svg";

function Footer() {
    return (
        <div className='footer-main'>
            <div className=' container pb-5 pt-5'>
                <div className='row'>
                    <div className='col-12 col-md'>
                        <img src={logo} alt='dwello footer logo' />
                        <p className='text text--normal text--bold text--black mt-3'>
                            Bringing you closer to your dream home, one click at
                            a time.
                        </p>
                    </div>
                    <div className='col-6 col-md'>
                        <p className='text text--large text--bold text--black'>
                            About
                        </p>
                        <p className='text text--normal text--black'>
                            Our Story
                        </p>
                        <p className='text text--normal text--black'>Careers</p>
                        <p className='text text--normal text--black'>
                            Our Team
                        </p>
                        <p className='text text--normal text--black'>
                            Resources
                        </p>
                    </div>
                    <div className='col-6 col-md'>
                        <p className='text text--large text--bold text--black'>
                            Support
                        </p>
                        <p className='text text--normal text--black'>FAQ</p>
                        <p className='text text--normal text--black'>
                            Contact Us
                        </p>

                        <p className='text text--normal text--black'>
                            Help Center
                        </p>
                        <p className='text text--normal text--black'>
                            Terms of Service
                        </p>
                    </div>
                    <div className='col-6 col-md'>
                        <p className='text text--large text--bold text--black'>
                            Find Us
                        </p>
                        <p className='text text--normal text--black'>Events</p>
                        <p className='text text--normal text--black'>
                            Locations
                        </p>
                        <p className='text text--normal text--black'>
                            Newsletter
                        </p>
                    </div>
                    <div className='col-6 col-md'>
                        <p className='text text--large text--bold text--black'>
                            Our Social
                        </p>
                        <p className='text text--normal text--black'>
                            <i className='bi bi-instagram'></i> Instagram
                        </p>
                        <p className='text text--normal text--black'>
                            <i className='bi bi-facebook'></i> Facebook
                        </p>
                        <p className='text text--normal text--black'>
                            <i className='bi bi-twitter'></i> Twitter (x)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
