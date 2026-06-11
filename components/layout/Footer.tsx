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
            <div>
                <div className="section-frame">
                    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 py-10 lg:py-12 2xl:py-16">
                        {/* Brand - Desktop: col-span-4 | Tablet: order-1 | Mobile: order-1 */}
                        <div className="flex flex-col lg:col-span-4 order-1">
                            <Image src={"/logo.png"} alt="built" className="w-[100px] h-[84px] sm:w-[125px] sm:h-[105px] 2xl:w-[140px] 2xl:h-[118px]" width={400} height={400} />
                            <p className="max-w-full sm:max-w-[323px] 2xl:max-w-[360px] my-4 text-sm sm:text-base 2xl:text-lg font-normal leading-tight">
                                We understand the people demands behind high-growth financial services businesses and connect the right talent where it matters most.
                            </p>
                            <div className="flex items-center gap-3 lg:mt-auto">
                                <LinkedinIcon />
                                <div className="footer-connect-line-text text-xs sm:text-sm 2xl:text-base font-medium">Connect with us on LinkedIn</div>
                            </div>
                        </div>

                        {/* Quick Links - Desktop: col-span-3 | Tablet: order-3 | Mobile: order-3 */}
                        <div className="flex flex-col lg:col-span-3 order-3 md:order-3 lg:order-2">
                            <h4 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-4 lg:mb-4">Quick Links</h4>
                            <ul className="space-y-4">
                                <li><Link href={"/"} className={pathname === "/" ? "f-active" : ""}>Home</Link></li>
                                <li><Link href={"/about-us"} className={pathname === "/about-us" ? "f-active" : ""}>About Us</Link></li>
                                <li><Link href={"/services"} className={pathname === "/services" ? "f-active" : ""}>Services</Link></li>
                                <li><Link href={"/organization"} className={pathname === "/organization" ? "f-active" : ""}>Organization</Link></li>
                                <li><Link href={"/job-seekers"} className={pathname === "/job-seekers" ? "f-active" : ""}>Job Seekers</Link></li>
                                <li><Link href={"/candidates"} className={pathname === "/candidates" ? "f-active" : ""}>Candidates</Link></li>
                                <li><Link href={"/opportunities"} className={pathname === "/opportunities" ? "f-active" : ""}>Opportunity</Link></li>
                                <li><Link href={"/contact-us"} className={pathname === "/contact-us" ? "f-active" : ""}>Contact us</Link></li>
                            </ul>
                        </div>

                        {/* Second Links - Desktop: col-span-3 | Tablet: order-4 | Mobile: order-4 */}
                        <div className="flex flex-col lg:col-span-3 order-4 md:order-4 lg:order-3 md:mt-[56px]">
                            <ul className="space-y-4 -mt-5 md:mt-[2px] ">
                                <li><Link href={"/trend-and-cases"} className={pathname === "/trend-and-cases" ? "f-active" : ""}>Trends and Case</Link></li>
                                <li><Link href={"/trends"} className={pathname === "/trends" ? "f-active" : ""}>Trends</Link></li>
                                <li><Link href={"/case-studies"} className={pathname === "/case-studies" ? "f-active" : ""}>Case Study</Link></li>
                                <li><Link href={"/cookie-policy"} className={pathname === "/cookie-policy" ? "f-active" : ""}>Cookie Policy</Link></li>
                                <li><Link href={"/privacy-policy"} className={pathname === "/privacy-policy" ? "f-active" : ""}>Privacy Policy</Link></li>
                                <li><Link href={"/terms-for-businesses"} className={pathname === "/terms-for-businesses" ? "f-active" : ""}>Terms for Businesses</Link></li>
                                <li><Link href={"/terms-for-candidates-and-job-seekers"} className={pathname === "/terms-for-candidates-and-job-seekers" ? "f-active" : ""}>Terms for Candidates & Job Seekers</Link></li>
                            </ul>
                        </div>

                        {/* Location - Desktop: col-span-2 | Tablet: order-2 | Mobile: order-2 */}
                        <div className="flex flex-col lg:col-span-2 order-2 md:order-2 lg:order-4 md:mt-20">
                            <h4 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-4 lg:mb-4">Location</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-x-2 text-nowrap"><WhiteMailIcon /><Link href={"/"}>info@reqking.com</Link></li>
                                <li className="flex items-center gap-x-2">
                                    <span className="flex-shrink-0">
                                        <LocationWhiteIcon />
                                    </span>

                                    <Link href="/" className="whitespace-nowrap">
                                        London, United Kingdom
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
          <div className="h-[30px] 2xl:h-[36px] flex items-center justify-center bg-gradient-to-r from-[#C7972B] via-[#DAB74F] via-[#D9B14A] via-[#B37F11] via-[#DAB74F] via-[#B27D0F] to-[#C29226]">
    <p className="text-[10px] 2xl:text-xs font-bold text-center">
        © Reqking | All Rights Reserved
    </p>
</div>
        </>
    )
}
