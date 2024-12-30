import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-tl from-yellow-400 via-red-500 to-pink-500 text-white">
            <h1 className="text-5xl font-bold animate-pulse">Loading...</h1>
        </div>
    );
};

export default Loading;