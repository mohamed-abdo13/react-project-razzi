import React, { Component } from "react";
import Slider from "react-slick";
import './IconCarousel.css'

export default class IconCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-main">
        <Slider className="container" {...settings}>
          <div>
            <i className="fas fa-bed"></i>
            <h5>beds</h5>
          </div>
          <div>
            <i className="fas fa-couch"></i>
            <h5>sofas</h5>
          </div>
          <div>
            <i className="fas fa-table"></i>
            <h5>coffee tables</h5>
          </div>
          <div>
            <i className="fas fa-receipt"></i>
            <h5>tV stands</h5>
          </div>
          <div>
            <i className="fas fa-chair"></i>
            <h5>chairs</h5>
          </div>
          <div>
          <i className="fas fa-table"></i>
            <h5>dining tables</h5>
          </div>
          <div>
            <i className="fas fa-warehouse"></i>
            <h5>wardrobes</h5>
          </div>
          <div>
          <i className="fas fa-bed"></i>
            <h5>beds</h5>
          </div>
        </Slider>
      </div>
    );
  }
}