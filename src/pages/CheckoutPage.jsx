import React from "react";
import SimpleLayout from "../components/layouts/SimpleLayout";
import { useSelector } from "react-redux";
import logo from "../assets/delisome-logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate();

  const formCheckoutValue = useSelector(
    (state) => state.formCheckout.formCheckoutValue
  );

  return (
    <>
      <SimpleLayout text={"Checkout"}>
        <div className="w-full h-full px-6 py-8">
          <div className="mx-auto px-2 py-2 bg-white w-full h-full overflow-scroll text-black rounded-xl font-semibold flex flex-col justify-center">
            <div className="w-full h-full pt-6">
              <img
                alt="logo"
                src={logo}
                className="mx-auto w-[90px] h-[90px]"
              />
              <h2 className="pt-2 text-center text-2xl font-bold">
                Order Summary
              </h2>
              <div className="mt-4 px-6 border-black">
                <div className="flex justify-between">
                  <p>Nama</p>
                  <p className="text-end">John Sung</p>
                </div>
                <div className="flex justify-between">
                  <p>Email</p>
                  <p className="text-end">johnsungjs@gmail.com</p>
                </div>
                <div className="flex justify-between">
                  <p>ID Game</p>
                  <p className="text-end">{formCheckoutValue.idGame || ""}</p>
                </div>
                <div className="flex justify-between">
                  <p>Nama Item</p>
                  <p className="text-end">
                    {formCheckoutValue.itemBuy.type || ""}
                  </p>
                </div>
              </div>
              <div className="mt-4 border-2 border-dashed bg-abuMuda bg-opacity-20 mx-2 px-4 py-4 border-black rounded-xl">
                <div className="flex justify-between">
                  <p>Metode Pembayaran</p>
                  <p className="text-end">
                    {formCheckoutValue.payment.method || ""} -{" "}
                    {formCheckoutValue.payment.channel || ""}
                  </p>
                </div>
                <div className="my-4 w-full border-[1px] border-gray-400" />
                <div className="flex justify-between">
                  <p>{formCheckoutValue.itemBuy.type || ""}</p>
                  <p className="text-end">
                    Rp.{formCheckoutValue.itemBuy.nominal.toString() || ""}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Biaya Admin</p>
                  <p className="text-end">Rp.2000</p>
                </div>
                <div className="my-4 w-full border-[1px] border-gray-400" />
                <div className="flex justify-between">
                  <p>Total Pembayaran</p>
                  <p className="text-end">Rp.2000</p>
                </div>
              </div>
              <div className="w-full px-4 pt-6 pb-6">
                <button
                  className="block w-full px-2 py-2 bg-tertiary text-white rounded-xl"
                  onClick={() => navigate("/checkout-status")}
                >
                  BAYAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}
