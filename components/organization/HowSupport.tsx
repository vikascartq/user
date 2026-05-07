import Image from "next/image";
export default function HowSupport() {
    return (
        <div className="section-base-bg">
            <div className="section-frame">
                <div className="how-support-path-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title">How ReqKing supports <span>businesses   </span></h2>
                    </div>
                    <div>
                        <p className="how-support-path-para">Support can be provided as project-based consultancy, retained advisory, or ongoing strategic partnership depending on the stage, pressure points, and growth plans of the business.</p>
                    </div>
                    <div className="how-support-path-card-wrapper">

                    </div>
                </div>
            </div>
        </div>
    )
}
