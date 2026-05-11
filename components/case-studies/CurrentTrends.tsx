import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CurrentTrends() {
    const navigate = useRouter();
    const handleView = () => {
        navigate.push("/")
    }
    return <div className="section-base-bg current-trends-section-base">
        <div className="section-frame">
            <div className="current-trends-path-container">
                <div className="section-content-title-wrapper justify-center">
                    <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                    <h2 className="section-content-title">Current Market <span>Trends   </span></h2>
                </div>
                <div className="current-trends-path-card-wrapper">

                </div>
                <div className="flex justify-center">
                    <button type="button" className="next-hire-view-btn" onClick={handleView}>View All <GoldenArrowIcon /></button>
                </div>
            </div>
        </div>
    </div>
}
