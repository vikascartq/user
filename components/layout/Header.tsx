"use client";
import ButtonAction from "@/ui/buttons/ButtonAction";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ChevronDown from "@/svg/ChevronDown";

import "./header.css";
import { usePathname, useRouter } from "next/navigation";
export default function Header() {
    const router = useRouter()
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLLIElement>(null);
    const [trendsMenuOpen, setTrendsMenuOpen] = useState(false);
    const [orginationMenuOpen, setOrginationMenuOpen] = useState(false);
    const [jobSeekersMenuOpen, setJobSeekersMenuOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setTrendsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClose = () => setMenuOpen(false);

    return (
        <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
            <div className="app-header-container">
                <div className="logo">
                    <Link href={"/"}>
                        <Image src={"/logo.png"} alt="built" width={140} height={40} />
                    </Link>
                </div>

                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav-container ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li><Link onClick={handleClose} href="/" className={pathname === "/" ? "n-active" : ""}>Home</Link></li>
                        <li><Link onClick={handleClose} href="/about-us" className={pathname === "/about-us" ? "n-active" : ""}>About Us</Link></li>
                        <li><Link onClick={handleClose} href="/services" className={pathname === "/services" ? "n-active" : ""}>Services</Link></li>



                        {/* organisation start */}
                        {/* <li><Link onClick={handleClose} href="/organization" className={pathname === "/organization" ? "n-active" : ""}>Organization</Link></li> */}
                        <li className="dropdown-menu"
                            ref={dropdownRef}
                        >
                            <div className="dropdown-trigger">
                                <Link
                                    onClick={handleClose}
                                    href="/organization"
                                    className={`dropdown-link ${pathname === "/organization" || pathname === "/candidates" ? "n-active" : ""}`}
                                >

                                    {pathname === "/organization" && "Organization"}
                                    {pathname === "/candidates" && "Candidates"}
                                    {pathname !== "/organization" && pathname !== "/candidates" && "Organization"}

                                </Link>

                                <button
                                    type="button"
                                    className="dropdown-arrow-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setOrginationMenuOpen((prev) => !prev);
                                    }}
                                >
                                    <ChevronDown />
                                </button>
                            </div>

                            {orginationMenuOpen && (
                                <div className="dropdown-content">
                                    <Link
                                        onClick={() => {
                                            handleClose();
                                            setOrginationMenuOpen(false);
                                        }}
                                        href="/candidates"
                                    >
                                        Candidates
                                    </Link>


                                </div>
                            )}
                        </li>

                        {/* organisation end */}
                        {/* job-seekers start */}

                         <li className="dropdown-menu"
                            ref={dropdownRef}
                        >
                            <div className="dropdown-trigger">
                                <Link
                                    onClick={handleClose}
                                    href="/job-seekers"
                                    className={`dropdown-link ${pathname === "/job-seekers" || pathname === "/opportunities" ? "n-active" : ""}`}
                                >

                                    {pathname === "/job-seekers" && "Job Seekers"}
                                    {pathname === "/opportunities" && "Opportunities"}
                                    {pathname !== "/job-seekers" && pathname !== "/opportunities" && "Job Seekers"}

                                </Link>

                                <button
                                    type="button"
                                    className="dropdown-arrow-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setJobSeekersMenuOpen((prev) => !prev);
                                    }}
                                >
                                    <ChevronDown />
                                </button>
                            </div>

                            {jobSeekersMenuOpen && (
                                <div className="dropdown-content">
                                    <Link
                                        onClick={() => {
                                            handleClose();
                                            setJobSeekersMenuOpen(false);
                                        }}
                                        href="/opportunities"
                                    >
                                        Opportunities
                                    </Link>


                                </div>
                            )}
                        </li>
                        {/* Job Seekers  end */}




                        {/* <li><Link onClick={handleClose} href="/job-seekers" className={pathname === "/job-seekers" ? "n-active" : ""}>Job Seekers</Link></li> */}
                        <li className="dropdown-menu"
                            ref={dropdownRef}
                        >
                            <div className="dropdown-trigger">
                                <Link
                                    onClick={handleClose}
                                    href="/trend-and-cases"
                                    className={`dropdown-link ${pathname === "/trend-and-cases" || pathname === "/trends" || pathname === "/case-studies" ? "n-active" : ""}`}
                                >

                                    {pathname === "/trends" && "Trends"}
                                    {pathname === "/case-studies" && "Case Studies"}
                                    {pathname !== "/case-studies" && pathname !== "/trends" && "Trends & Cases"}
                                </Link>

                                <button
                                    type="button"
                                    className="dropdown-arrow-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setTrendsMenuOpen((prev) => !prev);
                                    }}
                                >
                                    <ChevronDown />
                                </button>
                            </div>

                            {trendsMenuOpen && (
                                <div className="dropdown-content">
                                    <Link
                                        onClick={() => {
                                            handleClose();
                                            setTrendsMenuOpen(false);
                                        }}
                                        href="/trends"
                                    >
                                        Trends
                                    </Link>

                                    <Link
                                        onClick={() => {
                                            handleClose();
                                            setTrendsMenuOpen(false);
                                        }}
                                        href="/case-studies"
                                    >
                                        Cases
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li><Link onClick={handleClose} href="/contact-us" className={pathname === "/contact-us" ? "n-active" : ""}>Contact us</Link></li>
                    </ul>

                    {
                        menuOpen && (
                            <div className="mobile-btn">
                                <ButtonAction
                                    type="primary"
                                    text="Book A Strategy Call"
                                    onClick={() => router.push("/contact-us")}
                                />
                            </div>
                        )
                    }
                </div>

                {
                    !menuOpen && (
                        <div className="mobile-btn desktop-only">
                            <ButtonAction
                                type="primary"
                                text="Book A Strategy Call"
                                onClick={() => router.push("/contact-us")}
                            />
                        </div>
                    )
                }
            </div>
        </header>
    );
}