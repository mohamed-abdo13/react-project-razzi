import React from "react";
import { Link } from "react-router-dom";
import "./LimitedSecTow.css";

const LimitedSecTow = () => {
  return (
    <section className="limited-tow">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="image-content">
              <div className="image-box">
                <img className="w-100" src="images/home9-imgbox-1.jpg" alt="" />
              </div>
              <div className="image-box-text">
                <h3>new 2021 home decor collection</h3>
                <div className="hero-btn">
                  <Link to="#">
                    <span>shop now</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-6">
                <div className="img-container">
                  <div className="image-img">
                    <img
                      className="w-100"
                      src="images/home9-img-2.jpg" alt="" />
                  </div>
                  <div className="img-text text-center">
                      <h4>Office Armchairs</h4>
                      <p>Starting $399</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="img-container">
                  <div className="image-img">
                    <img
                      className="w-100"
                      src="images/home9-img-3.jpg" alt="" />
                  </div>
                  <div className="img-text text-center">
                      <h4>Dining Tables</h4>
                      <p>Starting $399</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="img-container">
                  <div className="image-img">
                    <img
                      className="w-100"
                      src="images/home9-img-4.jpg" alt="" />
                  </div>
                  <div className="img-text text-center">
                      <h4>Office Armchairs</h4>
                      <p>Starting $399</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="img-container">
                  <div className="image-img">
                    <img
                      className="w-100"
                      src="images/home9-img-5.jpg" alt="" />
                  </div>
                  <div className="img-text text-center">
                      <h4>Dining Tables</h4>
                      <p>Starting $399</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedSecTow;
