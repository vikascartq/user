import HonestyIcon from "@/svg/job-seekers/HonestyIcon";
import MovementIcon from "@/svg/job-seekers/MovementIcon";
import SupportIcon from "@/svg/job-seekers/SupportIcon";
import Image from "next/image";

export default function JobExpect() {
    return (
        <div className="section-base-bg">
            <div className="section-frame">
                <div className="job-expert-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title"> What job seekers can  <span>expect   </span></h2>
                    </div>
                    <p className="job-expert-para">ReqKing helps serious candidates present themselves better, prepare better, and move more strategically in the market.</p>
                    <div className="job-expert-box-container">
                        <div className="job-expert-box">
                            <HonestyIcon />
                            <div className="job-expert-box-title">Clarity & Honesty</div>
                            <div className="job-expert-box-desc">Present yourself better</div>
                            <div className="job-expert-box-desc">A realistic market view with no false promises. </div>
                        </div>
                        <div className="job-expert-box-divider"></div>
                        <div className="job-expert-box">
                            <SupportIcon />
                            <div className="job-expert-box-title">Professional Support</div>
                            <div className="job-expert-box-desc">Prepare better</div>
                            <div className="job-expert-box-desc">Expert guidance and tools for career readiness</div>
                        </div>
                        <div className="job-expert-box-divider"></div>
                        <div className="job-expert-box">
                            <MovementIcon />
                            <div className="job-expert-box-title">Strategic Movement</div>
                            <div className="job-expert-box-desc">Move more strategically</div>
                            <div className="job-expert-box-desc">Moving with intent to high-quality opportunities</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
