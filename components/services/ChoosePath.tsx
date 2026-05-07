import BusinessIcon from "@/svg/services/BusinessIcon";
import JobIcon from "@/svg/services/JobIcon";
import ButtonAction from "@/ui/buttons/ButtonAction";
import Image from "next/image";

export default function ChoosePath() {
    return (
        <div className="section-base-bg">
            <div className="section-frame">
                <div className="choose-path-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title">Choose Your  <span>Path  </span></h2>
                    </div>
                    <div>
                        <p className="choose-path-para">Whether you&apos;re a business looking to optimize your talent strategy or a job seeker ready for your next opportunity, we have tailored solutions for you.</p>
                    </div>
                    <div className="choose-path-card-wrapper">
                        <ChoosePathCard
                            icon={<BusinessIcon />}
                            title={"For Businesses"}
                            desc={"Looking to scale your team, refine your HR processes, or build a high-performance culture?"}
                            btnText={"Scale My Business"}
                            btnClick={() => ""}
                        />
                        <ChoosePathCard
                            icon={<JobIcon />}
                            title={" For Job Seekers"}
                            desc={"Searching for your next leadership role or looking for career advisory in the trading and tech space?"}
                            btnText={"Find My Next Role"}
                            btnClick={() => ""}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ChoosePathCard({
    icon,
    title,
    desc,
    btnText,
    btnClick
}: ChoosePathCardProps) {
    return <div className="choose-path-card">
        {icon}
        <div className="choose-path-card-title">{title}</div>
        <p className="choose-path-card-para">{desc}</p>
        <div className="choose-path-card-divider"></div>
        <ButtonAction
            type="primary"
            text={btnText}
            onClick={btnClick}
        />
    </div>
}

interface ChoosePathCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    btnText: string;
    btnClick: () => void;
}