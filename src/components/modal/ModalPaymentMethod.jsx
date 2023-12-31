import { ArrowRight, Close } from "@mui/icons-material";
import { dummyPaymentMethod } from "../../services/dummy/data-dummy/dataDummy";
import { useState } from "react";
import ModalPaymentMethodDetail from "./ModalPaymentMethodDetail";
import { useDispatch } from "react-redux";
import {
  setPaymentMethod,
  setPaymentChannel,
  resetPayment,
} from "../../services/redux/features/form/formCheckoutSlice";

// modified from source: https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
// to make modal on top of everything, set z-[999] and z-[999]
// to make modal on top of existing layout, set z-0 and z-0

export default function ModalPaymentMethod({ setIsOpen }) {
  const dispatch = useDispatch();

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [childrenData, setChildrenData] = useState([]);

  return (
    <>
      {/* DARK BG STARTS */}
      <div
        className="fixed z-[9999] bg-black opacity-50 w-screen max-w-4xl h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={() => {
          // setIsOpen(false);
          // setShowDetailModal(!showDetailModal);
        }}
      />
      {/* DARK BG ENDS */}

      {/* MAIN MODAL STARTS */}
      <div className="fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
        <div
          className={`w-[90vw] max-w-4xl h-auto bg-white rounded-2xl shadow-xl overflow-hidden ${
            showDetailModal ? "hidden" : ""
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 bg-white overflow-hidden rounded-t-2xl font-semibold border-b-2">
            <h1 className="text-lg text-start">Pilih Metode Bayar</h1>
            <button
              className="cursor-pointer text-black"
              onClick={() => {
                dispatch(resetPayment());
                setIsOpen(false);
              }}
            >
              <Close />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-auto">
            {dummyPaymentMethod.map((data, index) => {
              if (data.children && data.children.length > 0) {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b-2 px-4 py-4 text-base text-black font-semibold"
                    onClick={() => {
                      dispatch(setPaymentMethod(data.name));
                      setChildrenData(data);
                      setShowDetailModal(true);
                    }}
                  >
                    <p className="pl-2">{data.name}</p>
                    <ArrowRight />
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="flex items-center border-b-2 px-4 py-2 text-base text-black font-semibold"
                    onClick={() => {
                      dispatch(setPaymentMethod("E-Wallet"));
                      dispatch(setPaymentChannel(data.name));
                      setIsOpen(false);
                    }}
                  >
                    <img
                      alt={data.name}
                      src={`assets/logo-bank/${data.image}.png`}
                      className="w-[40px] h-[40px] rounded-lg object-contain"
                    />
                    <p className="pl-2">{data.name}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      {/* MAIN MODAL ENDS */}
      {showDetailModal && (
        <ModalPaymentMethodDetail
          setIsOpen={setIsOpen}
          setShowDetailModal={setShowDetailModal}
          childrenData={childrenData}
        />
      )}
    </>
  );
}
