import React from "react";

function Testimonials(props) {
    const imagesRoom = [
        require("../../assets/testimonial-room-1.svg").default,
        require("../../assets/testimonial-room-2.svg").default,
        require("../../assets/testimonial-room-3.svg").default,
        require("../../assets/testimonial-room-4.jpeg"),
        require("../../assets/testimonial-room-5.jpeg"),
    ];

    const imagesProfile = [
        require("../../assets/profile-pic-1.svg").default,
        require("../../assets/profile-pic-2.svg").default,
        require("../../assets/profile-pic-3.svg").default,
        require("../../assets/profile-pic-4.webp"),
        require("../../assets/profile-pic-5.webp"),
    ];
    return (
        <div className='TS-card pb-2'>
            <div className='TS-card__image'>
                <img src={imagesRoom[props.imgRoom]} />
            </div>
            <div className='TS-card__body p-3'>
                <div className='TS-card__info mt-2 d-flex align-items-center mb-3'>
                    <img
                        src={imagesProfile[props.imgProfile]}
                        className='card-profile-img'
                    />
                    <div className='TS-card__name d-flex flex-column ms-2'>
                        <p className='text text--normal text--bold mb-0'>
                            {props.name}
                        </p>
                        <p className='text text--main mb-0'>{props.location}</p>
                    </div>

                    <div className='TS-card__rating d-flex aling-items-center p-1 ms-auto'>
                        <i className='bi bi-star-fill star'></i>
                        <p className='text text--16 mb-0 rating ms-2'>
                            {props.rating}
                        </p>
                    </div>
                </div>
                <div className='TS-card__desc'>
                    <p className='text text--16 mb-0'>{props.comment}</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
