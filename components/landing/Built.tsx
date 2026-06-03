import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";

export default function Built() {
    return (
        <div className="section-base-bg">
            <SectionFrame
                type={"default"}
                imgNode={
                    <Image src={"/built.png"} alt="built" className="built-img" width={400} height={400} />
                }
                contentNode={
                    <>
                        <div className="section-content-title-wrapper sm-pb-1-4">
                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                            <div >
                                <h2 className="section-content-title">Built for growth under</h2>
                                <h2 className="section-content-title"><span> pressure</span></h2>
                            </div>
                        </div>
                        <p className="section-content-para sm-pb-1-4">In fast-moving businesses, growth can create pressure before it creates stability. Teams grow quickly, priorities shift, managers become overstretched, and important people decisions start happening too late or without enough structure. </p>
                        <p className="section-content-para">ReqKing works closely with leadership teams to bring clarity, better organisation, and practical support so the business can keep moving forward without losing control behind the scenes.</p>
                    </>
                }
            />
        </div>
    )
}
