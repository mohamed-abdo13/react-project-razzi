import React from 'react';
import BeastSeller from '../components/beast-saller-component/BeastSeller';
import CarouselHome from '../components/hero-img-component/CarouselHome';
import SubSection from '../components/home-subscribe/SubSection';
import IconCarousel from '../components/icon-carousel/IconCarousel';
import LimitedTimeComponent from '../components/limited-time/LimitedTimeComponent';
import LimitedSecTow from '../components/limited-sec-tow/LimitedSecTow';
import SaleSec from '../components/sale-section/SaleSec';
import ShopRoom from '../components/shop-room-section/ShopRoom';


const HomePages = () => {
    return (
        <>
            <CarouselHome />
            <IconCarousel />
            <LimitedTimeComponent />
            <LimitedSecTow />
            <SaleSec />
            <BeastSeller />
            <ShopRoom />
            <SubSection />
        </>
    )
}

export default HomePages
