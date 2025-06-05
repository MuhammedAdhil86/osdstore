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
import BrandsGrid from "../components/brands/brands_list";
import ProductsPage from "../components/category-product/category-product";
import OrderList from "../components/order/orderlist";
import OrderTracker from "../components/order/ordertracker";
import Profile from "../components/login/profile";
import OtpVerification from "../components/login/otp";
import LoginPage from "../pages/loginpage";
import BestSelling from "../pages/bestselling";
import { AuthProvider } from "../context/AuthContext";  // Make sure this file exists
import ForgotPassword from "../pages/forgetpassword";
import ReturnPolicy from "../pages/returnpolicy";
import FAQPage from "../pages/faq";
import Delivery from "../pages/delivery";
import ComingSoon from "../pages/comingsoon";
import SneakerLoader from "../components/loading/loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
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
      { path: "/order", element: <OrderList /> },
      { path: "/ordertracker", element: <OrderTracker /> },
      { path: "/profile", element: <Profile /> },
      { path: "/otpsent", element: <OtpVerification /> },
      { path: "/loginpage", element: <LoginPage /> },
      { path: "/brands", element: <BrandsGrid /> },
      { path: "/product", element: <ProductsPage /> },
      {path: "/bestselling", element: < BestSelling/>},
      {path: "/forget-password",element:<ForgotPassword/>},
      {path: "/return-policy", element:<ReturnPolicy/>},
      {path: "/FAQ", element:<FAQPage/>},
      {path:"/delivery" , element:<Delivery/>},
      {path:"/soon" , element:<ComingSoon/>},
      {path:"/loader", element:<SneakerLoader/>},
    ],
  },
]);

export default router;
