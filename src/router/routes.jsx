import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Brand from "../pages/brand";
import Cart from "../pages/cart";
import ProductDetails from "../pages/product-details";
import AllProducts from "../pages/allproducts";
import AboutUs from "../pages/aboutus";
import Checkout from "../pages/checkout";
import ReviewOrder from "../pages/payment";
import Register from "../components/login/registration";
import ContactUs from "../pages/contactus";
import LoginForm from "../components/login/login";
import BrandsGrid from "../components/brands/brands_list";
import ProductsPage from "../components/category-product/category-product";  // Make sure this file exists

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/brand", element: <Brand /> },
      { path: "/product-details", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/allproduct", element: <AllProducts /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/revieworder", element: <ReviewOrder /> },
      { path: "/signup", element: <Register /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/login", element: <LoginForm /> },

      // Route for the brands grid (categories styled as brands)
      { path: "/brands", element: <BrandsGrid /> },
      // Route for listing products in a category
      { path: "/products/:categorySlug", element: <ProductsPage /> },

    ],
  },
]);

export default router;
