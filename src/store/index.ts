import { configureStore } from "@reduxjs/toolkit";

import { appSlice } from "./slices/App/reducer";
import { newsletterSlice } from "./slices/Newsletter/reducer";

const store = configureStore({
  devTools: process.env.NODE_ENV === "development" ? true : false,
  reducer: {
    app: appSlice.reducer,
    newsletter: newsletterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
