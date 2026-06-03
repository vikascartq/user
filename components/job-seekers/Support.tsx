import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";

export default function Support() {
    return (
        <div className="section-base-bg support-section">
            <SectionFrame
                type={"default"}
                imgNode={
                    <Image src={"/job-seekers/support.png"} alt="built" className="support-img" width={400} height={400} />
                }
                contentNode={
                    <>
                        <div className="section-content-title-wrapper">
                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                            <div className="s-lg">
                                <h2 className="section-content-title">Support beyond the  <span>application</span> </h2>
                                <h2 className="section-content-title"><span> process</span></h2>
                            </div>
                            <div className="s-sm">
                                <h2 className="section-content-title ">Support beyond the  <span>application process</span> </h2>
                            </div>
                        </div>
                        <p className="section-content-para mb-4">Many strong candidates struggle not because they lack ability, but because they lack positioning, direction, feedback, or the right level of market access. ReqKing helps job seekers approach their next move with more clarity, stronger preparation, and a more deliberate strategy.</p>
                    </>
                }
            />
        </div>
    )
}
