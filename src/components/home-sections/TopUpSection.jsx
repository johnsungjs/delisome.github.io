import { dummyListGames } from "../../services/dummy/data-dummy/dataDummy";
import GridItems from "../GridItems";
import VirtualWallet from "../VirtualWallet";

const games = dummyListGames;

export default function TopUpSection() {
  return (
    <>
      <VirtualWallet />
      {/* SECTION GRID GAMES START*/}
      <div className="pl-4 pt-2 pb-2 font-bold text-xl">Top Up Games</div>
      <GridItems items={games} />
      {/* SECTION GRID GAMES END*/}
    </>
  );
}
