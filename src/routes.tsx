import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";
import { AboutUs } from "./pages/AboutUs";
import { Idea } from "./pages/Idea";
import { PageNotFound } from "./pages/PageNotFound";

export const routes = createBrowserRouter([
  { path: "ideas/:idea?", Component: Idea },
  {
    path: "/",
    Component: Home,
  },
  // { path: "about", Component: AboutUs },
  { path: "contact-us", Component: ContactUs },
  { path: "about-us", Component: AboutUs },
  { path: "page-not-found", Component: PageNotFound },
  { path: "*", Component: PageNotFound },
]);
