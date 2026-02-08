"use client"

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const t = gsap.timeline();
    useGSAP(() => {
        t.to(".hero-text", {
            opacity: 1,
            scale: 1,
            duration: 0.35,
        })
        t.to(".hero-image", {
            opacity: 1,
            duration: 0.3,
        }, "<0.3")
    })

    return (
        <section className="w-full min-h-screen pt-24 relative overflow-hidden flex flex-col">
            {/* Left: Text Content */}
            <div className="lg:max-w-2xl flex-1 lg:h-full flex flex-col justify-center relative z-10 pointer-events-none pb-12 lg:pb-0 hero-text opacity-0 scale-95">
                <h2 className="text-sm md:text-base tracking-[0.2em] font-semibold uppercase opacity-70 mb-6">
                    Németh Marcell
                </h2>
                <h1 className="text-3xl md:text-7xl lg:text-7xl xl:text-7xl font-semibold uppercase mb-12 leading-[0.9]">
                    Full Stack Developer From Hungary
                </h1>
                <p className="text-md md:text-xl text-black/60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus arcu nulla viverra arcu.
                </p>
                <button className="w-fit mt-8 px-6 py-3 bg-black uppercase font-semibold text-white rounded-full hover:bg-gray-800 transition-colors">
                    Contact Me
                </button>
            </div>
            {/* image section */}
            <div className="relative w-full h-[100vh] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-[45vw] xl:h-[80vh]">
                <Image
                    src="/images/hero-portrait.png"
                    alt="Németh Marcell"
                    fill
                    className="object-cover object-center hero-image opacity-0"
                    preload
                />
            </div>
        </section>
    );
}
