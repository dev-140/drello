import React from "react";
import ProductCard from "./lower-section-cards/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function LowerSectionThree() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className='section-three container pb-5 pt-5'>
            <div className='row'>
                <div className='col'>
                    <h3 className='heading-main text-center mb-5'>
                        Our Popular Residences
                    </h3>

                    <div className='slider-container'>
                        <Slider {...settings}>
                            <ProductCard
                                title='San Francisco, California'
                                rooms='4'
                                mes='1,200'
                                price='2,100,200'
                            ></ProductCard>
                            <ProductCard
                                title='Beverly Hills, California'
                                rooms='4'
                                mes='1,200'
                                price='2,100,200'
                            ></ProductCard>
                            <ProductCard
                                title='Palo Alto, California'
                                rooms='4'
                                mes='1,200'
                                price='2,100,200'
                            ></ProductCard>
                            <ProductCard
                                title='New York, New York'
                                rooms='3'
                                mes='1,000'
                                price='1,500,000'
                            />
                            <ProductCard
                                title='Miami, Florida'
                                rooms='5'
                                mes='1,500'
                                price='3,200,000'
                            />
                            <ProductCard
                                title='Austin, Texas'
                                rooms='4'
                                mes='1,300'
                                price='1,800,000'
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LowerSectionThree;
