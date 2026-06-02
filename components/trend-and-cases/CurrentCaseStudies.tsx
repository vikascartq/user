import useCaseStudy from "@/hooks/useCaseStudy";
import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";
import CaseStudyCard from "@/ui/case-study-card/CaseStudyCard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {sliceCharacters} from "@/utils/utils";

export default function CurrentCaseStudies() {
      const { caseStudyList } = useCaseStudy();
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
                            caseStudyList.slice(0, 6).map((caseStudy, i) => (
                                <CaseStudyCard
                                    key={caseStudy._id}
                                    tag={caseStudy.title}
                                    title={sliceCharacters(caseStudy.subHeading, 35)}
                                    subTitle="Challenge"
                                    para={sliceCharacters(caseStudy.challenge, 110,)}
                                    para2={sliceCharacters(caseStudy.description, 80)}
                                    btnText={"View More"}
                                    btnClick={() => navigate.push(`/case-studies/${caseStudy._id}`)}
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
