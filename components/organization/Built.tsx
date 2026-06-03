import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";

export default function Built() {
    return (
        <div className="section-base-bg org-built-section">
            <SectionFrame
                type={"default"}
                imgNode={
                    <Image src={"/org/org-built.png"} alt="built" className="org-built-img" width={400} height={400} />
                }
                contentNode={
                    <>
                        <div className="section-content-title-wrapper">
                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                            <div className="built-title-sm-lg">
                                <h2 className="section-content-title">Built for businesses under <span>pressure to </span> </h2>
                                <h2 className="section-content-title"><span> grow</span></h2>
                            </div>
                            <div className="built-title-lg-sm">
                                <h2 className="section-content-title">Built for businesses under <span>pressure to grow</span> </h2>
                            </div>
                        </div>
                        <p className="section-content-para mb-4">When businesses scale quickly, people challenges rarely stay in one place. Hiring becomes urgent, managers take on too much, team structures become unclear, and internal problems begin slowing momentum. ReqKing provides practical support that helps leadership teams bring more structure, improve decision-making, and create people systems that support growth rather than struggle to keep up with it.</p>
                        <p className="section-content-para">ReqKing provides practical HR and talent support that helps leadership teams build stronger foundations without losing commercial momentum. designed to help businesses navigate growth, refine their employer brand, and align their people strategy with commercial priorities</p>
                    </>
                }
            />
        </div>
    )
}
