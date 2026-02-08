"use server"

export type FormState = {
    success: boolean;
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        subject?: string[];
        message?: string[];
    };
    inputs?: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
    };
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const errors: FormState["errors"] = {};

    // Validate Name
    if (!name || name.trim() === "") {
        errors.name = ["Name is required"];
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.email = ["Please enter a valid email address"];
    }

    // Validate Phone (Optional, but if provided, could need basic format check - keeping it simple strictly optional)
    // No regex check strictly requested other than "optional", so we allow empty or any string if user inputs something. 

    // Validate Subject
    if (!subject || subject.trim() === "") {
        errors.subject = ["Subject is required"];
    }

    // Validate Message
    if (!message || message.trim() === "") {
        errors.message = ["Message is required"];
    }

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors,
            inputs: { name, email, phone, subject, message }
        };
    }

    return {
        success: true,
        message: "Thank you! Your message has been sent.",
        inputs: { // Clear inputs on success
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        }
    };
}
