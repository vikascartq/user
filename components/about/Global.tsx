import PrimaryLocationIcon from "@/svg/PrimaryLocationIcon";
import SectionFrame from "@/ui/section/SectionFrame";
import TagUI from "@/ui/tag/TagUI";
import Image from "next/image";
export default function Global() {
    return <div className="section-base-bg">
        <SectionFrame
            type={"default"}
            imgNode={
                <Image src={"/about/new-global.png"} alt="built" className="built-img"  width={500} height={400} />
            }
            contentNode={
                <>
                    <div className="section-content-title-wrapper">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <div>
                            <h2 className="section-content-title">Global in <span>outlook</span></h2>
                        </div>
                    </div>
                    <p className="section-content-para">The ReqKing approach is international by nature.</p>
                    <p className="mb-2">Experience across :</p>
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-4 w-full">
                        <TagUI text={"Europe"} startIcon={<PrimaryLocationIcon />} />
                        <TagUI text={"LATAM"} startIcon={<PrimaryLocationIcon />} />
                        <TagUI text={"MENA"} startIcon={<PrimaryLocationIcon />} />
                        <TagUI text={"Africa"} startIcon={<PrimaryLocationIcon />} />
                        <TagUI text={"South Asia"} startIcon={<PrimaryLocationIcon />} />
                        <TagUI text={"Southeast Asia"} startIcon={<PrimaryLocationIcon />} />
                    </div>
                    <p className="section-content-para">Has shaped a practical understanding of how businesses grow across different markets, leadership cultures, and hiring conditions. That wider view helps bring more balanced, realistic support to companies managing change across regions.</p>
                </>
            }
        />
    </div>
}
