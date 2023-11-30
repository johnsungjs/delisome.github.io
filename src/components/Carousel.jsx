import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";

import { dummyCarouselData } from "../services/dummy/data-dummy/dataDummy";

const carouselData = dummyCarouselData;

export default function Carousel() {
  return (
    <>
      {/* SECTION CAROUSEL START*/}
      <div className="pt-2 pb-8 px-0">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.3}
          coverflowEffect={{
            rotate: 0,
            stretch: -15,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
        >
          {carouselData.map((data, index) => (
            <SwiperSlide key={index} className="rounded-2xl">
              <div className="carousel">
                <img width={'100%'} src={data.image} alt="yes" className="rounded-2xl object-cover mx-auto max-h-[140px]" />
                <div className="absolute top-24 left-10">
                  <p className="text-red-300">Action</p>
                  <p className="text-white text-xl font-bold">Mobile Legends</p>
                </div>
                <p className="px-6 pt-4 pb-4 text-xs">{data.info}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* SECTION CAROUSEL ENDS*/}
    </>
  );
}
