"use client"
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Links } from "@/components/Links";

export default function Home() {
  gsap.registerPlugin(useGSAP);
  return (
    <div className="w-full">
      <Hero />
      <Links />
      <Portfolio />
    </div>

  );
}
