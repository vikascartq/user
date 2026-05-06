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