import { createSlice } from "@reduxjs/toolkit";

import {
  createNewsletterAction,
  getNewslettersAction,
  subscribeEmailAction,
  unsubscribeEmailAction,
} from "./actions";

const initialState: TNewsletterReducer = {
  data: [],
  lastAction: "",
  url: "",
};

export const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.url = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewsletterAction.fulfilled, (state, action) => {
      state.url = (action.payload);
    })
    builder.addCase(getNewslettersAction.fulfilled, (state, action) => {
      state.data = (action.payload);
      state.lastAction = (action.type);
    }),
    builder.addCase(subscribeEmailAction.fulfilled, (state, action) => {
      state.lastAction = (action.type);
    })
    builder.addCase(unsubscribeEmailAction.fulfilled, (state, action) => {
      state.lastAction = (action.type);
    })
  },
});
