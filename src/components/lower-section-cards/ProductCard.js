import React from "react";
import image from "../../assets/sample-prod.png";

function ProductCard(props) {
    return (
        <div>
            <div className='col-10 m-auto'>
                <div className='card'>
                    <img
                        src={image}
                        className='card-img-top'
                        alt='sample product'
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <i className='bi bi-geo-alt-fill'></i> {props.title}
                        </h5>
                        <div className='card-details d-flex justify-content-between'>
                            <p className='card-detail-item'>
                                <i className='bi bi-house'></i> {props.rooms}{" "}
                                Rooms
                            </p>
                            <p className='card-detail-item'>
                                <i className='bi bi-rulers'></i> {props.mes} sq
                                ft
                            </p>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <a className='btn btn-primary btn--small'>
                                    Signup
                                </a>
                            </div>
                            <div className='col'>
                                <p className='card-price mb-0 mt-1'>
                                    ${props.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
