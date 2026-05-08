import FeatStarIcon from "@/svg/job-seekers/FeatStarIcon";
import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";

export default function WhoThis() {
    return (
        <div className="section-base-bg">
            <SectionFrame
                type={"default"}
                imgNode={
                    <Image src={"/job-seekers/who-this.png"} alt="built" className="help-img" width={400} height={400} />
                }
                contentNode={
                    <>
                        <div className="section-content-title-wrapper">
                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                            <h2 className="section-content-title">Who this page  <span> is for</span></h2>
                        </div>
                        <p className="section-content-para">This page is for high-quality professionals across diverse functions who are ready to reach the next stage of their career. </p>
                        <div className="who-this-feat-box mt-4">
                            <FeatStarIcon />
                            <div className="who-this-feat-box-content">
                                <h4 className="who-this-feat-box-title">Multi-disciplinary</h4>
                                <p className="who-this-feat-box-para">Specialized talent in Sales, Operations, HR, Product, Engineering, Marketing, and Finance.</p>
                            </div>
                        </div>
                        <div className="who-this-feat-box mt-4">
                            <FeatStarIcon />
                            <div className="who-this-feat-box-content">
                                <h4 className="who-this-feat-box-title">Strategic Growth Drivers</h4>
                                <p className="who-this-feat-box-para">Professionals looking to move into stronger businesses and high-performance cultures.</p>
                            </div>
                        </div>
                        <div className="who-this-feat-box mt-4">
                            <FeatStarIcon />
                            <div className="who-this-feat-box-content">
                                <h4 className="who-this-feat-box-title">Competitive Edge</h4>
                                <p className="who-this-feat-box-para">Ambitious candidates who want to present themselves better and win high-quality opportunities.</p>
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    )
}
