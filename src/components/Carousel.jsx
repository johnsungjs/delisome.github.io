import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import { dummyCarouselData } from "../services/dummy/data-dummy/dataDummy";
import { useNavigate } from "react-router-dom";

const carouselData = dummyCarouselData;

export default function Carousel() {
  const navigate = useNavigate()
  return (
    <>
      {/* SECTION CAROUSEL START*/}
      <div className="pt-2 pb-2 px-0">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          slidesPerView={window.innerWidth > 690 ? 1 : 1.3}
          autoplay= {{
            delay: 3000,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -15,
            depth: window.innerWidth > 690 ? 0 : 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[Autoplay, EffectCoverflow]}
        >
          {carouselData.map((data, index) => (
            <SwiperSlide key={index} className="rounded-2xl">
              <div className="carousel"
              onClick={() => navigate("/detail-item", { state: data })}
              >
                <img
                  src={data.image}
                  alt="yes"
                  className="rounded-2xl object-cover mx-auto w-full h-[140px] sm:h-[260px]"
                />
                <div className="absolute top-24 left-10">
                  <p className="text-red-300">{data.genre.toUpperCase()}</p>
                  <p className="text-white text-xl font-bold">{data.name}</p>
                </div>
                <p className="px-6 pt-4 pb-4 text-[10px] md:text-base break-words">
                  {data.info}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* SECTION CAROUSEL ENDS*/}
    </>
  );
}
