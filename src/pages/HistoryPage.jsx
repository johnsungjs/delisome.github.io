import ListItemsWithDate from "../components/ListItemsWithDate";
import { dummyHistory } from "../services/dummy/data-dummy/dataDummy";

const histories = dummyHistory;

export default function HistoryPage() {
  return (
    <>
      <div className="pt-2 pb-8 font-bold text-xl text-center">
        Your History
      </div>
      <div className="pt-6 px-4 bg-putih h-[calc(100vh-200px)] rounded-t-[30px] overflow-scroll">
        <ListItemsWithDate items={histories} />
      </div>
    </>
  );
}
