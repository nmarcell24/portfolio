"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export const Contact = () => {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        gsap.fromTo(".bigTextTop",
            {
                x: "-60%",
            },
            {
                x: "30%",
                scrollTrigger: {
                    trigger: ".bigTextTop",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            }
        )
        gsap.fromTo(".bigTextBottom",
            {
                x: "30%",
            },
            {
                x: "-60%",
                scrollTrigger: {
                    trigger: ".bigTextBottom",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        )
    })
    return (
        <section className="w-full border-t-2 border-black overflow-hidden py-10 mt-32 flex flex-col gap-10 contact-section">
            <h1 className="w-full text-6xl md:text-[11rem] lg:text-10xl whitespace-nowrap uppercase font-semibold text-[var(--background)] pointer-events-none select-none bigTextTop" style={{ textShadow: "0 1px 0 #babbbd, -1px 0 0 #babbbd, 1px 0 0 #babbbd, 0 -1px 0 #babbbd" }}>Contact me</h1>
            <div className="w-full flex flex-col items-center gap-10 text-center">
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold uppercase  leading-[0.9] max-w-2xl">
                    Get in touch to work together
                </h1>
                <p className="text-lg md:text-2xl max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus arcu nulla viverra arcu.</p>
                <Link href={"/contact"} className="w-fit px-12 py-4 md:py-6 md:text-lg bg-black uppercase font-semibold text-white rounded-full hover:bg-gray-800 transition-colors">
                    Send me a message
                </Link>
            </div>
            <h1 className="w-full text-6xl md:text-[11rem] lg:text-10xl whitespace-nowrap uppercase font-semibold text-[var(--background)] pointer-events-none select-none bigTextBottom" style={{ textShadow: "0 1px 0 #babbbd, -1px 0 0 #babbbd, 1px 0 0 #babbbd, 0 -1px 0 #babbbd" }}>Contact me</h1>
        </section>
    );
}