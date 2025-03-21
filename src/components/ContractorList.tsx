import { contractorRatings } from "@/app/system"
import { FaQuoteRight } from "react-icons/fa6"
import { IoIosStar, IoMdConstruct } from "react-icons/io"
import { Title } from "./Title"

export const ContractorList = () => {
    return (
        <section className="my-24 relative">
            <div className="md:absolute md:top-1/2 transform md:-translate-y-1/2">
                <div className="md:max-w-[28lvw] md:h-[28lvw] bg-lightColor p-0 mr-5 md:mr-0 ml-5 rounded-xl relative shadw-custom">
                    <img
                        className="rounded-xl w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                    <div className="absolute bottom-1 left-1 right-1 rounded-xl backdrop-blur-lg text-white bg-darkColor/50 rounded-b-xl grow">
                        <Title className="text-xl font-medium p-5">
                            Our Top Rated Constuctor
                        </Title>
                    </div>
                    <div className="absolute right-5 bottom-5 text-3xl md:text-5xl">
                        <IoIosStar className="text-yellow-500" />
                    </div>
                </div>
            </div>
            <div className="carousel !snap-align-none w-full gap-0 py-10">
                {contractorRatings.map((el, idx) => (
                    <div
                        key={idx}
                        className={`${idx === 0 && "ml-5 md:ml-[31lvw]"} ${contractorRatings.length - 1 && "mr-5"} flex md:flex-row flex-col md:items-center gap-4 min-w-[80lvw] md:min-w-[40lvw] p-3 shadow-main rounded-xl bg-darkColor dark:bg-lightColor`}
                    >
                        <img
                            className="rounded-lg h-full md:w-1/2 w-full object-cover"
                            src={el.profileImg}
                            alt=""
                        />
                        <div className="text-lightColor dark:text-darkColor flex flex-col justify-between md:w-1/2 h-full">
                            <div className="space-y-2">
                                <p className="flex items-center gap-2 font-medium  px-2 py-[2px] bg-lightColor dark:bg-darkColor rounded-full text-sm dark:text-lightColor text-darkColor w-fit">
                                    <IoIosStar className="text-yellow-500" />
                                    {el.rating}
                                </p>
                                <h1 className="font-medium text-2xl">
                                    {el.contractor}
                                </h1>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-1 border border-neutral-200 dark:border-neutral-500 rounded-full w-fit pl-1 pr-3 py-1 uppercase text-xs tracking-tighter font-semibold">
                                    <p className="text-sm md:text-base p-1 bg-lightColor text-darkColor dark:bg-darkColor rounded-full dark:text-lightColor">
                                        <IoMdConstruct />
                                    </p>
                                    Services
                                </div>
                                <div>
                                    <div className="flex gap-2 flex-wrap">
                                        {el.services.map((ser, id) => (
                                            <div key={id} className="px-3 py-1 bg-mainColor/50 rounded-full font-medium text-xs md:text-sm">
                                                {ser}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}