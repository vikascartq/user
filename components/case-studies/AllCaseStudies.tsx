import CaseStudyCard from "@/ui/case-study-card/CaseStudyCard";
import { useRouter } from "next/navigation";

export default function AllCaseStudies() {
    const navigate = useRouter();
    const handleView = (id: string) => {
        navigate.push(`/case-studies/${id}`)
    }
    return (
        <div className="section-base-bg all-case-studies-section-base">
            <div className="section-frame">
                <div className="current-trends-path-container">
                    <div className="all-case-studies-card-wrapper">
                        {
                            Array(12).fill("").map((_, i) => (
                                <CaseStudyCard
                                    key={`trend-card-${i + 1}`}
                                    tag={"FX BROKER"}
                                    title={"Complete HR Infrastructure Setup"}
                                    subTitle="Challenge"
                                    para={"Rapidly growing broker lacked structured HR systems, recruitment processes and internal policies."}
                                    para2="Reduced hiring cycle by 40% and improved internal operational efficiency."
                                    btnText={"View More"}
                                    btnClick={() => handleView(i + "101")}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
