import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios';
import './LimitedTime.css'

export default class LimitedTimeComponent extends Component {

  state = {
    limitedData : []
  };


  componentDidMount()  {
    axios.get('data.json').then(response => {this.setState({limitedData: response.data.limitedSec})})
  }



  render() {

    const {limitedData} = this.state;

    const dataList = limitedData.map(dataItem => {
      return(
        <div className="carousel-item" key={dataItem.id}>
        <div className="carousel-img ">
          <img className="w-100" src={dataItem.image} alt="" />
        </div>
        <div className="carousel-content">
          <div className="header-text text-center">
            <h3>{dataItem.title}</h3>
          </div>
          <div className="price-text">
            <span className="old">{dataItem.oldPrice}</span>
            <span className="new">{dataItem.newPrice}</span>
          </div>
        </div>
      </div>
      )
    })


    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
        <section className="time-section text-center">
            <div className="container">
            <h2> Limited Time Deals </h2>
            <p>A conscious collection made entirely from food crop waste, recycled cotton, other more sustainable materials.</p>
                <Slider {...settings}>
                  {dataList}
                </Slider>
            </div>
        </section>
    );
  }
}
