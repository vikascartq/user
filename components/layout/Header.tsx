"use client";
import ButtonAction from "@/ui/buttons/ButtonAction";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
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
                        <li><Link onClick={handleClose} href="/trend-and-cases">Trends & Cases</Link></li>
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