"use client"
import { useRef, useState, useEffect } from "react";
import { contractorServices } from "@/app/system";
import { Title } from "./Title";

export const ServicesMobile = () => {
    const serviceRefs = contractorServices.map(() => useRef<HTMLDivElement | null>(null));
    const [activeCategory, setActiveCategory] = useState(contractorServices[0].category);
    const [activeBgImg, setActiveBgImg] = useState(contractorServices[0].bgImg);

    const handleScrollToService = (index: number) => {
        serviceRefs[index]?.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        setActiveCategory(contractorServices[index].category);
        setActiveBgImg(contractorServices[index].bgImg);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = serviceRefs.findIndex((ref) => ref.current === entry.target);
                        if (index !== -1) {
                            setActiveCategory(contractorServices[index].category);
                            setActiveBgImg(contractorServices[index].bgImg);
                        }
                    }
                });
            },
            { threshold: 0.6 }
        );

        serviceRefs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className="px-0 py-24 md:hidden block">
                <div className="relative rounded-xl">
                    <img
                        className="h-[150lvh] w-full rounded-xl object-cover transition-all duration-500"
                        src={activeBgImg}
                        alt={activeCategory}
                    />
                    <div className="absolute inset-0 backdrop-blur-lg bg-black/50"></div>
                    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-darkColor/80 via-darkColor/50 to-transparent" />

                    <div className="absolute inset-0 w-full h-full">
                        <div className="flex flex-col w-full h-full gap-10">
                            <div className="flex flex-col gap-5 col-span-1 justify-center mx-5 mt-10">
                                <Title className="text-white" >
                                    Find the Right Contractor for Your Project
                                </Title>
                                <p className="text-white/80">
                                    We offer a wide range of contractor services to match your project needs. Whether you're renovating your home, upgrading your office space, or building from scratch, our verified professionals are here to help.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {contractorServices.map((service, index) => (
                                        <button
                                            key={index}
                                            className={`text-xs px-3 py-1 rounded-full backdrop-blur-md grow transition-all ${activeCategory === service.category
                                                ? "bg-mainColor text-white shadow-lg font-medium"
                                                : "bg-darkColor/30 text-lightColor"
                                                }`}
                                            onClick={() => handleScrollToService(index)}
                                        >
                                            {service.category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="col-span-2 flex items-center justify-center">
                                <div className="carousel !snap-align-none h-fit w-full">
                                    {contractorServices.map((el, idx) => (
                                        <div
                                            key={idx}
                                            ref={serviceRefs[idx]}
                                            className={`${idx === 0 && "ml-5"}  ${idx === contractorServices.length - 1 && "mr-5"}  carousel-item flex-col pl-5 rounded-xl space-y-5 h-fit w-[90%] relative`}
                                        >
                                            <div className="relative">
                                                <img
                                                    className="h-[50lvh] w-full object-cover rounded-xl"
                                                    src={el.bgImg}
                                                    alt={el.category}
                                                />
                                                <div className="absolute h-fit bottom-1 left-1 text-xl font-medium px-4 py-2 bg-darkColor/10 backdrop-blur-sm rounded-xl w-fit text-center text-white">
                                                    {el.category}
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {el.services.map((se, id) => (
                                                    <div key={id} className="grow text-center text-lightColor px-2 py-1 bg-darkColor/10 rounded-full backdrop-blur-2xl w-fit">
                                                        {se}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
