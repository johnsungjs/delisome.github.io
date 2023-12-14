import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { Virtual } from "swiper/modules";

import { dummyListGames } from "../services/dummy/data-dummy/dataDummy";

const gamesData = dummyListGames;

export default function GamesSlider() {
  return (
    <>
      {/* SECTION GAMES SLIDER START*/}
      <div className="pt-2 pb-2 px-0">
        <Swiper
          modules={[Virtual]}
          grabCursor={true}
          slidesPerView={2.5}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
        >
          {gamesData.map((data, index) => (
            <SwiperSlide key={index} className="rounded-2xl">
              <div className="w-full h-40 px-1">
                <img
                  src={data.image}
                  alt="yes"
                  className="w-full h-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-md font-bold">{data.name}</p>
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
