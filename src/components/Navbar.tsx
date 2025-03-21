"use client"

import { useState, useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavbarItems } from "@/app/system";
import { SiBuildkite } from "react-icons/si";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button";
import { HiMenuAlt3 } from "react-icons/hi";


export const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hovering, setHovering] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const pathname = usePathname();

    // Fungsi untuk mengecek apakah link aktif
    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <div className={`navbar fixed z-[999] px-5`}>
            <div className="navbar-start">
                <a href="/" className="py-2 px-4 dark:bg-darkColor/50 bg-lightColor/50 rounded-full backdrop-blur-2xl flex items-center gap-2">
                    <SiBuildkite />
                    Buildify
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center text-sm py-3 px-2 dark:bg-darkColor/50 bg-lightColor/50 rounded-full backdrop-blur-2xl">
                    {NavbarItems.map((el, idx) => (
                        <li key={idx}>
                            <Link href={el.path} className="px-4 py-2 dark:hover:bg-neutral-500/50 hover:bg-neutral-100/50 rounded-full">
                                {el.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                <ThemeSwitch />
                <div className="md:hidden my-auto flex items-center justify-center">
                    <Drawer>
                        <DrawerTrigger>
                            <div className='p-[7px] rounded-full bg-lightColor dark:bg-darkColor dark:bg-opacity-50 bg-opacity-50 backdrop-blur-md hover:bg-mainColor dark:hover:bg-mainColorD'>
                                <HiMenuAlt3 className="text-lg" />
                            </div>
                        </DrawerTrigger>
                        <DrawerContent position="top">
                            <DrawerHeader>
                                <DrawerTitle>
                                    <a className="w-fit py-2 px-4 dark:bg-darkColor/50 bg-lightColor/50 rounded-full backdrop-blur-2xl flex items-center gap-2">
                                        <SiBuildkite />
                                        Buildify
                                    </a>
                                </DrawerTitle>
                            </DrawerHeader>
                            <div className="pb-5 space-y-3">
                                {NavbarItems.map((el, idx) => (
                                    <div key={idx}>
                                        <Link href={el.path} className="px-4 py-2 dark:hover:bg-neutral-500/50 hover:bg-neutral-100/50 rounded-full">
                                            {el.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>

                        </DrawerContent>
                    </Drawer>

                </div>
            </div>
        </div>
    )
}