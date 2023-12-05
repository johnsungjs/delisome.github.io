// import { useSelector } from "react-redux";
import GridItems from "../GridItems";
import { dummyListGames } from "../../services/dummy/data-dummy/dataDummy";

const jokis = dummyListGames;

export default function JokiSection() {
  // const searchValue = useSelector((state) => state.search.value);

  return (
    <>
      <div className="pl-4 pt-2 pb-2 font-bold text-xl">Top Joki</div>
      <GridItems items={jokis} />
    </>
  );
}
