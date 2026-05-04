import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";

export default function Professional() {
    return <div className="section-base-bg">
        <SectionFrame
            type={"default"}
            imgNode={
                <Image src={"/about/professional.png"} alt="built" className="professional-img" width={400} height={400} />
            }
            contentNode={
                <>
                    <div className="section-content-title-wrapper">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <div>
                            <h2 className="section-content-title">Professional <span>credibility</span></h2>
                        </div>
                    </div>
                    <p className="section-content-para">ReqKing is backed by senior HR and talent leadership experience and a CIPD Level 7 qualification path.</p>
                    <p className="section-content-para">ReqKing is backed by senior-level experience in talent and people leadership, supported by a CIPD Level 7 development path and grounded in practical delivery rather than theory alone. The work is shaped by commercial awareness, business partnership, and a genuine interest in helping organisations become stronger, more stable, and better equipped for sustainable growth.</p>
                </>
            }
        />
    </div>
}
