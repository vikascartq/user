"use client";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { IJobList } from "@/hooks/useJobs";
import "./vertical-slider.css";

export default function VerticalCoverflow({ list, renderSlide }: VerticalCoverFlowProps) {
    return (
        <Swiper
            direction="vertical"
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            speed={800}
            loop={true}
            initialSlide={1}
            spaceBetween={20}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.5,
                slideShadows: false,
            }}
            breakpoints={{
                0: {
                    direction: "horizontal",
                    slidesPerView: 1,
                    spaceBetween: 10,
                    coverflowEffect: {
                        depth: 80,
                        modifier: 1,
                    },
                },
                640: {
                    direction: "horizontal",
                    slidesPerView: 2,
                    spaceBetween: 15,
                    coverflowEffect: {
                        depth: 100,
                        modifier: 1.5,
                    },
                },
                1024: {
                    direction: "vertical",
                    slidesPerView: 3,
                    spaceBetween: 20,
                    coverflowEffect: {
                        depth: 150,
                        modifier: 2.5,
                    },
                },
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="myVerticalSwiper"
        >
            {list.map((item, index) => (
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