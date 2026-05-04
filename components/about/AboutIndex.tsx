import Global from "./Global";
import HeroSection from "./HeroSection";
import Perspective from "./Perspective";
import Professional from "./Professional";
import Trading from "./Trading";
import WhatMakes from "./WhatMakes";
import "./about.css";
export default function AboutIndex() {
    return (
        <>
            <HeroSection />
            <Perspective />
            <Trading />
            <Global />
            <WhatMakes />
            <Professional />
        </>
    )
}
