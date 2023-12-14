import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { Virtual } from "swiper/modules";
import { useNavigate } from "react-router-dom";
// import { saveHistoryToLocalStorage } from "../services/universal-functions/universalFunctions";

export default function GamesSlider() {
  const navigate = useNavigate();
  const gamesData = JSON.parse(localStorage.getItem("recentViewed") || "[]");
  if (gamesData && gamesData.length > 0) {
    return (
      <>
        <div className="px-4 pb-2 flex justify-between items-center">
          <p className="font-bold text-lg">Recently Viewed</p>
          <button
            className="px-4 py-2 bg-transparent border border-tertiary text-sm text-purple-200 rounded-xl"
            onClick={() => navigate("/recent-viewed")}
          >
            See More
          </button>
        </div>
        <div className="pt-2 pb-2 px-0">
          <Swiper
            modules={[Virtual]}
            grabCursor={true}
            slidesPerView={2.5}
            spaceBetween={10}
            centeredSlides={false}
            loop={false}
          >
            {gamesData.map((data, index) => (
              <SwiperSlide key={index} className="rounded-2xl">
                <div
                  className="w-full h-40 px-1"
                  onClick={() => navigate("/detail-item", { state: data })}
                >
                  <img
                    src={data.image}
                    alt="yes"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-md font-bold">{data.name}</p>
                    {data.discount && (
                      <button className="bg-tertiary px-2 py-1 border border-tertiary text-sm text-white rounded-xl">
                        - {data.discount}%
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
