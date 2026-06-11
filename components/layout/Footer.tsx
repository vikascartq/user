"use client"
import LinkedinIcon from "@/svg/LinkedinIcon";
import LocationWhiteIcon from "@/svg/LocationWhiteIcon";
import WhiteMailIcon from "@/svg/WhiteMailIcon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./footer.css";

export default function Footer() {
    const pathname = usePathname();


    return (
        <>
            <div className="footer-base">
                <div className="section-frame">
                    <footer>
                        <div className="footer-col" >
                            <Image src={"/logo.png"} alt="built" className="footer-logo-img" width={400} height={400} />
                            <p className="footer-about">We understand the people demands behind high-growth financial services businesses and connect the right talent where it matters most.</p>
                            <div className="footer-connect-line-wrap">
                                <LinkedinIcon />
                                <div className="footer-connect-line-text">Connect with us on LinkedIn</div>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link href={"/"} className={pathname === "/" ? "f-active" : ""}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/about-us"} className={pathname === "/about-us" ? "f-active" : ""}>About Us</Link>
                                </li>
                                <li>
                                    <Link href={"/services"} className={pathname === "/services" ? "f-active" : ""}>Services</Link>
                                </li>

                                <li>
                                    <Link href={"/organization"} className={pathname === "/organization" ? "f-active" : ""}>Organization</Link>
                                </li>
                                <li>
                                    <Link href={"/job-seekers"} className={pathname === "/job-seekers" ? "f-active" : ""}>Job Seekers</Link>
                                </li>
                                <li>
                                    <Link href={"/candidates"} className={pathname === "/candidates" ? "f-active" : ""}>Candidates</Link>
                                </li>
                                <li>
                                    <Link href={"/opportunities"} className={pathname === "/opportunities" ? "f-active" : ""}>Opportunity</Link>
                                </li>
                                <li>
                                    <Link href={"/contact-us"} className={pathname === "/contact-us" ? "f-active" : ""}>Contact us</Link>
                                </li>

                            </ul>


                        </div>
                        <div className="footer-col footer-second-col">
                            <h4 className="md:mr-15">Trends & Cases</h4>
                            <ul >
                                <li>
                                    <Link href={"/trend-and-cases"} className={pathname === "/trend-and-cases" ? "f-active" : ""}>Trends and Case</Link>
                                </li>
                                <li>
                                    <Link href={"/trends"} className={pathname === "/trends" ? "f-active" : ""}>Trends</Link>
                                </li>
                                <li>
                                    <Link href={"/case-studies"} className={pathname === "/case-studies" ? "f-active" : ""}>Case Study</Link>
                                </li>
                                <li>
                                    <Link href={"/cookie-policy"} className={pathname === "/cookie-policy" ? "f-active" : ""}>Cookie Policy</Link>
                                </li>
                                <li>
                                    <Link href={"/privacy-policy"} className={pathname === "/privacy-policy" ? "f-active" : ""}>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href={"/terms-for-businesses"} className={pathname === "/terms-for-businesses" ? "f-active" : ""}>Terms for Businesses</Link>
                                </li>
                                <li>
                                    <Link href={"/terms-for-candidates-and-job-seekers"} className={pathname === "/terms-for-candidates-and-job-seekers" ? "f-active" : ""}>Terms for Candidates & Job Seekers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col  mt-22">
                            <h4>Location</h4>
                            <ul>
                                <li className="flex items-center gap-x-2">
                                    <WhiteMailIcon />
                                    <Link href={"/"}>info@reqking.com</Link>
                                </li>
                                <li className="flex items-center gap-x-2">
                                    <LocationWhiteIcon />
                                    <Link href={"/"}>London, United Kingdom</Link>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="section-frame">
                    <div className="footer-bottom-container flex items-center justify-center">
                        <div className="footer-bottom-text">© Reqking | All Rights Reserved </div>
                        {/* <div className="footer-bottom-text">Design & Developed By DevelopmentCart</div> */}

                    </div>
                </div>
            </div>
        </>
    )
}
