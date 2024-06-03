import React from "react";
import Testimonials from "./lower-section-cards/Testimonials";

function About() {
    return (
        <div className='about-container container pb-5 pt-5'>
            <div className='row'>
                <div className='col'>
                    <h3 className='heading-main text-center mb-5 m-auto w-100 w-md-50'>
                        What People Say About Dwello
                    </h3>

                    <Testimonials></Testimonials>
                </div>
            </div>
        </div>
    );
}

export default About;
