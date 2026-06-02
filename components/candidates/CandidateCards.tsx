import useCandidate from "@/hooks/useCandidate";
import CandidateCard from "@/ui/candidate-card/CandidateCard";
import {sliceCharacters} from "@/utils/utils";
export default function CandidateCards({ router }: { router: any }) {
    const { candidateList } = useCandidate();
    return (
        <div className="section-base-bg candidate-section-base">
            <div className="section-frame">
                <div className="candidate-section-container">
                    {/* <div className="section-content-title-wrapper justify-center">
                                <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                                <h2 className="section-content-title">How ReqKing supports <span>businesses   </span></h2>
                            </div>
                            <div>
                                <p className="how-support-path-para">Support can be provided as project-based consultancy, retained advisory, or ongoing strategic partnership depending on the stage, pressure points, and growth plans of the business.</p>
                            </div> */}
                    <div className="candidate-section-card-wrapper">
                        {
                            candidateList.map((candidate, i) => (
                                <CandidateCard
                                    key={`candidate-${i + 1}`}
                                    title={candidate?.role}
                                    description={sliceCharacters(candidate?.description, 80)}
                                    tags={candidate?.skills}
                                    onContact={() => router.push('contact-us')}
                                    imageName={candidate?.imageName}
                                />
                            ))
                        }
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