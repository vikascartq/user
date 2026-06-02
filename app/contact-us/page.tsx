import { Suspense } from "react";
import ContactUsIndex from "@/components/contact-us/ContactUsIndex";

export default function ContactUsPage() {
    return (
        <Suspense fallback={<div className="text-center text-muted">Loading...</div>}>
            <ContactUsIndex />
        </Suspense>
    )
}
