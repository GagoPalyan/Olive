import AboutUs from "../components/AboutUsPage/AboutUs";
import FAQ from "../components/AboutUsPage/FAQ/FAQ";
import BlogArticle from "../components/BlogArticle/BlogArticle";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ExpertAdvicea from "../components/ExpertAdvice/ExpertAdvicea";
import GreenProduct from "../components/GreenProduct/GreenProduct";
import Home from "../components/HomePage/Home";
import ProductPage from "../components/ProductPage/ProductPage";
import Shoping from "../components/ShopingPage/Shoping";

import {
  ABOUT_US_PAGE,
  BLOG_PAGE,
  DASHBOARD_PAGE,
  DIABETS_PAGE,
  ERROR404_PAGE,
  EXPERT_ADVICE_PAGE,
  FAQ_PAGE,
  GREEN_PRODUCT_PAGE,
  GREEN_SHOP_PAGE,
  HELTHY_DIET_PAGE,
  HOME_PAGE,
  LIFESTYLE_PAGE,
  PRODUCT_PAGE,
  SHOPING_PAGE,
  SING_IN_PAGE,
} from "./URL";

export const routes = [
  { id: 1, path: HOME_PAGE, element: <Home />, name: "HOME" },
  { id: 2, path: ABOUT_US_PAGE, element: <AboutUs />, name: "ABOUT" },
  {
    id: 3,
    path: EXPERT_ADVICE_PAGE,
    element: <ExpertAdvicea />,
    name: "EXPERT ADVICE",
  },
  {
    id: 4,
    path: GREEN_PRODUCT_PAGE,
    element: <GreenProduct />,
    name: "GREEN PRODUCT",
  },
  { id: 5, path: PRODUCT_PAGE, element: <ProductPage />, name: "PRODUCT PAGE" },
  { id: 6, path: HELTHY_DIET_PAGE, element: null, name: "HELTHY DIET" },
  { id: 7, path: LIFESTYLE_PAGE, element: null, name: "LIFESTYLE" },
  { id: 8, path: DIABETS_PAGE, element: null, name: "DIABETS" },
  { id: 9, path: FAQ_PAGE, element: <FAQ />, name: "FAQ" },
  { id: 10, path: SING_IN_PAGE, element: null, name: "SIGN IN" },
  { id: 11, path: SHOPING_PAGE, element: <Shoping />, name: "SHOPING PAGE" },
  { id: 12, path: DASHBOARD_PAGE, element: null, name: "DASHBOARD" },
  { id: 13, path: GREEN_SHOP_PAGE, element: null, name: "GREEN SHOP" },
  { id: 14, path: BLOG_PAGE, element: <BlogArticle />, name: "BLOG" },
  { id: 15, path: ERROR404_PAGE, element: <ErrorPage />, name: "404 ERROR" },
];
