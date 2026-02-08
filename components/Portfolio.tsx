"use client"

import { caption, displayText } from "@/app/utils/styles";
import projects from "@/data/projects.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(".title", {
            scrollTrigger: {
                trigger: ".title",
                start: "top 70%",
                end: "bottom top",
            },
            opacity: 1,
            y: 0,
            duration: 1,
        })
    })

    return (
        <section className="w-full min-h-screen relative overflow-hidden flex flex-col title opacity-0 y-10">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold uppercase py-16 md:py-20 leading-[0.9]">
                Portfolio
            </h1>
            <div className="flex flex-col justify-between items-center">
                {projects.map((project, index) => (
                    <Link href={`/projects/${project.id}`} key={project.title} className={`flex flex-col lg:flex-row lg:gap-12 justify-between pb-16 ${index < projects.length - 1 ? "border-b-2 border-black mb-12" : "mb-0"}`}>
                        <div className="w-full h-full flex justify-center lg:w-1/2">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1000}
                                height={1000}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="w-full max-w-lg h-full flex flex-col justify-center lg:w-1/2">
                            <h1 className={`${displayText} my-12 max-w-[90vw]`}>
                                {project.title}
                            </h1>
                            <h3 className={caption}>
                                Read case study <ChevronRight className="inline-block" />
                            </h3>
                        </div>
                    </Link>
                ))}

                <div className="w-full h-full flex justify-center">
                    <button className="w-fit px-12 py-4 md:py-6 md:text-lg bg-black uppercase font-semibold text-white rounded-full hover:bg-gray-800 transition-colors">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}