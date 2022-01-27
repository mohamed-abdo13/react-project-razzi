import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarMenu = () => {

    const [show, setShow] = useState('false');
    const [clickd, setClickd] = useState('false');
    const [linked, setLinked] = useState('false');
    
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <div className="nav-content">
                    <div className="menu-icon" onClick={() => {setShow(!show)}}>
                        <i className={show ? 'fas fa-bars' : 'fas fa-times'}></i>
                    </div>
                    <div className="logo">
                        <Link to="/">razzi.</Link>
                    </div>
                    <ul className={show ?"links " : "links active"}>
                        <li className="link-item"><Link className="nav-link" to="/">home</Link></li>
                        <li className="link-item"><Link className="nav-link" to="/shop">shop</Link></li>
                        <li className="dropdown-list link-item">
                            <Link className="nav-link dropdown-link" to="/blog">blog</Link><i className={clickd ? "fas fa-angle-down" : "fas fa-angle-up"} onClick={() => {setClickd(!clickd)}}></i>
                            <ul className={!clickd ? "dropdown-menu-list show" : "dropdown-menu-list"}>
                                <li><Link to="#" className="dropdown-item">blog grid 2 columns</Link></li>
                                <li><Link to="#" className="dropdown-item">blog grid 3 columns</Link></li>
                                <li><Link to="#" className="dropdown-item">single post</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown-list link-item">
                            <Link className="nav-link dropdown-link" to="#">page</Link><i className={linked ? "fas fa-angle-down" : "fas fa-angle-up"} onClick={() => {setLinked(!linked)}}></i>
                            <ul className={!linked ? "dropdown-menu-list show" : "dropdown-menu-list"}>
                                <li><Link to="/about" className="dropdown-item">about us</Link></li>
                                <li><Link to="#" className="dropdown-item">link 2</Link></li>
                                <li><Link to="#" className="dropdown-item">link 3</Link></li>
                                <li><Link to="#" className="dropdown-item">link 4</Link></li>
                                <li><Link to="#" className="dropdown-item">link 5</Link></li>
                                <li><Link to="#" className="dropdown-item">link 6</Link></li>
                            </ul>
                        </li>
                        <li className="link-item"><Link className="nav-link" to="#">features</Link></li>
                    </ul>
                    <ul className="icons">
                        <li><Link to="#"><i className="far fa-search"></i></Link></li>
                        <li><Link to="#"><i className="far fa-user"></i></Link></li>
                        <li><Link to="#"><i className="far fa-heart"></i></Link></li>
                        <li><Link to="#"><i className="far fa-shopping-bag"></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarMenu;
