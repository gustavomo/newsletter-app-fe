import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
