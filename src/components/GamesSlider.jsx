import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";

import {
  dummyListGames,
} from "../services/dummy/data-dummy/dataDummy";

const gamesData = dummyListGames;

export default function GamesSlider() {
  return (
    <>
      {/* SECTION GAMES SLIDER START*/}
      <div className="pt-2 pb-8 px-0">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2.5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 0,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
        >
          {gamesData.map((data, index) => (
            <SwiperSlide key={index} className="rounded-2xl">
              <div className="w-36 h-40 px-1">
                <img
                  src={data.image}
                  alt="yes"
                  className="w-full h-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-md font-bold">{data.title}</p>
                  <button className="bg-tertiary px-2 py-1 border border-tertiary text-sm text-white rounded-xl">
                    - {data.discount}%
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* SECTION GAMES SLIDER ENDS*/}
    </>
  );
}
