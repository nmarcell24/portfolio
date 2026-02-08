"use client"

import { submitContactForm } from "@/app/actions/contact";
import { displayText } from "@/app/utils/styles";
import { useActionState } from "react";

const initialState = {
    success: false,
    message: "",
    inputs: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    }
};

export default function ContactPage() {
    const [state, action, isPending] = useActionState(submitContactForm, initialState);

    return (
        <div className="w-full min-h-screen pt-24 pb-12 px-4 md:px-8 lg:px-12 flex flex-col items-center">
            {/* Header Section */}
            <div className="w-full max-w-7xl pt-12 pb-16 md:pb-24">
                <h1 className={`${displayText} mb-2`}>CONTACT</h1>
                <h1 className={`${displayText}`}>MARCELL NÉMETH</h1>
            </div>

            {/* Form Section */}
            <div className="w-full max-w-7xl">
                {state.success ? (
                    <div className="w-full py-20 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6">Message Sent!</h2>
                        <p className="text-lg md:text-xl text-gray-600">{state.message}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-10 bg-black text-white text-sm font-bold uppercase py-4 px-12 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Send Another
                        </button>
                    </div>
                ) : (
                    <form action={action} className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Name Field */}
                            <div className="p-6 md:p-10 border-b border-black md:border-r">
                                <label htmlFor="name" className="block text-sm font-bold uppercase mb-4">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    defaultValue={state.inputs?.name}
                                    placeholder="Full Name"
                                    className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0"
                                />
                                {state.errors?.name && <p className="text-red-500 text-sm mt-2">{state.errors.name[0]}</p>}
                            </div>

                            {/* Email Field */}
                            <div className="p-6 md:p-10 border-b border-black">
                                <label htmlFor="email" className="block text-sm font-bold uppercase mb-4">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    defaultValue={state.inputs?.email}
                                    placeholder="example@youremail.com"
                                    className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0"
                                />
                                {state.errors?.email && <p className="text-red-500 text-sm mt-2">{state.errors.email[0]}</p>}
                            </div>

                            {/* Phone Field */}
                            <div className="p-6 md:p-10 border-b border-black md:border-r">
                                <label htmlFor="phone" className="block text-sm font-bold uppercase mb-4">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    defaultValue={state.inputs?.phone}
                                    placeholder="(123) 456 - 7890"
                                    className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0"
                                />
                                {state.errors?.phone && <p className="text-red-500 text-sm mt-2">{state.errors.phone[0]}</p>}
                            </div>

                            {/* Subject Field */}
                            <div className="p-6 md:p-10 border-b border-black">
                                <label htmlFor="subject" className="block text-sm font-bold uppercase mb-4">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    defaultValue={state.inputs?.subject}
                                    placeholder="Ex. Projects"
                                    className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0"
                                />
                                {state.errors?.subject && <p className="text-red-500 text-sm mt-2">{state.errors.subject[0]}</p>}
                            </div>
                        </div>

                        {/* Message Field - Full Width */}
                        <div className="w-full p-6 md:p-10">
                            <label htmlFor="message" className="block text-sm font-bold uppercase mb-4">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                defaultValue={state.inputs?.message}
                                rows={6}
                                placeholder="Please write your message..."
                                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl placeholder:text-gray-400 p-0 resize-none"
                            ></textarea>
                            {state.errors?.message && <p className="text-red-500 text-sm mt-2">{state.errors.message[0]}</p>}
                        </div>

                        {/* Submit Button Section */}
                        <div className="w-full border-t border-black py-6 md:py-10 flex">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="bg-black text-white text-sm font-semibold uppercase py-4 px-12 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isPending ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                        {state.message && !state.success && (
                            <div className="w-full px-10 pb-10 text-red-500">
                                {state.message}
                            </div>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}