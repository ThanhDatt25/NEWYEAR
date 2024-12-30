"use client";

import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.error("Failed to play audio:", error);
            });
        }
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            <audio ref={audioRef} loop autoPlay>
                <source src="/Music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {!isPlaying && (
                <button
                    onClick={() => {
                        if (audioRef.current) {
                            audioRef.current.play().then(() => {
                                setIsPlaying(true);
                            }).catch(error => {
                                console.error("Failed to play audio:", error);
                            });
                        }
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white rounded-lg hover:from-yellow-500 hover:via-red-600 hover:to-pink-600 transition transform hover:scale-105 shadow-lg"
                >
                    Play Music
                </button>
            )}
        </div>
    );
};

export default AudioPlayer;