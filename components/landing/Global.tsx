import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";

export default function Global() {
    return (
        <div className="section-base-bg">
            <SectionFrame
                type={"reverse"}
                imgNode={
                    <Image src={"/Grow.gif"} alt="built" className="global-img" width={400} height={400} />
                }
                contentNode={
                    <>
                        <div className="section-content-title-wrapper">
                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                            <h2 className="section-content-title">Global support with local <span>understanding</span></h2>
                        </div>
                        <p className="section-content-para">Based in London, ReqKing works with businesses and talent across the UK, Europe, LATAM, MENA, Africa, South Asia, and Southeast Asia.
                        </p>
                        <p className="section-content-para">That international exposure helps us understand how growth looks in different markets, how hiring expectations vary, and where businesses need practical support that reflects both local realities and wider commercial goals.</p>
                    </>
                }
            />
        </div>
    )
}
