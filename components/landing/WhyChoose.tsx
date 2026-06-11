import CardIcon1 from "@/svg/why-choose/CardIcon1";
import CardIcon2 from "@/svg/why-choose/CardIcon2";
import CardIcon3 from "@/svg/why-choose/CardIcon3";
import CardIcon4 from "@/svg/why-choose/CardIcon4";
import CardIcon5 from "@/svg/why-choose/CardIcon5";
import CardIcon6 from "@/svg/why-choose/CardIcon6";
import CardLineIcon from "@/svg/why-choose/CardLineIcon";
import Image from "next/image";

export default function WhyChoose() {
    return (
        <div className="section-base-bg">
            <div className="section-frame">
                <div className="why-choose-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title">
                            Why businesses choose
                            <br className="md:hidden" />
                            <span> ReqKing</span>
                        </h2>
                    </div>
                    <div className="flex flex-col sm:items-start md:items-center  gap-2">
                        <p className=" ">
                            The goal is simple
                        </p>

                        <p className=" ">
                            Make the people side of the business more scalable, more stable, and more effective.
                        </p>
                    </div>
                    <div className="why-choose-card-container">
                        {
                            cardList.map((item, i) => (
                                <div className="why-choose-card" key={`choose-card-${i + 1}`}>
                                    <item.icon />
                                    <div className="why-choose-card-title">{item?.title}</div>
                                    <div className="why-choose-card-desc">{item?.desc}</div>
                                    <CardLineIcon />
                                </div>
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
        icon: CardIcon1,
        title: "Aligned Leadership",
        desc: "Closer alignment with your business goals"
    },
    {
        icon: CardIcon2,
        title: "Clear Ownership",
        desc: "Defined roles and accountability"
    },
    {
        icon: CardIcon3,
        title: "Better Decisions",
        desc: "Data-driven hiring strategies"
    },
    {
        icon: CardIcon4,
        title: "Strong Structure",
        desc: "Robust people infrastructure"
    },
    {
        icon: CardIcon5,
        title: "Fast Execution",
        desc: "Speed without compromising quality"
    },
    {
        icon: CardIcon6,
        title: "Scalable Support",
        desc: "Grows with your business"
    }
]