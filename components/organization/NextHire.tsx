import useCandidate from "@/hooks/useCandidate";
import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";
import CandidateCard from "@/ui/candidate-card/CandidateCard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CoverflowSlider from "../landing/CoverflowSlider";

export default function NextHire() {
    const navigate = useRouter();
    const { candidateList } = useCandidate();
    const handleView = () => {
        navigate.push("/candidates")
    }
    return (
        <div className="section-base-bg">
            <div className="section-frame">
                <div className="next-hire-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title">Your Next Hire <span>Starts Here </span></h2>
                    </div>
                    {
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
                    <div className="flex justify-center">
                        <button type="button" className="next-hire-view-btn" onClick={handleView}>View All <GoldenArrowIcon /></button>
                    </div>
                </div>
            </div>
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