"use client"

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { GoArrowDown, GoArrowDownRight } from "react-icons/go";

const images = [
    "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-[90lvh] md:min-h-screen max-h-screen md:h-screen">
            <div className="flex flex-col justify-between w-full h-full px-5 pb-5">
                <div className="md:h-[35%] h-[50%] pt-16 md:pt-24 space-y-1">
                    <div className="flex md:flex-row flex-col justify-between">
                        <div className="space-y-2">
                            <h1 className="col-span-2 text-3xl md:text-5xl tracking-tighter text-balance">
                                Find the Best Contractors & Interior Designers for Your Project!
                            </h1>
                            <div className="space-x-2">
                                <a
                                    href="/post-job"
                                >
                                    <Button className="mt-1 rounded-full">
                                        Post a Job Now
                                        <GoArrowDownRight />
                                    </Button>
                                </a>
                                <Button
                                    variant={"secondary"}
                                    className="mt-1 rounded-full">
                                    Ask an Expert
                                </Button>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 space-y-2 my-auto flex items-center h-full gap-2">
                            <p className="md:text-right md:text-xl font-light my-auto">
                                Post your job, receive offers, and choose the best professional easily
                            </p>
                            <div className="order-first md:order-none px-2 py-1 h-[50px] grow bg-lightColor dark:bg-darkColor rounded-md flex items-center justify-center">
                                <GoArrowDown className="text-xl md:text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[50%] md:h-[70%] w-full relative overflow-hidden rounded-xl">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt="Banner"
                            className="bg-lightColor/50 w-full h-full object-cover rounded-xl absolute top-0 left-0"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.80, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                    <div className="absolute bottom-5 left-5">

                    </div>
                </div>
            </div>
        </section>
    );
};