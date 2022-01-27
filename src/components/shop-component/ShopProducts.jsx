import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShopProducts.css'

const ShopProducts = () => {

    const [ isLoading, setLoad ] = useState(true)

    const [ shoptData, setShopData ] = useState([]);

    useEffect (() => {
        axios.get('data.json').then(res => {
            setShopData(res.data.shopProducts);
            setLoad(false);
        })
    },[]);

    const shopDataList = shoptData.map(shopItem => {
        return(
            <div className="col-lg-3 col-md-6 col-12" key={shopItem.id}>
                <div className="card">
                    <img src={shopItem.image}
                    onMouseOver={(e) => {
                        shopItem.hoverImage && (e.currentTarget.src = shopItem.hoverImage);
                      }}
                      onMouseOut={(e) => {
                        shopItem.hoverImage && (e.currentTarget.src = shopItem.image);
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
                        <h6 className="card-title">{shopItem.title}</h6>
                        <span className="old">{shopItem.oldPrice}</span>
                        <span className="new">{shopItem.newPrice}</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className='shop-page bg-white'>
            <div className="container">
                <h2 className='text-center text-capitalize mb-5'>shop</h2>
                <div className="row">
                {isLoading && <h2 className='text-center'>Loading....</h2>}
                    {shopDataList}
                </div>
                <div className="text-center down-title-container">
                    <div className="down-title d-inline-block">
                        <h6 className='text-muted'>Showing 16 of 16 products</h6>
                        <span className="line"></span>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ShopProducts;

