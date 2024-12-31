"use client";

import Image from 'next/image';
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
        "A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"
    ];

    return (

        <div className=" items-center justify-center w-full">
            <h1 className="text-5xl font-bold mb-10 text-center pt-20">Memories</h1>

            <div className="w-full max-w-4xl h-auto p-4 mt-20 mb-20">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="flex items-center justify-center w-full h-[900px] md:h-[800px] lg:h-[800px] relative">
                            <Image src={`/images/${src}.jpeg`} alt={"Anh"} width={200} height={600} className="w-full h-full" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}