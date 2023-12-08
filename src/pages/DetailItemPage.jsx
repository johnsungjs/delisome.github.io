import { Diamond, Wallet } from "@mui/icons-material";
import Header from "../components/Header";
import { useState } from "react";
import ModalPaymentMethod from "../components/modal/ModalPaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import {
  setIdGame,
  setServer,
  setWhatsAppNumber,
  setPromoCode,
} from "../services/redux/features/form/formCheckoutSlice";

export default function DetailItemPage() {
  const dispatch = useDispatch();
  const formCheckoutValue = useSelector(
    (state) => state.formCheckout.formCheckoutValue
  );

  console.log("formCheckoutValue", formCheckoutValue);

  const [showModal, setShowModal] = useState({
    items: false,
    paymentMethod: false,
  });

  // const setShowModalItems = (isShow) => {
  //   setShowModal((prev) => ({
  //     ...prev,
  //     items: isShow,
  //   }));
  // };
  const setShowModalPaymentMethod = (isShow) => {
    setShowModal((prev) => ({
      ...prev,
      paymentMethod: isShow,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ini data form", formCheckoutValue);
  };

  return (
    <>
      {/* NAVIGATION STARTS */}
      <Header text={"Mobile Legends"} textColor={"unguMuda"} />
      <img
        alt="game"
        src="https://gumlet.assettype.com/afkgaming%2Fimport%2Fmedia%2Fimages%2F64950-Mobile%20Legends%20Moonton.png?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true"
        className="absolute top-6 -z-10 opacity-30"
      />
      {/* FORM STARTS */}
      <div className="pt-36">
        <form className="px-6 pb-10" onSubmit={handleSubmit}>
          {/* SECTION FIRST STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              1
            </div>
            <p className="pl-2 font-bold">Masukkan ID dan Server</p>
          </div>
          <div className="flex pt-4 gap-1">
            <input
              type="text"
              name="idGame"
              placeholder="ID Game.."
              className="w-full px-2 py-2 bg-transparent border border-white rounded-lg outline-none"
              value={formCheckoutValue.idGame}
              onChange={(e) => dispatch(setIdGame(e.target.value))}
            />
            <input
              type="text"
              name="server"
              placeholder="Server.."
              className="w-full px-2 py-2 bg-transparent border border-white rounded-lg outline-none"
              value={formCheckoutValue.server}
              onChange={(e) => dispatch(setServer(e.target.value))}
            />
          </div>
          {/* SECTION FIRST ENDS */}
          {/* SECTION SECOND STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              2
            </div>
            <p className="pl-2 font-bold">Pilih Nominal Diamond</p>
          </div>
          <div className="flex pt-4 gap-1">
            <div className="w-full flex px-2 items-center border border-white rounded-lg">
              <Diamond />
              <input
                type="number"
                name="diamond"
                placeholder="... Diamond"
                className="w-auto px-2 py-2 bg-transparent outline-none"
              />
              <p className="ml-auto">Rp.0</p>
            </div>
          </div>
          {/* SECTION SECOND ENDS */}
          {/* SECTION THIRD STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              3
            </div>
            <p className="pl-2 font-bold">Masukkan Nomor WhatsApp</p>
          </div>
          <div className="flex pt-4 gap-1">
            <input
              type="number"
              name="numberWa"
              placeholder="nanti otomatis keisi ye"
              className="w-full px-2 py-2 bg-transparent border border-white rounded-lg outline-none"
              value={formCheckoutValue.whatsAppNumber}
              onChange={(e) => dispatch(setWhatsAppNumber(e.target.value))}
            />
          </div>
          {/* SECTION THIRD ENDS */}
          {/* SECTION FOURTH STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              4
            </div>
            <p className="pl-2 font-bold">Metode Pembayaran</p>
          </div>
          <div className="flex pt-4 gap-1">
            <div
              className="w-full flex px-2 items-center border border-white rounded-lg cursor-pointer"
              onClick={() => setShowModalPaymentMethod(true)}
            >
              <Wallet />
              <p className="w-auto px-2 py-2 bg-transparent outline-none opacity-70">
                {formCheckoutValue.payment.method} -{" "}
                {formCheckoutValue.payment.channel}
              </p>
              <p className="ml-auto">Rp.0</p>
            </div>
          </div>
          {/* SECTION FOURTH ENDS */}
          {/* SECTION FIFTH STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              5
            </div>
            <p className="pl-2 font-bold">Kode Promo</p>
          </div>
          <div className="flex pt-4 gap-1">
            <input
              type="text"
              name="promoCode"
              placeholder="ini mungkin belum ada dulu"
              className="w-full px-2 py-2 bg-transparent border border-white rounded-lg outline-none"
              value={formCheckoutValue.promoCode}
              onChange={(e) => dispatch(setPromoCode(e.target.value))}
            />
          </div>
          {/* SECTION FIFTH ENDS */}
          <button
            type="submit"
            className="mt-8 w-full py-2 bg-tertiary text-white font-bold rounded-lg disabled:bg-abuMuda"
          >
            CHECKOUT
          </button>
        </form>
      </div>
      {/* FORM ENDS */}

      {showModal.paymentMethod && (
        <ModalPaymentMethod setIsOpen={setShowModalPaymentMethod} />
      )}
    </>
  );
}
