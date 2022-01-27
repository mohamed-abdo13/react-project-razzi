import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 mb-5">
                        <div className="logo-content mb-4">
                            <h2 className='text-capitalize fw-bold'><Link to="/" >razzi.</Link></h2>
                        </div>
                        <div className="footer-icons">
                            <Link className='link me-4' to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link className='link me-4' to="#"><i className="fab fa-twitter"></i></Link>
                            <Link className='link me-4' to="#"><i className="fab fa-google"></i></Link>
                            <Link className='link me-4' to="#"><i className="fab fa-tumblr"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="footer-list">
                                    <h6 className='text-uppercase mb-4'>support</h6>
                                    <ul>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">contact us</Link></li>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">FAQs</Link></li>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">store locator</Link></li>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">shipping & returns</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                            <div className="footer-list">
                                    <h6 className='text-uppercase mb-4'>shop</h6>
                                    <ul>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">men's shopping</Link></li>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">women's shopping</Link></li>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">kid's shopping</Link></li>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">discounts</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                            <div className="footer-list">
                                    <h6 className='text-uppercase mb-4'>company</h6>
                                    <ul>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">our story</Link></li>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">careers</Link></li>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">terms & conditions</Link></li>
                                        <li><Link className='text-capitalize mb-2 d-block' to="#">privacy & cookie policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                            <div className="footer-list">
                                    <h6 className='text-uppercase mb-4'>contact</h6>
                                    <ul>
                                        <li className='not-link mb-2'>002-01000267730</li>
                                        <li className='not-link mb-2'>002-01113633383</li>
                                        <li className='not-link mb-2'>moha.abdo13@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
