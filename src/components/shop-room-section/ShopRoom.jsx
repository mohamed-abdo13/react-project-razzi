import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  axios  from 'axios';
import './ShopRoom.css';



const ShopRoom = () => {

    const [ roomData, setRoomData ] = useState ([]);

    useEffect(() => {
        axios.get('data.json').then(response => {
            setRoomData(response.data.byRoomData)
        })
    },[]);

    const shopRoomData = roomData.map(shopItem => {
        return(
            <div className="col-lg-6 col-md-12" key={shopItem.id}>
            <div className="card mb-4">
                    <div className="row">
                        <div className="col-md-6">
                        <img src={shopItem.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{shopItem.title}</h5>
                            <ul>
                                <li><Link to='#'>{shopItem.links.link_1}</Link></li>
                                <li><Link to='#'>{shopItem.links.link_2}</Link></li>
                                <li><Link to='#'>{shopItem.links.link_3}</Link></li>
                                <li><Link to='#'>{shopItem.links.link_4}</Link></li>
                                <li><Link to='#'>{shopItem.links.link_5}</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    })


    return (
        <section className='shop-room'>
            <div className="container">
                <h2 className="text-center">shop by room</h2>
                <div className='row'>
                    {shopRoomData}
                </div>
            </div>
        </section>
    )
}

export default ShopRoom
