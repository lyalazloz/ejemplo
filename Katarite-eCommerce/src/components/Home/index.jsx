import React from "react";
import FeaturedProducts from './FeaturedProducts'
import Slider from './Slider'
import Newsletter from './Newsletter'

const Home = () => {
    return (
        <>
            <Slider />
            <FeaturedProducts />
            <Newsletter />
        </>
    )
}

export default Home;