import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formCheckoutValue: {
    idGame: "",
    server: "",
    itemBuy: {
      type: "",
      nominal: 0,
      quantity: 0
    },
    whatsAppNumber: "081211899299",
    payment: {
      method: "",
      channel: "",
      nominal: 0
    },
    promoCode: "",
  }
};

export const formCheckoutSlice = createSlice({
  name: "formCheckout",
  initialState,
  reducers: {
    setIdGame: (state, action) => {
      state.formCheckoutValue.idGame = action.payload;
    },
    setServer: (state, action) => {
      state.formCheckoutValue.server = action.payload;
    },
    setWhatsAppNumber: (state, action) => {
      state.formCheckoutValue.whatsAppNumber = action.payload;
    },
    setPromoCode: (state, action) => {
      state.formCheckoutValue.promoCode = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.formCheckoutValue.payment.method = action.payload;
    },
    setPaymentChannel: (state, action) => {
      state.formCheckoutValue.payment.channel = action.payload;
    },
    setPaymentNominal: (state, action) => {
      state.formCheckoutValue.payment.nominal = action.payload;
    },
    resetPayment: (state) => {
      state.formCheckoutValue.payment.method = "";
      state.formCheckoutValue.payment.channel = "";
      state.formCheckoutValue.payment.nominal = 0;
    },
    setItemBuyType: (state, action) => {
      state.formCheckoutValue.itemBuy.type = action.payload;
    },
    setItemBuyNominal: (state, action) => {
      state.formCheckoutValue.itemBuy.nominal = action.payload;
    },
    setFormCheckoutValueToInitialState: () => {
      return initialState;
    }
  }
});

export const { setIdGame, setServer, setWhatsAppNumber, setPaymentMethod, setPaymentNominal, resetPayment, setPaymentChannel, setPromoCode, setFormCheckoutValueToInitialState } = formCheckoutSlice.actions;

export default formCheckoutSlice.reducer;
