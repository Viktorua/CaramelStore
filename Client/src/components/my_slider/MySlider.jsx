import React from "react";
import { useState } from 'react';
import Slider from "react-slick";


import styles from './my_slider.styles.css'

import slider1 from '../../images/slider1.svg'
import slider2 from '../../images/slider2.svg'
import slider3 from '../../images/slider3.svg'
import slider4 from '../../images/slider4.svg'

import arrow_left from '../../images/arrow_left.svg'
import arrow_right from '../../images/arrow_right.svg'

const imgs = [
    slider1,
    slider2,
    slider3,
    slider4
]

function SampleNextArrow({onClick}) {
    return (
        <div className='arrow arrow-right' onClick={onClick}>
            <img src={arrow_right} alt=""/>
        </div>
    );
}

function SamplePrevArrow({onClick}) {
    return (
        <div className='arrow arrow-left' onClick={onClick}>
            <img src={arrow_left} alt=""/>
        </div>
    );
}

export default function MySlider () {
    

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next)=>setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="container">
            <div className="slider">
                <Slider {...settings}>
                    {
                        imgs.map((img, index)=>(
                            <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
                                <img src={img} alt="" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}
