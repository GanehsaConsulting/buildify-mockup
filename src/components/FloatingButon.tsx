"use client"

import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { IoArrowUp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

export const FloatingButton = () => {
    const WaLink = "https://api.whatsapp.com/send?phone=081908614323";
    const [isVisible, setIsVisible] = useState(false);
    const [showBadge, setShowBadge] = useState(true);

    useEffect(() => {
        // Fungsi untuk menangani scroll
        const handleScroll = () => {
            const scrollThreshold = 200;
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-5 right-5 z-[100]">
            <section className="flex gap-3 duration-300">
                {/* Badge */}
                <div className={`${isVisible ? "" : "translate-x-[52px]"} ${showBadge === true ? "block" : "hidden"} group relative duration-300 bg-mainColor/50 backdrop-blur-lg drop-shadow-md text-right text-white text-xs pl-2 pr-5 py-1 rounded-l-full shadow-md animate-fade-in-out w-24 my-auto -mr-6`}>
                    <span className="animate-pulse">
                        Ask on live chat here!
                    </span>
                    <button onClick={() => setShowBadge(false)} className="opacity-0 group-hover:opacity-100 text-xs absolute left-0 -top-1 p-[1px] bg-mainColor/80 dark:bg-mainColor/50 rounded-full backdrop-blur-md">
                        <IoIosClose />
                    </button>
                </div>

                {/* Tombol Customer Service */}
                <a href={WaLink} target="_blank" rel="noopener noreferrer">
                    <button
                        className={`${isVisible ? "" : "translate-x-[52px]"} bg-gradient-to-br from-mainColor/70 to-darkColor text-lightColor backdrop-blur-lg dark:text-white duration-300 rounded-full p-4 shadow-custom hover:bg-mainColor hover:text-baseColor`}
                    >
                        <RiCustomerService2Fill className="drop-shadow-md" />
                    </button>
                </a>

                {/* Tombol Scroll ke Atas */}
                <button
                    onClick={scrollToTop}
                    className={`${isVisible ? "scale-100" : "scale-0 translate-x-full"} bg-mainColor/30 text-darkColor duration-300 backdrop-blur-md hover:bg-mainColor hover:text-baseColor dark:text-white rounded-full p-4 shadow-custom`}
                >
                    <IoArrowUp className="drop-shadow-md" />
                </button>
            </section>
        </div>
    );
};
