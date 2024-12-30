"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        '/images/A.jpeg',
        '/images/B.jpeg',
        '/images/C.jpeg',
        '/images/D.jpeg',
        '/images/E.jpeg',
        '/images/F.jpeg',
        '/images/1.jpeg',
        '/images/2.jpeg',
        '/images/3.jpeg',
        '/images/4.jpeg',
        '/images/5.jpeg',
        '/images/6.jpeg',
        '/images/7.jpeg',
        '/images/8.jpeg',
        '/images/9.jpeg',
        '/images/10.jpeg',
        '/images/11.jpeg',
        '/images/12.jpeg',
        '/images/13.jpeg',


    ];

    return (
        <div className="flex items-center justify-center w-full w-[350px]">
            <div className="w-full max-w-[600px] h-auto p-4 mt-20 mb-20">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="w-full h-full">
                            <img
                                src={src}
                                alt={`Remind ${index + 1}`}
                                className="w-full h-full object-contain outline-none"
                                onClick={(e) => e.currentTarget.blur()}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}