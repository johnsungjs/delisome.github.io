import React from "react";
import SimpleLayout from "../components/layouts/SimpleLayout";
import logo from "../assets/delisome-logo.jpeg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormCheckoutValueToInitialState } from "../services/redux/features/form/formCheckoutSlice";

export default function CheckoutPageStatus() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <SimpleLayout text={"Checkout"}>
        <div className="w-full h-full px-6 py-8">
          <div className="relative mx-auto px-2 py-2 bg-white w-full h-full overflow-scroll text-black rounded-xl font-semibold">
            <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+70px)]">
              <img
                alt="logo"
                src={logo}
                className="relative mx-auto w-[90px] h-[90px]"
              />
              <h2 className="pt-2 text-center text-2xl font-bold">
                Top Up Success
              </h2>
              <p className="text-center text-tertiary font-semibold">
                Transaksi anda telah berhasil diproses
              </p>
            </div>
            <div className="absolute left-0 bottom-2 w-full px-4 pt-6 pb-6">
              <button
                className="block w-full px-2 py-2 bg-tertiary text-white rounded-xl"
                onClick={() => {
                  dispatch(setFormCheckoutValueToInitialState());
                  navigate("/home");
                }}
              >
                SELESAI
              </button>
              <button className="block w-full pt-2 text-center">
                BELANJA LAGI
              </button>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}
