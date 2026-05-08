import OrgCardIcon1 from "@/svg/org/OrgCardIcon1";
import OrgCardIcon2 from "@/svg/org/OrgCardIcon2";
import OrgCardIcon3 from "@/svg/org/OrgCardIcon3";
import OrgCardIcon4 from "@/svg/org/OrgCardIcon4";
import OrgCardIcon5 from "@/svg/org/OrgCardIcon5";
import OrgCardIcon6 from "@/svg/org/OrgCardIcon6";
import OrgCardIcon7 from "@/svg/org/OrgCardIcon7";
import OrgCardIcon8 from "@/svg/org/OrgCardIcon8";
import DetailCard from "@/ui/details-card/DetailCard";
import Image from "next/image";
export default function HowSupport() {
    return (
        <div className="section-base-bg how-support-section-base">
            <div className="section-frame">
                <div className="how-support-path-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title">How ReqKing supports <span>businesses   </span></h2>
                    </div>
                    <div>
                        <p className="how-support-path-para">Support can be provided as project-based consultancy, retained advisory, or ongoing strategic partnership depending on the stage, pressure points, and growth plans of the business.</p>
                    </div>
                    <div className="how-support-path-card-wrapper">
                        {
                            cardList.map((card, i) => (
                                <DetailCard
                                    key={`card-${i}`}
                                    icon={card.icon}
                                    title={card?.title}
                                    description1={card?.description1}
                                    description2={card?.description2}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const cardList = [
    {
        icon: <OrgCardIcon1 />,
        title: "Human Resources",
        description1: "ReqKing helps businesses build stronger HR foundations across the full employee lifecycle.",
        description2: "This includes people processes, onboarding, policy support, structure, documentation, role clarity, and practical day-to-day HR support that helps the business operate with more confidence and consistency."
    },
    {
        icon: <OrgCardIcon2 />,
        title: "Talent Acquisition and Recruitment",
        description1: "ReqKing supports businesses with talent acquisition strategy, recruitment planning, role scoping, market targeting, hiring process improvement, stakeholder alignment, and candidate-quality improvement.",
        description2: "The focus is on helping businesses hire better, faster, and with stronger alignment to commercial priorities."
    },
    {
        icon: <OrgCardIcon3 />,
        title: "Salary Benchmarking and Recruitment Budgeting",
        description1: "ReqKing helps businesses make more informed hiring decisions through market-based salary insight, compensation benchmarking, recruitment-cost planning, and practical budgeting support.",
        description2: "This allows leaders to set realistic expectations, reduce hiring friction, and build recruitment plans with better financial control."
    },
    {
        icon: <OrgCardIcon4 />,
        title: "Employee Relations",
        description1: "ReqKing supports businesses in managing employee relations with greater clarity, consistency, and professionalism. ",
        description2: "This includes people issues, communication challenges, performance concerns, workplace friction, and the practical handling of employee matters that can affect morale, retention, and business stability."
    },
    {
        icon: <OrgCardIcon5 />,
        title: "Business Performance",
        description1: "People performance and business performance are closely connected. ",
        description2: "ReqKing helps leadership teams strengthen accountability, manager effectiveness, performance conversations, team alignment, and the people systems that support stronger day-to-day execution across the business."
    },
    {
        icon: <OrgCardIcon6 />,
        title: "Business Growth",
        description1: "As businesses expand, people challenges often become growth challenges.",
        description2: "ReqKing helps leaders align hiring, structure, leadership capability, and internal support with the next stage of business growth so expansion is more sustainable and less reactive."
    },
    {
        icon: <OrgCardIcon7 />,
        title: "Strategy Making",
        description1: "ReqKing contributes to strategy through a people and organisational lens. ",
        description2: "This includes workforce planning, structure reviews, leadership support, hiring priorities, capability mapping, and practical people strategy that reflects where the business is today and where it wants to go next."
    },
    {
        icon: <OrgCardIcon8 />,
        title: "New Business Development",
        description1: "ReqKing also supports the people side of new business growth by helping leadership teams think through capability needs, hiring priorities, team buildout, commercial support structure, and the people planning needed to back business development with the right internal foundation.",
        description2: ""
    }
]