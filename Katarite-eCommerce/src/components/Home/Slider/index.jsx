import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import libro1 from "./libro1.jpg"
import libro2 from "./libro2.jpg"
import libro3 from "./libro3.jpg"

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="slider">
            <Slider {...settings}>
                <div>
                    <img src={libro1} alt="Slide 1" className="slider_img"/>
                </div>
                <div>
                    <img src={libro2} alt="Slide 1" className="slider_img"/>
                </div>
                <div>
                    <img src={libro3} alt="Slide 1" className="slider_img"/>
                </div>
            </Slider>
        </section>
    )
}

export default HomeSlider;