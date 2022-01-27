import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BeastSeller.css'

const BeastSeller = () => {

    const [ beastData, setBeastData ] = useState([]);

    useEffect (() => {
        axios.get('data.json').then(res => {
            setBeastData(res.data.BeastSellers)
        })
    },[]);

    const BeastDataList = beastData.map(beastItem => {
        return(
            <div className="col-lg-3 col-md-6 col-12" key={beastItem.id}>
                <div className="card">
                    <img src={beastItem.image}
                    onMouseOver={(e) => {
                        beastItem.hoverImage && (e.currentTarget.src = beastItem.hoverImage);
                      }}
                      onMouseOut={(e) => {
                        beastItem.hoverImage && (e.currentTarget.src = beastItem.image);
                      }}
                     className="card-img-top" alt=""/>
                     <div className="card-icon-top">
                        <Link to="#"><i className="far fa-shopping-bag"></i></Link>
                        <Link to="#"><i className="far fa-eye"></i></Link>
                     </div>
                     <div className="card-add-btn text-center">
                        <Link to="#"><i className="far fa-shopping-bag"></i>add to card</Link>
                     </div>
                    <div className="card-body text-center">
                        <h6 className="card-title">{beastItem.title}</h6>
                        <span className="old">{beastItem.oldPrice}</span>
                        <span className="new">{beastItem.newPrice}</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className='beast-seller'>
            <div className="container">
                <h2 className='text-center'>beast sellers</h2>
                <div className="row">
                    {BeastDataList}
                </div>
                <Link to='/shop' className='load-more text-center d-block' >discover more</Link>
            </div>
        </section>
    )
}

export default BeastSeller
