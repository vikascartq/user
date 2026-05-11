import AvailableIcon from "@/svg/contact-us/AvailableIcon";
import LocationIcon from "@/svg/contact-us/LocationIcon";
import MailIcon from "@/svg/contact-us/MailIcon";
import LinkedinIcon from "@/svg/LinkedinIcon";
import { Dispatch, SetStateAction } from "react";
import ForBusiness from "./ForBusiness";
import ForJob from "./ForJob";
import GeneralInquiry from "./GeneralInquiry";

export default function ContactDetails({
    setContactFormType,
    contactFormType
}: ContactDetailsProp) {
    return (
        <div className="section-base-bg contact-form-section">
            <div className="section-frame">
                <div className="contact-details-container">
                    <div className="contact-details-base">
                        <div className="contact-info-section">
                            <h4 className="contact-info-title">Send a Message</h4>
                            <div className="contact-info-container">
                                <div className="contact-info-card">
                                    <MailIcon />
                                    <div className="contact-info-card-content">
                                        <div className="contact-info-card-title">Email address</div>
                                        <div className="contact-info-card-value">info@reqking.com</div>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <AvailableIcon />
                                    <div className="contact-info-card-content">
                                        <div className="contact-info-card-title">Availability</div>
                                        <div className="contact-info-card-value">Global remote consulting engagements.</div>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <LocationIcon />
                                    <div className="contact-info-card-content">
                                        <div className="contact-info-card-title">Location</div>
                                        <div className="contact-info-card-value">London, United Kingdom</div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-connect-line-wrap">
                                <LinkedinIcon />
                                <div className="footer-connect-line-text">Connect with us on LinkedIn</div>
                            </div>
                        </div>
                        <div className="contact-form-section-base">
                            <div className="contact-form-tab-wrapper">
                                <div onClick={() => setContactFormType("general")} className={`contact-form-tab ${contactFormType === "general" ? "active" : ""}`}>General Inquiry</div>
                                <div onClick={() => setContactFormType("business")} className={`contact-form-tab ${contactFormType === "business" ? "active" : ""}`}>For Business</div>
                                <div onClick={() => setContactFormType("job")} className={`contact-form-tab ${contactFormType === "job" ? "active" : ""}`}>For Jobs</div>
                            </div>
                            {
                                contactFormType === "general" ?
                                    <GeneralInquiry />
                                    :
                                    contactFormType === "business" ?
                                        <ForBusiness />
                                        :
                                        <ForJob />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

interface ContactDetailsProp {
    setContactFormType: Dispatch<SetStateAction<"general" | "business" | "job">>;
    contactFormType: "general" | "business" | "job";
}