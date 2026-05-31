"use client";
import ButtonAction from "@/ui/buttons/ButtonAction";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ChevronDown from "@/svg/ChevronDown";

import "./header.css";
export default function Header() {
    const dropdownRef = useRef<HTMLLIElement>(null);
    const [trendsMenuOpen, setTrendsMenuOpen] = useState(false);
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
                        <li><Link onClick={handleClose} href="/">Home</Link></li>
                        <li><Link onClick={handleClose} href="/about-us">About Us</Link></li>
                        <li><Link onClick={handleClose} href="/services">Services</Link></li>
                        <li><Link onClick={handleClose} href="/organization">Organization</Link></li>
                        <li><Link onClick={handleClose} href="/job-seekers">Job Seekers</Link></li>
                        <li className="dropdown-menu"
                            ref={dropdownRef}
                        >
                            <div className="dropdown-trigger">
                                <Link
                                    onClick={handleClose}
                                    href="/trend-and-cases"
                                    className="dropdown-link"
                                >
                                    Trends & Cases
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
                        <li><Link onClick={handleClose} href="/contact-us">Contact us</Link></li>
                    </ul>

                    {
                        menuOpen && (
                            <div className="mobile-btn">
                                <ButtonAction
                                    type="primary"
                                    text="Book A Strategy Call"
                                    onClick={() => { }}
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
                                onClick={() => { }}
                            />
                        </div>
                    )
                }
            </div>
        </header>
    );
}