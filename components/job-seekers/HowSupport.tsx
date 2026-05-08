import JobCardIcon1 from "@/svg/job-seekers/JobCardIcon1";
import JobCardIcon2 from "@/svg/job-seekers/JobCardIcon2";
import JobCardIcon3 from "@/svg/job-seekers/JobCardIcon3";
import JobCardIcon4 from "@/svg/job-seekers/JobCardIcon4";
import JobCardIcon5 from "@/svg/job-seekers/JobCardIcon5";
import JobCardIcon6 from "@/svg/job-seekers/JobCardIcon6";
import DetailCard from "@/ui/details-card/DetailCard";
export default function HowSupport() {
    return (
        <div className="section-base-bg how-support-section-base">
            <div className="section-frame">
                <div className="how-support-path-container">
                    {/* <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title">How ReqKing supports <span>businesses   </span></h2>
                    </div>
                    <div>
                        <p className="how-support-path-para">Support can be provided as project-based consultancy, retained advisory, or ongoing strategic partnership depending on the stage, pressure points, and growth plans of the business.</p>
                    </div> */}
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
        icon: <JobCardIcon1 />,
        title: "Direct Reach to Hiring Managers",
        description1: "ReqKing helps strong candidates get closer to real decision-makers wherever possible, rather than relying only on blind applications. ",
        description2: "The aim is to improve visibility, strengthen relevance, and increase the chances of meaningful consideration by the right businesses."
    },
    {
        icon: <JobCardIcon2 />,
        title: "Support in Finding a Role at Your Dream Company",
        description1: "ReqKing helps candidates target the right businesses more intelligently by focusing on fit, market direction, career goals, and realistic pathways into high-value opportunities. ",
        description2: "Instead of applying everywhere, candidates are guided toward a more focused and effective job-hunting strategy."
    },
    {
        icon: <JobCardIcon3 />,
        title: "Career Counselling and One-to-One Consultation",
        description1: "Through one-to-one consultation, ReqKing helps candidates think more clearly about their next move, current strengths, positioning gaps, long-term direction, & the type of companies or roles that best match their profile. ",
        description2: "This support is designed to give candidates more confidence & better decision-making in a competitive market."
    },
    {
        icon: <JobCardIcon4 />,
        title: "Interview Preparation",
        description1: "ReqKing helps candidates prepare for interviews with greater structure and confidence.",
        description2: "This includes understanding what hiring managers are looking for, improving personal positioning, preparing stronger answers, handling difficult questions, and learning how to present experience in a more commercially relevant way."
    },
    {
        icon: <JobCardIcon5 />,
        title: "Resume Building",
        description1: "ReqKing helps candidates improve their resume so it presents their experience more clearly, more professionally, and with stronger relevance to the roles they are targeting.",
        description2: "The focus is not just formatting, but sharper messaging, stronger structure, and a better reflection of value."
    },
    {
        icon: <JobCardIcon6 />,
        title: "Understanding Your Market Value",
        description1: "ReqKing helps candidates assess their market value more realistically by looking at their experience, skill set, market demand, target roles, and compensation positioning. ",
        description2: "This gives candidates a stronger basis for job selection, salary discussions, and career planning."
    }
]