import { dummyListGames } from "../../services/dummy/data-dummy/dataDummy";

const games = dummyListGames;

export default function TopUpSection() {
  return (
    <>
      <div className="pl-4 pt-2 pb-2 font-bold text-xl">Top Up Games</div>
      {/* SECTION GRID GAMES START*/}
      <div className="flex flex-wrap justify-center gap-2">
        {games.map((e, index) => (
          <div key={index} className="w-[calc((100%/3)-25px)]">
            <img
              alt={index}
              src={e.image}
              className="w-full h-[105px] rounded-2xl object-cover"
            />
            <p className="pt-1 text-sm text-center font-bold">{e.title}</p>
          </div>
        ))}
      </div>

      {/* SECTION GRID GAMES END*/}
    </>
  );
}
