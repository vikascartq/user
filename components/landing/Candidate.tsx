import useCandidate from "@/hooks/useCandidate";
import ButtonAction from "@/ui/buttons/ButtonAction";
import CandidateCard from "@/ui/candidate-card/CandidateCard";
import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";
import CoverflowSlider from "./CoverflowSlider";

export default function Candidate() {
    const { candidateList } = useCandidate();
    return (
        <div className="section-base-bg candidate-section">
            <SectionFrame
                type={"reverse"}
                imgNode={
                    candidateList.length > 0 &&
                    <CoverflowSlider
                        list={candidateList}
                        renderSlide={(candidate) => (
                            <CandidateCard
                                title={candidate?.role}
                                description={candidate?.description}
                                tags={candidate?.skills}
                                onContact={() => { }}
                                imageName={candidate?.imageName}
                            />
                        )}
                    />
                }
                contentNode={
                    <>
                        <div className="section-content-title-wrapper mb-0!">
                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                            <h2 className="section-content-title">Meet Our <span>Premier</span></h2>
                        </div>
                        <h2 className="section-content-title mb-4"><span>Candidates</span></h2>
                        <p className="section-content-para">Explore exclusive, pre-vetted professionals available through ReqKing, trusted by leading financial technology firms, global trading firms, digital asset companies and fast-scaling innovation driven businesses. </p>
                        <p className="section-content-para">We don’t just list talent we match organisations with candidates who are performance driven, industry ready and built for long term success.</p>
                        <ButtonAction
                            type="primary"
                            text="View All"
                            onClick={() => { }}
                        />
                    </>
                }
            />
        </div>
    )
}

// const candidates = [
//     {
//         title: "John Doe",
//         description: "Experienced Software Engineer with a strong background in fintech and a proven track record of delivering high-quality solutions.",
//         tags: ["Sales", "Forex", "Client relations", "Negotiation"]
//     },
//     {
//         title: "Jane Smith",
//         description: "Skilled Financial Analyst with expertise in risk management and data analysis.",
//         tags: ["Sales", "Forex", "Client relations", "Negotiation"]
//     },
//     {
//         title: "FX Sales Specialist",
//         description: "10+ years experience in instutional forex sales with a proven track record of exceeding targets.",
//         tags: ["Sales", "Forex", "Client relations", "Negotiation"]
//     },
//     {
//         title: "Jane Foe",
//         description: "Skilled Financial Analyst with expertise in risk management and data analysis.",
//         tags: ["Sales", "Forex", "Client relations", "Negotiation"]
//     },
//     {
//         title: "Jane Doe",
//         description: "Skilled Financial Analyst with expertise in risk management and data analysis.",
//         tags: ["Sales", "Forex", "Client relations", "Negotiation"]
//     },
//     {
//         title: "Jane Smith jr",
//         description: "Skilled Financial Analyst with expertise in risk management and data analysis.",
//         tags: ["Sales", "Forex", "Client relations", "Negotiation"]
//     }
// ];