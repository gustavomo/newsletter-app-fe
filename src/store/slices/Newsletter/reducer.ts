import { createSlice } from "@reduxjs/toolkit";

import {
  createNewsletterAction,
  getNewslettersAction,
  getNewsletterSubscribersAction,
  subscribeEmailAction,
  unsubscribeEmailAction,
} from "./actions";

const initialState: TNewsletterReducer = {
  data: [],
  lastAction: "",
  subscribers: [],
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
      state.lastAction = (action.type);
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
    builder.addCase(getNewsletterSubscribersAction.fulfilled, (state, action) => {
      state.subscribers = (action.payload);
    })
  },
});
