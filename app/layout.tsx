import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Contact } from "@/components/Contact";

const panchang = localFont({
  src: [
    {
      path: "../public/fonts/Panchang-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Panchang-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Panchang-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Panchang-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Panchang-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Panchang-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-panchang",
});

export const metadata: Metadata = {
  title: "Marcell Németh - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${panchang.variable} antialiased px-5 xl:px-24 2xl:px-40`}>
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}

