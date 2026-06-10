import useTestimonial from "@/hooks/useTestimonial";
import QuoteIcon from "@/svg/QuoteIcon";
import Image from "next/image";
export default function Testimonials() {
    const { testimonialList } = useTestimonial()
    return (
        <div className="section-base-bg">
            <div className="section-frame">
                <div className="why-choose-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title"><span>Testimonials</span></h2>
                    </div>
                    <div>
                        <p className="why-choose-para">Selected examples of HR transformation, talent strategy and performance frameworks implemented for fintech and financial markets businesses.</p>
                    </div>
                    <div className="testimonials-slider">
                        <div className="testimonials-track">
                            {[...testimonialList].map((testimonial, index) => (
                                <TestimonialCard
                                    key={`${testimonial.name}-${index}`}
                                    title={testimonial.role}
                                    company={testimonial.name}
                                    testimonial={testimonial.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function TestimonialCard({ title, company, testimonial }: { title: string, company: string, testimonial: string }) {
    return (
        <div className="testimonial-card">
            <QuoteIcon />
            <p className="testimonial-para">{testimonial}</p>
            <div className="testimonial-card-footer">
                <Image src={"/user.png"} alt="quote" className="quote-img" width={50} height={50} />
                <div className="testimonial-card-footer-text">
                    <p className="testimonial-name">{title}</p>
                    <p className="testimonial-title">{company}</p>
                </div>
            </div>
        </div>
    )
}


// const testimonialsData = [
//     {
//         title: "Hiring Manager",
//         company: "Stonebridge Recruitment",
//         testimonial: "Reqking understands hiring needs with great clarity and consistently delivers candidates who align with both skill requirements and company culture. Their structured process and quick turnaround have made our recruitment more efficient and dependable."
//     },
//     {
//         title: "Performance Marketing Specialist",
//         company: "Forex Industry",
//         testimonial: "Getting hired through Reqking was a great experience. The process was professional, efficient, and transparent, and I felt supported at every stage, which made a lasting positive impression."
//     },
//     {
//         title: "Senior QA Engineer",
//         company: "TestSphere Ltd",
//         testimonial: "Reqking combines strong industry expertise with clear communication. Their ability to understand both company needs and candidate expectations ensures the right fit every time."
//     },
//     {
//         title: "Founder",
//         company: "Fintech Startup",
//         testimonial: "Reqking played a key role in helping us scale our team during a critical growth phase. Their ability to identify quality talent quickly, while maintaining transparency and efficiency, makes them stand out as a strong hiring partner."
//     },
//     {
//         title: "HR Head  ",
//         company: "Global Trading Company",
//         testimonial: "Working with Reqking has significantly improved our hiring process. Their strong screening approach and industry understanding ensure we only connect with highly relevant candidates, saving time and improving overall hiring outcomes."
//     }
// ]