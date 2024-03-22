import { Diamond, Wallet } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ModalPaymentMethod from "../components/modal/ModalPaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import {
  setIdGame,
  setServer,
  setWhatsAppNumber,
  setPromoCode,
} from "../services/redux/features/form/formCheckoutSlice";
import ModalItemBuy from "../components/modal/ModalItemBuy";
import { dummyItemBuy2 } from "../services/dummy/data-dummy/dataDummy";
import SimpleLayout from "../components/layouts/SimpleLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { saveHistoryToLocalStorage } from "../services/universal-functions/universalFunctions";
import TutorialTopup from "../components/TutorialTopup";

export default function DetailItemPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    saveHistoryToLocalStorage(location.state || {});
  }, [location.state]);

  const formCheckoutValue = useSelector(
    (state) => state.formCheckout.formCheckoutValue
  );

  const [showModal, setShowModal] = useState({
    itemBuy: false,
    paymentMethod: false,
  });

  const setShowModalItemBuy = (isShow) => {
    setShowModal((prev) => ({
      ...prev,
      itemBuy: isShow,
    }));
  };

  const setShowModalPaymentMethod = (isShow) => {
    setShowModal((prev) => ({
      ...prev,
      paymentMethod: isShow,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <>
      {/* NAVIGATION STARTS */}
      <SimpleLayout
        text={location.state.name || "No Name"}
        textColor={"unguMuda"}
      >
        <img
          alt={location.state.name || "No Name"}
          src={location.state.image || ""}
          className="absolute w-full max-w-4xl h-[220px] top-6 -z-10 opacity-30 object-cover"
        />
        {/* FORM STARTS */}
        <div className="pt-48">
          <TutorialTopup />
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
              <p className="pl-2 font-bold">Pilih Item Yang Ingin Dibeli</p>
            </div>
            <div className="flex pt-4 gap-1">
              <div
                className="w-full flex px-2 items-center border border-white rounded-lg"
                onClick={() => setShowModalItemBuy(true)}
              >
                <Diamond />
                <p className="w-auto px-2 py-2 bg-transparent outline-none opacity-70">
                  {formCheckoutValue.itemBuy.type}
                </p>
                <p className="ml-auto">
                  Rp.{formCheckoutValue.itemBuy.nominal}
                </p>
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
                {/* UNCOMMENT LATER */}
                {/* <p className="ml-auto">Rp.0</p> */}
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
                placeholder="soon will be added"
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
      </SimpleLayout>

      {/* FORM ENDS */}

      {showModal.paymentMethod && (
        <ModalPaymentMethod setIsOpen={setShowModalPaymentMethod} />
      )}
      {showModal.itemBuy && (
        <ModalItemBuy
          setIsOpen={setShowModalItemBuy}
          parentData={dummyItemBuy2}
        />
      )}
    </>
  );
}
