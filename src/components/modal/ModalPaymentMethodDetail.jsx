import { ArrowBack, Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  resetPayment,
  setPaymentChannel,
} from "../../services/redux/features/form/formCheckoutSlice";

// modified from source: https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
// to make modal on top of everything, set z-[999] and z-[999]
// to make modal on top of existing layout, set z-0 and z-0

export default function ModalPaymentMethodDetail({
  setIsOpen,
  setShowDetailModal,
  childrenData,
}) {
  const dispatch = useDispatch();
  return (
    <>
      {/* DARK BG STARTS */}
      <div className="fixed z-[9999] bg-black opacity-0 w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* DARK BG ENDS */}

      {/* MAIN MODAL STARTS */}
      <div className="fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
        <div
          className={`w-[90vw] h-auto bg-white rounded-2xl shadow-xl overflow-hidden`}
        >
          <div className="flex items-center justify-between px-4 py-4 bg-white overflow-hidden rounded-t-2xl font-semibold border-b-2">
            <button
              className="cursor-pointer text-black"
              onClick={() => setShowDetailModal(false)}
            >
              <ArrowBack />
            </button>
            <h1 className="text-lg text-start">{childrenData.name}</h1>
            <button
              className="cursor-pointer text-black"
              onClick={() => {
                setIsOpen(false);
                dispatch(resetPayment());
              }}
            >
              <Close />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-auto">
            {childrenData.children.map((data, index) => (
              <div
                key={index}
                className="flex items-center border-b-2 px-4 py-2 text-base text-black font-semibold"
                onClick={() => {
                  dispatch(setPaymentChannel(data.name));
                  setIsOpen(false);
                }}
              >
                <img
                  alt={data.name}
                  src={data.image}
                  className="w-[40px] h-[40px] rounded-lg object-cover"
                />
                <p className="pl-2">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* MAIN MODAL ENDS */}
    </>
  );
}
