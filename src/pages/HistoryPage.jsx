import ListItemsWithDate from "../components/ListItemsWithDate";
import { dummyHistory } from "../services/dummy/data-dummy/dataDummy";
import noTransaction from "../assets/no-transaction.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";

const histories = dummyHistory;

export default function HistoryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const myRef = useRef(null);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = myRef.current;
    if (scrollTop + clientHeight - scrollHeight > -1 && !isLoading) {
      setIsLoading(true);
      console.log("FETCH!");
    }
  }, [isLoading]);

  useEffect(() => {
    const curr = myRef.current;
    curr.addEventListener("scroll", handleScroll);
    return () => curr.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <>
      <div className="pt-2 pb-6 font-bold text-xl text-center">
        Your History
      </div>
      <div
        ref={myRef}
        className="pt-6 px-4 bg-putih h-[calc(100vh-190px)] rounded-t-[30px] overflow-scroll"
      >
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
        {isLoading && (
          <div className="block w-[60px] h-[60px] mx-auto mb-4">
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}
