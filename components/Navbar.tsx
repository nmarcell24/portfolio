"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
    useGSAP(() => {
        gsap.to(".nav", {
            opacity: 1,
            duration: 0.6,
        })
    })
    return (
        <nav className="w-full flex flex-col bg-light-gray font-semibold border-b-2 border-black opacity-0 nav">
            <div className="flex items-center justify-between py-6 w-full text-black">
                {/* Left: Logo */}
                <Link href="/" className="text-xl tracking-wide uppercase">
                    Deutsch Designz
                </Link>

                {/* Right: Navigation Links */}
                <div className="hidden md:flex items-center gap-8 md:gap-12 uppercase text-sm tracking-wider">
                    <Link href="/" className="hover:opacity-60 transition-opacity">
                        Home
                    </Link>
                    <Link href="#projects" className="hover:opacity-60 transition-opacity">
                        Projects
                    </Link>
                    <Link href="#contact" className="hover:opacity-60 transition-opacity">
                        Contact
                    </Link>
                </div>
                <button className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
