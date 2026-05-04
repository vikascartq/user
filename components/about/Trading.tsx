import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";
export default function Trading() {
    return (
        <div className="section-base-bg">
            <SectionFrame
                type={"reverse"}
                imgNode={
                    <Image src={"/about/trading.png"} alt="built" className="built-img" width={400} height={400} />
                }
                contentNode={
                    <>
                        <div className="section-content-title-wrapper">
                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                            <div>
                                <h2 className="section-content-title">Trading focused, <span>commercially</span></h2>
                                <h2 className="section-content-title"> <span> aware</span></h2>
                            </div>
                        </div>
                        <p className="section-content-para">ReqKing’s strongest market understanding sits within Multi-Asset Trading, Fintech, and Financial Services environments, while also drawing from broader exposure across Technology, iGaming, AI, Product, Data, Cyber Security, Cloud, and Operational Support functions.  </p>
                        <p className="section-content-para">This allows the work to stay industry-relevant while still being flexible enough to support modern businesses with varied commercial and technical hiring needs.</p>
                    </>
                }
            />
        </div>
    )
}
