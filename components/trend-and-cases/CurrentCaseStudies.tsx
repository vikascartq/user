import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";
import CaseStudyCard from "@/ui/case-study-card/CaseStudyCard";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CurrentCaseStudies() {
    const navigate = useRouter();
    const handleView = () => {
        navigate.push("/case-studies")
    }
    return (
        <div className="section-base-bg current-trends-section-base">
            <div className="section-frame">
                <div className="current-trends-path-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title">Case  <span>Study    </span></h2>
                    </div>
                    <div className="current-trends-path-card-wrapper">
                        {
                            Array(6).fill("").map((_, i) => (
                                <CaseStudyCard
                                    key={`trend-card-${i + 1}`}
                                    tag={"FX BROKER"}
                                    title={"Complete HR Infrastructure Setup"}
                                    subTitle="Challenge"
                                    para={"Rapidly growing broker lacked structured HR systems, recruitment processes and internal policies."}
                                    para2="Reduced hiring cycle by 40% and improved internal operational efficiency."
                                    btnText={"View More"}
                                    btnClick={() => { }}
                                />
                            ))
                        }
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="next-hire-view-btn" onClick={handleView}>View More <GoldenArrowIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
