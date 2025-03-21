import { footerData } from "@/app/system"
import { Title } from "./Title"
import { SiBuildkite } from "react-icons/si"
import { FaMapPin } from "react-icons/fa6"
import { IoIosMail, IoIosPhonePortrait } from "react-icons/io"

export const Footer = () => {
    return (
        <footer className="h-fit w-full p-5">
            <div className="w-full h-full dark:bg-darkColor bg-lightColor rounded-xl">
                <div className="pt-5 px-5">
                    <a className="py-1 px-3 text-sm dark:bg-lightColor bg-darkColor dark:text-darkColor text-lightColor w-fit rounded-full backdrop-blur-2xl flex items-center gap-2">
                        <SiBuildkite />
                        Buildify
                    </a>
                </div>
                <div className="md:grid md:grid-cols-4 p-5 gap-10">
                    <div className="col-span-2 w1/2 space-y-2">
                        <Title>
                            Connecting You with <br />
                            <span className="bg-gradient-to-tl from-green-500/70 to-darkColor dark:to-lightColor text-transparent bg-clip-text pr-1">
                                Trusted Contractors
                            </span>
                        </Title>
                        <p className="opacity-70 mt-5 md:mt-10">
                            {footerData.about}
                        </p>
                    </div>
                    <div className="mt-5 md:text-right">
                        <p className="footer-title text-sm">
                            Navigations
                        </p>
                        {footerData.links.map((el, idx) => (
                            <div key={idx}>
                                <a>
                                    {el.name}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 md:text-right">
                        <p className="footer-title text-sm">
                            Social
                        </p>
                        {footerData.socialMedia.map((el, idx) => (
                            <div key={idx}>
                                <a>
                                    {el.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-5 flex gap-2 md:flex-row flex-col md:items-center md:justify-between">
                    <p className="flex bg-darkColor dark:bg-lightColor rounded-full px-3 py-1 w-full md:w-fit items-center gap-2 text-baseLight dark:text-baseDark text-sm">
                        <FaMapPin />
                        {footerData.contact.address}
                    </p>
                    <div className="flex md:flex-row flex-col md:items-center gap-2">
                        <a
                            className="flex bg-darkColor dark:bg-lightColor rounded-full px-3 py-1 w-full md:w-fit items-center gap-2 text-baseLight dark:text-baseDark text-sm"
                        >
                            <IoIosMail />
                            {footerData.contact.email}
                        </a>
                        <a
                            className="flex bg-darkColor dark:bg-lightColor rounded-full px-3 py-1 w-full md:w-fit items-center gap-2 text-baseLight dark:text-baseDark text-sm"
                        >
                            <IoIosPhonePortrait />
                            {footerData.contact.phone}
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full h-full dark:bg-darkColor bg-lightColor rounded-xl p-3 mt-2 text-center">
                <h1 className="text-center opacity-70">
                    {footerData.copyright}
                </h1>
            </div>
        </footer>
    )
}