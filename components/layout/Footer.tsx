import LinkedinIcon from "@/svg/LinkedinIcon";
import LocationWhiteIcon from "@/svg/LocationWhiteIcon";
import WhiteMailIcon from "@/svg/WhiteMailIcon";
import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
    return (
        <>
            <div className="footer-base">
                <div className="section-frame">
                    <footer>
                        <div className="footer-col">
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
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>About Us</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Job Seekers</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Organization</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Case Studies</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Insights</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
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
                    <div className="footer-bottom-container">
                        <div className="footer-bottom-text">© Recruitment king | All Rights Reserved </div>
                        <div className="footer-bottom-text">Design & Developed By DevelopmentCart</div>
                        <div className="flex items-center gap-x-2">
                            <a href="/" target="_blank" rel="noopener noreferrer" className="footer-bottom-text underline">T & C</a>
                            <a href="/" target="_blank" rel="noopener noreferrer" className="footer-bottom-text underline">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
