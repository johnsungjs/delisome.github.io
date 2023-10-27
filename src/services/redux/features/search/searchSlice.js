import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    handleChangeSearchInput: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { handleChangeSearchInput } = searchSlice.actions;

export default searchSlice.reducer


