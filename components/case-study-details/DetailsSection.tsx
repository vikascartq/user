import ListItemIcon1 from "@/svg/case-study/ListItemIcon1";
import ListItemIcon10 from "@/svg/case-study/ListItemIcon10";
import ListItemIcon2 from "@/svg/case-study/ListItemIcon2";
import ListItemIcon3 from "@/svg/case-study/ListItemIcon3";
import ListItemIcon4 from "@/svg/case-study/ListItemIcon4";
import ListItemIcon5 from "@/svg/case-study/ListItemIcon5";
import ListItemIcon6 from "@/svg/case-study/ListItemIcon6";
import ListItemIcon7 from "@/svg/case-study/ListItemIcon7";
import ListItemIcon8 from "@/svg/case-study/ListItemIcon8";
import ListItemIcon9 from "@/svg/case-study/ListItemIcon9";
import PremiumCard from "@/ui/premium-card/PremiumCard";
import Image from "next/image";

export default function DetailsSection() {
    return (
        <div className="section-base-bg case-study-details-section-base">
            <div className="section-frame">
                <div className="current-trends-path-container">
                    <div className="case-details-container">
                        <div className="case-details-content">
                            <div className="section-content-title-wrapper">
                                <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                                <h2 className="section-content-title">Client  <span>Situation   </span></h2>
                            </div>
                            <p className="case-details-para">A rapidly expanding forex brokerage operating across multiple international markets was experiencing operational challenges due to the absence of a structured HR function.</p>
                            <p className="case-details-para">Hiring decisions were decentralised, HR policies were inconsistent across teams, and leadership lacked clear visibility into employee performance and organisational structure. As the company prepared for further global expansion, leadership recognised the need to build a structured and scalable HR infrastructure.</p>
                            <div className="section-content-title-wrapper mt-8">
                                <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                                <h2 className="section-content-title"> <span>Objectives   </span></h2>
                            </div>
                            <p className="case-details-para">The leadership team required a complete HR framework capable of supporting international growth while improving recruitment, compliance and performance management across departments.</p>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon1 />
                                <div className="styled-unordered-text">Establish a structured HR infrastructure</div>
                            </div>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon2 />
                                <div className="styled-unordered-text">Create standardised HR policies and procedures</div>
                            </div>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon3 />
                                <div className="styled-unordered-text">Design organisational structure and reporting lines</div>
                            </div>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon4 />
                                <div className="styled-unordered-text"> Improve hiring processes and talent acquisition</div>
                            </div>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon5 />
                                <div className="styled-unordered-text">Introduce performance management frameworks</div>
                            </div>
                            <div className="section-content-title-wrapper mt-8">
                                <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                                <h2 className="section-content-title"> <span>Approach   </span></h2>
                            </div>
                            <p className="case-details-para">A full assessment of the organisation’s workforce structure, hiring practices and leadership processes was conducted. Based on this assessment, a structured HR infrastructure was designed to support both operational efficiency and future growth.</p>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon6 />
                                <div className="styled-unordered-text">Designed HR governance framework and policies</div>
                            </div>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon7 />
                                <div className="styled-unordered-text">Built standardised recruitment and onboarding processes</div>
                            </div>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon8 />
                                <div className="styled-unordered-text">Created organisational structure and job architecture</div>
                            </div>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon9 />
                                <div className="styled-unordered-text">Developed performance management systems for key teams</div>
                            </div>
                            <div className="styled-unordered-list-item">
                                <div className="styled-unordered-separator"></div>
                                <ListItemIcon10 />
                                <div className="styled-unordered-text">Implemented employee lifecycle management processes</div>
                            </div>
                            <div className="section-content-title-wrapper mt-8">
                                <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                                <h2 className="section-content-title"> <span>Results   </span></h2>
                            </div>
                            <div className="result-feat">
                                <div className="result-feat-box">
                                    <div className="result-feat-text">50%</div>
                                    <p className="result-feat-para">Faster Hiring Process</p>
                                </div>
                                <div className="result-feat-separator"></div>
                                <div className="result-feat-box">
                                    <div className="result-feat-text">Structured</div>
                                    <p className="result-feat-para">HR Policies & Governance</p>
                                </div>
                                <div className="result-feat-separator"></div>
                                <div className="result-feat-box">
                                    <div className="result-feat-text">Improved</div>
                                    <p className="result-feat-para">Team Performance Visibility</p>
                                </div>
                            </div>
                            <div className="result-feat-divider"></div>
                            <div className="section-content-title-wrapper mt-8">
                                <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                                <h2 className="section-content-title"> <span>Impact   </span></h2>
                            </div>
                            <p className="case-details-para">The new HR infrastructure provided leadership with a structured framework for managing talent, improving recruitment outcomes and supporting international expansion.</p>
                            <p className="case-details-para">The company now operates with a scalable HR function that aligns people strategy with business growth and operational performance.</p>
                        </div>
                        <div className="case-details-features">
                            <div className="case-details-premium-card-container">
                                <PremiumCard
                                    title="FX BROKER"
                                    para="Complete HR Infrastructure Setup"
                                />
                                <PremiumCard
                                    title="CRYPTO TRADING FIRM"
                                    para="Performance Management Framework"
                                />
                                <PremiumCard
                                    title="GLOBAL FINTECH COMPANY"
                                    para="Culture & Retention Strategy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
