"use client";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { IJobList } from "@/hooks/useJobs";
import "./vertical-slider.css";


export default function VerticalCoverflow({ list, renderSlide }: VerticalCoverFlowProps) {
    const loopedJobs =
        list.length < 6
            ? [...list, ...list, ...list]
            : list;
    return (
        <Swiper
            direction="vertical"
            effect="coverflow"
            centeredSlides
            slidesPerView={3}
            loop
            grabCursor={false}
            allowTouchMove={false}
            speed={7000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            spaceBetween={20}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2,
                slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="myVerticalSwiper"
            breakpoints={{
                0: {
                    effect: "slide",
                    direction: "horizontal",
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 16,


                },
                768: {
                    effect: "slide",
                    direction: "horizontal",
                    slidesPerView: 1,
                    centeredSlides: false,
                    spaceBetween: 24,
                },
                1024: {
                    effect: "coverflow",
                    direction: "vertical",
                    slidesPerView: 3,
                    centeredSlides: true,
                },
            }}
        >
            {loopedJobs.map((item, index) => (
                <SwiperSlide key={index}>
                    {renderSlide(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

interface VerticalCoverFlowProps {
    list: IJobList[];
    renderSlide: (item: IJobList) => React.ReactNode;
}