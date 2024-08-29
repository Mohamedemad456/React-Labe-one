// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import MyNavbar from "./Component/Navbar"; // Adjust the path if necessary
import IncDecReset from "./Component/IncDecReset";
import DetailsComponent from "./Component/DetailsComponent";
import Counter from "./Component/Counter";
import Users from "./Component/Users";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import GuessGame from "./Component/GuessGame";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavLayout from "./Layout/NavLayout";
import ProductDetails, { productDetailsLoader } from "./Component/ProductDetails";
import Faq from "./Component/Faq";
import HelpLayout from "./Layout/HelpLayout";
import NotFound from "./Component/NotFound/NotFound";
import ContactUs from "./Component/ContactUs";
import ErrorComponent from "./Component/ErrorComponent/ErrorComponent";
import CreateProdcut from './Component/CreateProduct';
import { productListLoader } from "./Component/Users";
// import Home from './Home'
// import Footer from './Footer';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout /> } >
      <Route index element={<Users />}  loader={productListLoader}  errorElement={<ErrorComponent />} />
      <Route path="/product/:id" element={<ProductDetails />} loader={productDetailsLoader} errorElement={<ErrorComponent />} />
      <Route path="/help" element={<HelpLayout />}>
        {
          <>
            <Route path="faq" element={<Faq />} />
            <Route path="contactUs" element={<ContactUs />} />
          </>
        }
      </Route>
      <Route path="create" element={<CreateProdcut />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <MyNavbar /> */}
      {/* <Home />
      <IncDecReset />
      <DetailsComponent />
      <Counter /> */}
      {/* <Footer /> */}
      {/* <GuessGame /> */}
    </div>
  );
}

export default App;
