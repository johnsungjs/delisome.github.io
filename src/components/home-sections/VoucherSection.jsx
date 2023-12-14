// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrement,
//   increment,
// } from "../../services/redux/features/counter/counterSlice";
import GridItems from "../GridItems";
import { dummyListVouchers } from "../../services/dummy/data-dummy/dataDummy";

const vouchers = dummyListVouchers;

export default function VoucherSection() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <>
      <div className="pl-4 pt-2 pb-2 font-bold text-xl">Hot Deals</div>
      <GridItems items={vouchers} />
    </>
  );
}
