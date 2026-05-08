"use client";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
export default function CoverflowSlider({ list, renderSlide }: CoverflowSliderProps) {
    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150, // depth effect (important)
                modifier: 2.5, // intensity
                slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
        >
            {list.map((item, index) => (
                <SwiperSlide key={index}>
                    {renderSlide(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

interface CoverflowSliderProps {
    list: {
        title: string;
        description: string;
        tags: string[];
    }[];
    renderSlide: (item: { title: string; description: string; tags: string[] }) => React.ReactNode;
}