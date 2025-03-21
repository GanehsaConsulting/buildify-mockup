"use client";

import { clientReviews } from "@/app/system";
import { motion } from "framer-motion";
import { Title } from "./Title";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// Gandakan array agar animasi tidak terputus
const duplicatedReviews = [...clientReviews, ...clientReviews, ...clientReviews, ...clientReviews];

// Fungsi untuk menampilkan bintang sesuai rating
const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>
                    ★
                </span>
            ))}
        </div>
    );
};

export const ClientRating = () => {
    return (
        <section className="py-16 overflow-hidden">
            <div className="space-y-8 relative">
                <div className="md:hidden mx-5 backdrop-blur-xl dark:bg-darkColor bg-lightColor z-30 rounded-xl p-5 shadow-custom flex flex-col justify-between">
                    <Title className="text-2xl">
                        <span className="bg-gradient-to-br from-blue-500/50 to-darkColor dark:to-lightColor text-transparent bg-clip-text pr-1">
                            Trusted
                        </span>{" "}
                        by Thousands of {" "}
                        <span className="bg-gradient-to-tl from-green-500/70 to-darkColor dark:to-lightColor text-transparent bg-clip-text pr-1">
                            Satisfied Clients
                        </span>
                    </Title>
                    <div className="text-2xl absolute -right-3 -top-3 p-1 dark:bg-darkColor/60 bg-lightColor/30 rounded-full backdrop-blur-2xl">
                        <RiDoubleQuotesR className="drop-shadow-[0px_0px_15px_#ebe658]" />
                    </div>
                    <p className="mt-5 opacity-70 text-sm">
                        See what our clients say! Our verified contractors deliver top-rated services with real customer feedback—helping you choose the best for your project!
                    </p>
                </div>

                <div className="hidden absolute top-1/2 transform -translate-y-1/2 w-[30lvw] h-[120%] ml-5 backdrop-blur-xl dark:bg-darkColor/60 bg-lightColor/30 z-30 rounded-xl p-5 shadow-custom md:flex flex-col justify-between">
                    <Title>
                        <span className="bg-gradient-to-br from-blue-500/50 to-darkColor dark:to-lightColor text-transparent bg-clip-text pr-1">
                            Trusted
                        </span>{" "}
                        by Thousands of {" "}
                        <span className="bg-gradient-to-tl from-green-500/70 to-darkColor dark:to-lightColor text-transparent bg-clip-text pr-1">
                            Satisfied Clients
                        </span>
                    </Title>
                    <div className="text-5xl absolute right-5 top-5">
                        <RiDoubleQuotesR className=" drop-shadow-[0px_0px_15px_#ebe658]" />
                    </div>
                    <p className="opacity-70 text-sm">
                        See what our clients say! Our verified contractors deliver top-rated services with real customer feedback—helping you choose the best for your project!
                    </p>
                </div>


                {/* Baris 1 - Bergerak dari kiri ke kanan */}
                <motion.div
                    className="flex space-x-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                >
                    {duplicatedReviews.slice(0, 10).map((el, idx) => (
                        <div key={idx} className="p-4 bg-gradient-to-bl from-mainColor/50 to-lightColor dark:to-darkColor rounded-xl max-w-[250px]">
                            <p className="font-medium">{el.client}</p>
                            <StarRating rating={Math.round(el.rating)} />
                            <p className="mt-3 text-sm">"{el.review}"</p>
                        </div>
                    ))}
                </motion.div>

                {/* Baris 2 - Bergerak dari kanan ke kiri */}
                <motion.div
                    className="flex space-x-8 w-max"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                >
                    {duplicatedReviews.slice(10, 20).map((el, idx) => (
                        <div key={idx} className="p-4 bg-gradient-to-bl from-mainColor/50 to-lightColor dark:to-darkColor rounded-xl max-w-[250px]">
                            <p className="font-medium">{el.client}</p>
                            <StarRating rating={Math.round(el.rating)} />
                            <p className="mt-3 text-sm">"{el.review}"</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
