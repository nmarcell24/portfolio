"use client"

import { caption } from "@/app/utils/styles";
import { CustomLink } from "./CustomLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Links = () => {
    const services = [
        "Web Design",
        "Web Development",
        "App Development",
        "UI/UX Design",
    ]

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(".links", {
            scrollTrigger: {
                trigger: ".links",
                start: "top 70%",
                end: "bottom top",
            },
            opacity: 1,
            y: 0,
            duration: 1,
        })
    })


    return (
        <footer className="links opacity-0 y-10 w-full flex flex-col lg:flex-row lg:items-center gap-10 border-t-2 py-10 lg:py-0 border-y-2 my-10">
            <div className="lg:border-r-2 lg:pr-10 lg:py-10">
                <h1 className={`${caption} mb-6`}>Services</h1>
                <div className="w-full flex flex-wrap md:text-lg justify-between gap-2 border-b-2 lg:border-none pb-10">
                    {services.map((service) => (
                        <span key={service} className="text-lg md:text-2xl xl:text-4xl py-1 rounded-md font-semibold">
                            {service}
                        </span>
                    ))}
                </div>
            </div>
            <div className="h-full">
                <h1 className={`${caption} mb-6`}>
                    Socials
                </h1>
                <div className="flex flex-col gap-5">
                    <CustomLink url="https://www.linkedin.com/in/marcell-németh-7369a034b" text="LinkedIn" />
                    <CustomLink url="https://www.facebook.com/marcell.nemeth.543" text="Facebook" />
                </div>

            </div>
        </footer>
    );
}