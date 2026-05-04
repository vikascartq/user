import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";

export default function Perspective() {
    return <div className="section-base-bg">
        <SectionFrame
            type={"default"}
            imgNode={
                <Image src={"/about/perspective.png"} alt="built" className="built-img" width={400} height={400} />
            }
            contentNode={
                <>
                    <div className="section-content-title-wrapper">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <div>
                            <h2 className="section-content-title">The ReqKing <span> perspective</span></h2>
                        </div>
                    </div>
                    <p className="section-content-para">We are shaped by real-world experience across talent, people strategy, leadership support, and organizational effectiveness in high-growth business environments. The perspective is simple: Strong businesses are not built on hiring alone. They are built on better structure, better judgment, better leadership support, and a people approach that can grow with the business instead of constantly catching up to it. </p>
                </>
            }
        />
    </div>
}
