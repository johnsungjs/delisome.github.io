import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function ArticlePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container max-w-4xl">
        <div className="w-full max-w-4xl border-2 fixed top-0 z-0">
          <IconButton className={`!text-black`} onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
        </div>
        <div className="absolute -z-10 w-full h-full max-w-4xl">
          <img
            alt={"test pic"}
            src={"https://iili.io/JuBODqN.png"}
            className="border-2 border-red-500 w-full h-1/3 max-h-[260px] top-0 -z-10 opacity-30 object-cover"
          />
          <div className="p-4 w-full min-h-full bg-white rounded-t-[30px] text-black">
            {/* TAG STARTS HERE */}
            <div className="flex gap-2">
              <div className="bg-gray-400 bg-opacity-40 px-4 py-1 rounded-full font-semibold text-sm">
                Mobile Games
              </div>
              <div className="bg-gray-400 bg-opacity-40 px-4 py-1 rounded-full font-semibold text-sm">
                Mobile Games
              </div>
            </div>
            {/* TAG ENDS HERE */}
            {/* BIG TITLE STARTS HERE */}
            <h1 className="pt-2 text-2xl font-bold">
              Karakter Dr. Ratio Honkai Star Rail Gratis dari MiHoyo
            </h1>
            {/* BIG TITLE ENDS HERE */}
            {/* AUTHOR INFO STARTS HERE */}
            <div className="pt-2 pb-2 flex gap-2 items-center text-sm">
              <Avatar />
              <p>John Sung</p>
              <p>-</p>
              <p>16 Desember 2023</p>
            </div>
            {/* AUTHOR INFO ENDS HERE */}
            {/* SETINNERDANGEROUSHTML STARTS HERE */}
            <div className="custom-article">
              <p>
                Karakter SSR Gratis Honkai Star Rail – Developer miHoYo atau
                HoYoverse telah melangsungkan acara livestream rutin mereka
                untuk game Honkai Star Rail. Sama seperti biasanya, livestream
                tersebut membagikan info seputar update terbaru versi 1.6.
                Selain itu ada juga info kalau Player bisa mendapatkan karakter
                SSR secara gratis, yaitu Dr. Ratio. Lho, serius nih!?
              </p>
              <img alt={"test pic2"} src={"https://iili.io/JuBODqN.png"} />
              <p className="font-bold">Ucapan Terima Kasih dari miHoYo</p>
              <p>
                Berdasarkan informasi yang didapatkan, pemberian karakter SSR
                Gratis Honkai Star Rail ini dalam rangka merayakan kemenangan
                atas penghargaan yang diraih oleh game tersebut tahun ini.
                Beberapa penghargaan Honkai Star Rail tersebut mulai dari Best
                Game Mobile - The Game Awards 2023, iPhone Game Of The Year
                2023, dan Best of 2023 Best Game - Google Player.
              </p>
            </div>
            {/* SETINNERDANGEROUSHTML ENDS HERE */}
            {/* SHARE STARTS HERE */}
            <div className="flex pt-4 text-white gap-2">
              <button className="w-full py-1 bg-[#3B5795] rounded-lg">
                Share
              </button>
              <button className="w-full py-1 bg-[#000000] rounded-lg">
                Share
              </button>
              <button className="w-full py-1 bg-[#60D669] rounded-lg">
                Share
              </button>
              <button className="w-full py-1 bg-[#F9514A] rounded-lg">
                Share
              </button>
            </div>
            {/* SHARE ENDS HERE */}
            {/* ARTIKEL TERKAIT STARTS HERE */}
            <div className="pt-4">
              <h2 className="pb-2 text-lg font-semibold">Artikel Lainnya ...</h2>
              <div className="flex pb-2 items-center gap-2">
                <img
                  alt={"test pic3"}
                  src={"https://iili.io/JuBODqN.png"}
                  className="w-1/3 min-h-[84px] rounded-xl"
                />
                <div className="w-2/3">
                  <p className="font-bold text-sm">10 Game Trending Saat Ini yang Populer Di Steam</p>
                  <p className="text-xs text-gray-500">2 hari yang lalu</p>
                </div>
              </div>
              <div className="flex pb-2 items-center gap-2">
                <img
                  alt={"test pic3"}
                  src={"https://iili.io/JuBODqN.png"}
                  className="w-1/3 min-h-[84px] rounded-xl"
                />
                <div className="w-2/3">
                  <p className="font-bold text-sm">10 Game Trending Saat Ini yang Populer Di Steam</p>
                  <p className="text-xs text-gray-500">2 hari yang lalu</p>
                </div>
              </div>
              <div className="flex pb-2 items-center gap-2">
                <img
                  alt={"test pic3"}
                  src={"https://iili.io/JuBODqN.png"}
                  className="w-1/3 min-h-[84px] rounded-xl"
                />
                <div className="w-2/3">
                  <p className="font-bold text-sm">10 Game Trending Saat Ini yang Populer Di Steam</p>
                  <p className="text-xs text-gray-500">2 hari yang lalu</p>
                </div>
              </div>
            </div>
            {/* ARTIKEL TERKAIT ENDS HERE */}
          </div>
        </div>
      </div>
    </>
  );
}
