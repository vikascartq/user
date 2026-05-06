import ServiceCardBox from "@/ui/service-card/ServiceCardBox"

export default function ServiceCards() {
    return (
        <div className="section-base-bg">
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
    }
]