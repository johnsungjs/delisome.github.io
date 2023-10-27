import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../services/redux/features/counter/counterSlice";

export default function VoucherSection() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>this is voucher</div>
      <div>
        <p>belajar redux</p>
        <button
          className="px-4 py-2 rounded-xl bg-purple-600 text-white"
          onClick={() => dispatch(increment())}
        >
          plus
        </button>
        <div className="text-2xl">{count}</div>
        <button
          className="px-4 py-2 rounded-xl bg-purple-600 text-white"
          onClick={() => dispatch(decrement())}
        >
          minus
        </button>
      </div>
    </>
  );
}
