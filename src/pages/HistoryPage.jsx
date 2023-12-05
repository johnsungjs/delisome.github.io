import ListItemsWithDate from "../components/ListItemsWithDate";
import { dummyHistory } from "../services/dummy/data-dummy/dataDummy";
import noTransaction from "../assets/no-transaction.svg";

const histories = dummyHistory;

export default function HistoryPage() {
  return (
    <>
      <div className="pt-2 pb-8 font-bold text-xl text-center">
        Your History
      </div>
      <div className="pt-6 px-4 bg-putih h-[calc(100vh-200px)] rounded-t-[30px] overflow-scroll">
        {histories.length > 0 ? (
          <ListItemsWithDate items={histories} />
        ) : (
          <div className="pt-14 text-black text-center">
            <img alt="no-transaction" className="mx-auto" src={noTransaction} />
            <p className="font-bold text-2xl">Belum Ada Transaksi</p>
            <p className="pt-2">
              Lakukanlah pembelian untuk melihat riwayat transaksi kamu
            </p>
          </div>
        )}
      </div>
    </>
  );
}
