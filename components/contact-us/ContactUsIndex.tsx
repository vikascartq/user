"use client"
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import GoldenSection from "../golden-section/GoldenSection";
import "./contact-us.css";
import ContactDetails from "./ContactDetails";
import HeroSection from "./HeroSection";
import { useRouter } from "next/navigation";
export default function ContactUsIndex() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const queryType = searchParams?.get("type");
    const initialType = queryType === "business" || queryType === "job" ? queryType : "general";
    const [contactFormType, setContactFormType] = useState<"general" | "business" | "job">(initialType as "general" | "business" | "job");
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
                        onButtonClick={() =>  router.push('contact-us?type=general#contact-form-section-base')}
                    />
                    :
                    contactFormType === "business" ?
                        <GoldenSection
                            title="Need Support for Your Business?"
                            para="If you are hiring, scaling, refining team structure, or looking for practical people support, ReqKing is ready to understand your business context and help you identify the right next step."
                            buttonText="Submit your business enquiry"
                            onButtonClick={() =>  router.push('contact-us?type=business#contact-form-section-base')}
                        />
                        :
                        <GoldenSection
                            title="Ready to Share Your Profile?"
                            para="If you are exploring your next role, looking to strengthen your position in the market, or want guidance on your career direction, send across your CV with a short introduction and ReqKing will review how best to support you."
                            buttonText="Submit your Resume"
                            onButtonClick={() =>  router.push('contact-us?type=job#contact-form-section-base')}
                        />

            }
        </>
    )
}
