import { HashRouter, Route, Routes } from "react-router-dom";
import AuctionPage from "./pages/AuctionPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutPageForm from "./pages/CheckoutPageForm";
import DropPage from "./pages/DropPage";
import Homepage from "./pages/Homepage";
import MobileDrawer from "./components/MobileDrawer";
import PaymentPage from "./pages/PaymentPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import ProductPage from "./pages/ProductPage";
import ThankyouPage from "./pages/ThankyouPage";




function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path='drawer' element={<MobileDrawer />}/>
        <Route path='products' element={<ProductPage />}/>
        <Route path='description' element={<ProductDescriptionPage />}/>
        <Route path='auctions' element={<AuctionPage />}/>
        <Route path='drops' element={<DropPage />} />
        <Route path='checkout' element={<CheckoutPage />}/>
        <Route path='shipping' element={<CheckoutPageForm />}/>
        <Route path='payment' element={<PaymentPage />}/>
        <Route path='thankyou' element={<ThankyouPage />}/>
      </Routes>
    </HashRouter>
  )
}

export default App;

