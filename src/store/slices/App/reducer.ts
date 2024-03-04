import { createSlice } from "@reduxjs/toolkit";

const initialState: TAppReducer = {
  goToError: false,
  openSpinner: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpenSpinner: (state, action) => {
      state.openSpinner = action.payload;
    },
    setGoToError: (state, action) => {
      state.goToError = action.payload;
    },
  },
});
