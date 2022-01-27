import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CarouselHome.css';

function CarouselHome() {


    return (
        <>
            <Carousel fade>
                <Carousel.Item >
                    <img
                        className=" vh-100"
                        src="images/home9-slider-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className=" vh-100"
                        src="images/home9-slider-2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className=" vh-100"
                        src="images/home9-slider-3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className='hero-container'>
                <div className="hero-content">
                    <h2>beast deals from
                        <br />
                        armchairs
                    </h2>
                </div>
                <div className="hero-offer">
                    <div className="offer-text">save</div>
                    <div className="offer-number">50%</div>
                </div>
                <div className="hero-btn">
                    <Link to='/shop' >
                        <span>shop now</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CarouselHome;
