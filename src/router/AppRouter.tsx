import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAppSelector } from "../store/hooks";

import { Routing } from "./Routing";

import Header from "../components/Header";

import { Spinner } from "@tranqi/ui-kit";

export const AppRouter = () => {
  const { openSpinner, goToError } = useAppSelector((state) => state.app);

  const history = useNavigate();

  useEffect(() => {
    if (goToError) {
      history("/error");
    }
  }, [goToError]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/*"
          element={<Routing />}
        />
      </Routes>
      <Spinner open={openSpinner} />
    </>
  );
};
