"use client"

import React, { useEffect, useState } from 'react';
import ImageSlider from '@/components/ImageSlider';
import Loading from '@/components/Loading';

const Memories: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    return (

        <div className="w-full h-screen bg-gradient-to-tl from-yellow-400 via-red-500 to-pink-500 text-white flex flex-col items-center justify-center font-sans">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h1 className="text-5xl font-bold mb-10">Memories</h1>
                    <div className="">
                        <ImageSlider />
                    </div>
                </>
            )}
        </div>
    );
};

export default Memories;