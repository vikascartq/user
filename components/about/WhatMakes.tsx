import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";

export default function WhatMakes() {
    return <div className="section-base-bg">
        <SectionFrame
            type={"reverse"}
            imgNode={
                <Image src={"/about/what-makes.png"} alt="built" className="what-makes-img" width={400} height={400} />
            }
            contentNode={
                <>
                    <div className="section-content-title-wrapper">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <div>
                            <h2 className="section-content-title">What makes  <span>ReqKing different</span></h2>
                        </div>
                    </div>
                    <p className="section-content-para">We sit between strategy and execution. It helps identify what needs to improve, but it also helps move those improvements into action, whether that means better hiring plans, clearer role structures, stronger people processes, more effective leadership support, or practical guidance through day-to-day business challenges.</p>
                </>
            }
        />
    </div>
}
