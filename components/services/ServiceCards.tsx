import SCardIcon1 from "@/svg/services/SCardIcon1"
import SCardIcon2 from "@/svg/services/SCardIcon2"
import SCardIcon3 from "@/svg/services/SCardIcon3"
import SCardIcon4 from "@/svg/services/SCardIcon4"
import SCardIcon5 from "@/svg/services/SCardIcon5"
import SCardIcon6 from "@/svg/services/SCardIcon6"
import ServiceCardBox from "@/ui/service-card/ServiceCardBox"

export default function ServiceCards() {
    return (
        <div className="section-base-bg service-cards-section">
            <div className="section-frame">
                <div className="service-cards-container">
                    {
                        serviceCardsData.map((card, index) => (
                            <ServiceCardBox
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                supportTitle={card.supportTitle}
                                support={card.support}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const serviceCardsData = [
    {
        icon: <SCardIcon1 />,
        title: "Talent Acquisition Strategy",
        description: "Build stronger hiring plans, sharper role scoping, better market targeting, improved candidate quality, and a more credible recruitment process.",
        supportTitle: "Support can include:",
        support: [
            "Hiring strategy",
            "Role prioritisation",
            "Sourcing direction",
            "Stakeholder alignment",
            "Recruitment process improvement"
        ]
    },
    {
        icon: <SCardIcon2 />,
        title: "People Operations & HR Foundations",
        description: "Create the structure that fast-growth businesses often postpone until problems appear",
        supportTitle: "This includes:",
        support: [
            "People-process design",
            "Onboarding",
            "Policy support",
            "Employee lifecycle structure",
            "Documentation",
            "Ownership clarity",
            "Stronger HR operating rhythm"
        ]
    },
    {
        icon: <SCardIcon3 />,
        title: "People Strategy & Organisational Support",
        description: "Align business growth with the right people structure",
        supportTitle: "ReqKing supports :",
        support: [
            "Workforce planning",
            "Organisation design thinking",
            "Team-shape decisions",
            "Leadership alignment",
            "Role clarity",
            "Practical people strategy that reflects commercial priorities"
        ]
    },
    {
        icon: <SCardIcon4 />,
        title: "Leadership, Performance & Culture",
        description: "The focus is to reduce friction and improve accountability as the business scales.",
        supportTitle: "Support include:",
        support: [
            "Stronger feedback culture",
            "Better day-to-day people leadership",
            "More effective performance conversations",
            "Support managers and leaders with clearer expectations"
        ]
    },
    {
        icon: <SCardIcon5 />,
        title: "Employer Brand & Candidate Experience",
        description: "Improve how the business is seen by talent and how candidates experience the hiring journey.",
        supportTitle: "ReqKing supports :",
        support: [
            "Role messaging",
            "Employer-positioning support",
            "Process quality",
            "Communication standards",
            "Better alignment between brand promise and candidate reality."
        ]
    },
    {
        icon: <SCardIcon6 />,
        title: "Project & Advisory Support",
        description: "Engagements are shaped around practical priorities, not generic HR packages.",
        supportTitle: "Support include:",
        support: [
            "Expansion, hiring transformation",
            "Process redesign",
            "Retention challenges",
            "Capability gaps",
            "Leadership strain",
            "People-function buildout"
        ]
    }
]