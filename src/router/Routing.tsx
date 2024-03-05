import { Route, Routes } from "react-router-dom";

import ErrorPage from "../pages/Error";
import NewsletterPage from "../pages/Newsletter";
import UnsubscribePage from "../pages/Unsubscribe";
import NewletterSubscription from "../pages/NewsletterSubscripber";
import NotFoundPage from "../pages/404";

export const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<NewsletterPage />} />
      <Route path={"/:id"} element={<NewletterSubscription />} />
      <Route path={"/unsubscribe/:id"} element={<UnsubscribePage />} />
      <Route path={"/error"} element={<ErrorPage />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};
