import React from "react";
import Testimonials from "./lower-section-cards/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function About() {
    var settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='about-container container pb-5 pt-5'>
            <div className='row'>
                <div className='col'>
                    <h3 className='heading-main text-center mb-5 m-auto w-100 w-md-50'>
                        What People Say About Dwello
                    </h3>

                    <Slider {...settings}>
                        <Testimonials
                            imgRoom='0'
                            imgProfile='0'
                            name='Sarah Nguyen'
                            location='San Francisco'
                            rating='5.0'
                            comment='Dwello truly cares about their clients. They listened to
                        my needs and preferences and helped me find the perfect
                        home in the Bay Area. Their professionalism and
                        attention to detail are unmatched.'
                        ></Testimonials>
                        <Testimonials
                            imgRoom='1'
                            imgProfile='1'
                            name='John Doe'
                            location='Los Angeles'
                            rating='4.8'
                            comment='The team at Dwello was fantastic. They guided me through the entire process and made buying a home so much easier than I expected.'
                        ></Testimonials>

                        <Testimonials
                            imgRoom='2'
                            imgProfile='2'
                            name='Emily Davis'
                            location='New York'
                            rating='4.9'
                            comment='Dwello"s dedication to finding the right home for me was incredible. Their expertise and market knowledge are second to none.'
                        ></Testimonials>

                        <Testimonials
                            imgRoom='3'
                            imgProfile='3'
                            name='Michael Brown'
                            location='Chicago'
                            rating='4.7'
                            comment='I was impressed by Dwello"s professionalism and efficiency. They found me a great home in a very short amount of time.'
                        ></Testimonials>

                        <Testimonials
                            imgRoom='4'
                            imgProfile='4'
                            name='James White'
                            location='Miami'
                            rating='5.0'
                            comment='Dwello made my home-buying experience a breeze. They are knowledgeable, friendly, and truly care about their clients.'
                        ></Testimonials>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default About;
