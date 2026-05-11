"use client"
import { useState } from "react";
import GoldenSection from "../golden-section/GoldenSection";
import "./contact-us.css";
import ContactDetails from "./ContactDetails";
import HeroSection from "./HeroSection";
export default function ContactUsIndex() {
    const [contactFormType, setContactFormType] = useState<"general" | "business" | "job">("general");
    return (
        <>
            <HeroSection />
            <ContactDetails
                setContactFormType={setContactFormType}
                contactFormType={contactFormType}
            />
            {
                contactFormType === "general" ?
                    <GoldenSection
                        title="Have a General Query?"
                        para="If you would like to know more about ReqKing, our approach, or how we work, feel free to get in touch. We will respond with the right guidance and direct you to the most relevant next step."
                        buttonText="Send your enquiry"
                        onButtonClick={() => ""}
                    />
                    :
                    contactFormType === "business" ?
                        <GoldenSection
                            title="Need Support for Your Business?"
                            para="If you are hiring, scaling, refining team structure, or looking for practical people support, ReqKing is ready to understand your business context and help you identify the right next step."
                            buttonText="Submit your business enquiry"
                            onButtonClick={() => ""}
                        />
                        :
                        <GoldenSection
                            title="Ready to Share Your Profile?"
                            para="If you are exploring your next role, looking to strengthen your position in the market, or want guidance on your career direction, send across your CV with a short introduction and ReqKing will review how best to support you."
                            buttonText="Submit your Resume"
                            onButtonClick={() => ""}
                        />

            }
        </>
    )
}
