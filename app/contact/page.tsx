"use client"

import { displayText } from "@/app/utils/styles";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const initialState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
};

export default function ContactPage() {
    const [state, setState] = useState(initialState);
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState(null);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        if (showPopup) {
            setTimeout(() => setShowPopup(false), 5000);
        }
    }, [showPopup]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };


    const clearState = () => setState(initialState);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true)
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;

        // 1. Send notification to site owner
        emailjs
            .sendForm(
                serviceId,
                templateId,
                e.target as HTMLFormElement,
                publicKey
            )
            .then(
                (result) => {
                    setError(null);
                    setShowPopup(true)
                    console.log("Owner notification sent:", result.text);
                    clearState();
                    setIsSending(false);
                },
                (err) => {
                    console.log("Owner notification error:", err.text);
                    setError(err.message);
                    setShowPopup(true)
                    setIsSending(false);
                }
            );

        // 2. Send auto-reply to the person who submitted
        emailjs
            .sendForm(
                serviceId,
                process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID as string,
                e.target as HTMLFormElement,
                publicKey
            )
            .then(
                (result) => {
                    console.log("Auto-reply sent:", result.text);
                },
                (error) => {
                    console.log("Auto-reply error:", error.text);
                }
            );
    }

    return (
        <div className="w-full min-h-screen pt-24 pb-12 px-4 md:px-8 lg:px-12 flex flex-col items-center">
            {/* Header Section */}
            <div className="w-full max-w-7xl pt-12 pb-16 md:pb-24">
                <h1 className={`${displayText} mb-2`}>CONTACT</h1>
                <h1 className={`${displayText}`}>MARCELL NÉMETH</h1>
            </div>

            {/* Form Section */}
            <div className="w-full max-w-7xl">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Name Field */}
                        <div className="p-6 md:p-10 border-b border-black md:border-r">
                            <label htmlFor="name" className="block text-sm font-bold uppercase mb-4">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                value={state.name}
                                placeholder="Full Name"
                                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="p-6 md:p-10 border-b border-black">
                            <label htmlFor="email" className="block text-sm font-bold uppercase mb-4">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={state.email}
                                placeholder="example@youremail.com"
                                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="p-6 md:p-10 border-b border-black md:border-r">
                            <label htmlFor="phone" className="block text-sm font-bold uppercase mb-4">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                onChange={handleChange}
                                value={state.phone}
                                placeholder="(123) 456 - 7890"
                                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0"
                            />
                        </div>

                        {/* Subject Field */}
                        <div className="p-6 md:p-10 border-b border-black">
                            <label htmlFor="subject" className="block text-sm font-bold uppercase mb-4">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                onChange={handleChange}
                                value={state.subject}
                                placeholder="Ex. Projects"
                                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0"
                            />
                        </div>
                    </div>

                    {/* Message Field - Full Width */}
                    <div className="w-full p-6 md:p-10">
                        <label htmlFor="message" className="block text-sm font-bold uppercase mb-4">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleChange}
                            value={state.message}
                            rows={6}
                            placeholder="Please write your message..."
                            className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button Section */}
                    <div className="w-full border-t border-black py-6 md:py-10 flex">
                        <button
                            type="submit"
                            disabled={isSending}
                            className="bg-black text-white text-sm font-semibold uppercase py-4 px-12 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>

            { /* Popup */}
            {showPopup && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "32px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: error ? "#d32f2f" : "#2e7d32",
                        color: "#fff",
                        padding: "14px 24px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        zIndex: 9999,
                        fontSize: "15px",
                        minWidth: "280px",
                        animation: "slideUp 0.3s ease",
                    }}
                >
                    <span>{error || "Email sikeresen elküldve!"}</span>
                    <button
                        onClick={() => setShowPopup(false)}
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "#fff",
                            fontSize: "18px",
                            cursor: "pointer",
                            lineHeight: 1,
                            marginLeft: "auto",
                        }}
                    >
                        ×
                    </button>
                </div>
            )}
        </div>
    );
}