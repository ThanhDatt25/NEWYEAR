"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import PromptModal from '@/components/PromptModal';

const CountdownTimer: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [showFireworks, setShowFireworks] = useState(false);
    const [isLastMinute, setIsLastMinute] = useState(false);
    const [randomText, setRandomText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const correctAnswer = "2";

    const textOptions = [
        "Đã trải qua 2 năm từ khi tốt nghiệp cấp 3 :3",
        "Thời gian tất cả mọi người ngồi lại với nhau trong discord nhiều nhất là năm 2019 :0",
        "Discord lúc đầu mở ra để nghe nhạc, nhưng lại trở thành nơi anh em gặp nhau >:3",
        "Server discord đầu tiên là vào năm 13/5/2021 và đón các thành viên mới : Duc Anh, Anh Hưng, ....",
        "2025 chỉ biết chúc anh em mạnh khỏe, hạnh phúc, và thành công trong cuộc sống thôi :3",
        "Server đầu tiên đáng lẽ ra vẫn sử dụng ! nhưng do ai đó phản động ???",
        "Việt đã nhắn được 2000 tin nhắn trong sv mới >:3",
        "Lâm đã nhắn được 3000+ tin nhắn trong sv mới, nói lắm vê lờ :3",
        "Khánh (Chut) đã nhắn 1,600+ tin nhắn trong sv mới, giờ Khánh đang nơi đâu ???",
        "DucAnh đã nhắn được 60+ tịn nhắn trong sv mới, vote kick !!",
        "Anh Hưng đã nhắn được 2,300+ tin nhắn trong sv mới, anh Hưng nên rủ DucAnh nhắn cùng đi !!",
    ];

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const vietnamTime = new Date(now.getTime() + (now.getTimezoneOffset() + 420) * 60000);

            const newYear2025 = new Date(Date.UTC(2024, 11, 31, 17, 0, 0));
            const difference = newYear2025.getTime() - vietnamTime.getTime();

            if (difference <= 0) {
                setShowFireworks(true);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            // Calculate the remaining time
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        };

        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0) {
                setIsLastMinute(true);
            } else {
                setIsLastMinute(false);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000); // 5 seconds loading
        return () => clearTimeout(timer);
    }, []);

    // Set random text on component mount
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * textOptions.length);
        setRandomText(textOptions[randomIndex]);
    }, []);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleModalSubmit = (answer: string) => {
        if (answer === correctAnswer) {
            router.push('/memories');
        } else {
            alert('Incorrect answer. Please try again.');
        }
        setIsModalOpen(false);
    };

    const vanishEffect = {
        initial: { opacity: 1, scale: 1 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0, rotate: 180, y: -50 },
        transition: { duration: 0.5, ease: "easeInOut" },
    };

    const loadingVariants = {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
        transition: { duration: 2.5, ease: "easeOut" },
    };

    const numberVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        transition: { duration: 0.5, ease: "easeInOut" },
    };

    return (
        <div className="w-full h-screen bg-gradient-to-tl from-yellow-400 via-red-500 to-pink-500 text-white flex flex-col items-center justify-center font-sans relative">
            {showFireworks && (
                <div className="fireworks">
                    <svg width="100%" height="100%">
                        <circle className="firework" cx="50%" cy="50%" r="5" fill="red" />
                        <circle className="firework" cx="60%" cy="60%" r="5" fill="blue" />
                        <circle className="firework" cx="40%" cy="40%" r="5" fill="green" />
                    </svg>
                </div>
            )}
            <AnimatePresence>
                {loading ? (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={loadingVariants}
                        className="text-center"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-flicker">Reload Trang web để xem lời chúc !!</h1>
                        <p className="text-xl sm:text-2xl md:text-3xl tracking-widest">{randomText}</p>
                    </motion.div>
                ) : showFireworks ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-pulse text-primary">
                            🎆 Happy New Year, Vietnam! 🎉
                        </h1>
                        <div className="fireworks">
                            <svg width="100%" height="100%">
                                <circle className="firework" cx="50%" cy="50%" r="5" fill="red" />
                                <circle className="firework" cx="60%" cy="60%" r="5" fill="blue" />
                                <circle className="firework" cx="40%" cy="40%" r="5" fill="green" />
                            </svg>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center items-center justify-center"
                    >
                        {!isLastMinute && (
                            <h1 className="pt-10 sm:pt-20 text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-primary drop-shadow-md">
                                Countdown to 2025
                            </h1>
                        )}
                        <div className={`flex ${isLastMinute ? 'flex-col items-center justify-center w-full h-full' : 'justify-center space-x-4 sm:space-x-10'}`}>
                            {Object.entries(timeLeft).map(([unit, value]) => (
                                !isLastMinute || unit === 'seconds' ? (
                                    <motion.div
                                        key={unit}
                                        className={`flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-2xl transform transition ${isLastMinute && unit === 'seconds' ? 'w-full h-full' : 'hover:scale-110'}`}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 1 }}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.p
                                                key={value}
                                                className={`text-5xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg ${isLastMinute && unit === 'seconds' ? 'text-7xl sm:text-8xl md:text-9xl' : ''}`}
                                                variants={numberVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                            >
                                                {value.toString().padStart(2, "0")}
                                            </motion.p>
                                        </AnimatePresence>
                                        {!isLastMinute && (
                                            <p className="text-sm sm:text-lg mt-1 sm:mt-3 uppercase tracking-widest text-white/80">
                                                {unit}
                                            </p>
                                        )}
                                    </motion.div>
                                ) : null
                            ))}
                        </div>
                    </motion.div>
                )}
                {!loading && (
                    <button
                        className="mt-10 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white rounded-lg hover:from-yellow-500 hover:via-red-600 hover:to-pink-600 transition transform hover:scale-105 shadow-lg"
                        onClick={handleButtonClick}
                    >
                        ????
                    </button>
                )}
            </AnimatePresence>
            <PromptModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
            />
        </div>
    );
};

export default CountdownTimer;