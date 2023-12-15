import React from "react";
import SimpleLayout from "../components/layouts/SimpleLayout";
// import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/delisome-logo.jpeg";

export default function CheckoutPage() {
  // const dispatch = useDispatch();

  // const formCheckoutValue = useSelector(
  //   (state) => state.formCheckout.formCheckoutValue
  // );

  return (
    <>
      <SimpleLayout text={"Checkout"}>
        <div className="w-full h-full px-6 py-8">
          <div className="mx-auto bg-white w-full h-full overflow-scroll text-black">
            <img alt="logo" src={logo} className="mx-auto w-[90px] h-[90px]" />
            <h2 className="text-center text-2xl font-bold">Order Summary</h2>
            <div className="mt-4 mx-4 px-6 border-black">
              <div className="flex justify-between">
                <p>Nama</p>
                <p>John Sung</p>
              </div>
              <div className="flex justify-between">
                <p>Email</p>
                <p>johnsungjs@gmail.com</p>
              </div>
              <div className="flex justify-between">
                <p>ID Game</p>
                <p>ID123</p>
              </div>
              <div className="flex justify-between">
                <p>Nama Item</p>
                <p>MLBB 10 Diamond</p>
              </div>
            </div>
            <div className="mt-4 border-2 border-dashed bg-abuMuda bg-opacity-20 mx-4 px-6 py-4 border-black rounded-xl">
              <div className="flex justify-between">
                <p>Nama</p>
                <p>John Sung</p>
              </div>
              <div className="flex justify-between">
                <p>Email</p>
                <p>johnsungjs@gmail.com</p>
              </div>
              <div className="flex justify-between">
                <p>ID Game</p>
                <p>ID123</p>
              </div>
              <div className="flex justify-between">
                <p>Nama Item</p>
                <p>MLBB 10 Diamond</p>
              </div>
            </div>
            <div className="w-full px-4 pt-4">
              <button className="block w-full px-2 py-2 bg-tertiary text-white rounded-xl">
                BAYAR
              </button>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}
