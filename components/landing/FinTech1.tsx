import Image from "next/image";

export default function FinTech() {
    return (
        <div className="section-base-bg">
            <div className="section-frame">
                <div className="why-choose-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title">Built for High-Growth <span>Fintech Ecosystems</span></h2>
                    </div>
                    <div>
                        <p className="why-choose-para">We enable fast-growing fintech companies with structured hiring, reliable talent access, and scalable workforce solutions designed to support long-term expansion.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
