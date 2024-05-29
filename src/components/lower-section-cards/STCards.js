import React from "react";

// Import the images
const images = [
    require("../../assets/map-pin.svg").default,
    require("../../assets/service.svg").default,
    require("../../assets/document.svg").default,
    require("../../assets/handshake.svg").default,
];

function STCards({ image, name, label }) {
    return (
        <div className='col-12 mb-5 col-md-6 col-lg'>
            <div className='st-card__container h-100'>
                <div className='st-card__image d-flex align-items-center justify-content-center'>
                    <img className='img' src={images[image]} alt='image card' />
                </div>
                <p className='st-card__name'>{name}</p>
                <p className='st-card__label'>{label}</p>
            </div>
        </div>
    );
}

export default STCards;
