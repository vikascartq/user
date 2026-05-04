import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";
export default function WorkWith() {
    return (
        <div className="section-base-bg">
            <SectionFrame
                type={"default"}
                imgNode={
                    <Image src={"/work-with.png"} alt="built" className="work-with-img" width={400} height={400} />
                }
                contentNode={
                    <>
                        <div className="section-content-title-wrapper">
                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                            <h2 className="section-content-title">Who we <span>work with</span></h2>
                        </div>
                        <p className="section-content-para">We support businesses across talent acquisition, hiring strategy, workforce planning, people operations, organisational structure, leadership support, performance, and day-to-day people challenges. </p>
                        <p className="section-content-para">The work is not limited to filling vacancies or offering generic HR advice. It is focused on building the kind of people infrastructure that helps businesses scale with more confidence, stronger decision-making, and less operational friction.</p>
                    </>
                }
            />
        </div>
    )
}
