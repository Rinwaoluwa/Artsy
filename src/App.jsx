import { Suspense, lazy, useEffect, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import MobileDrawer from './components/MobileDrawer';
import GradientLoader from './components/GradientLoader';
import ShoppingCart from './components/ShoppingCart';

const AuctionPage = lazy(() => import('./pages/AuctionPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const CheckoutPageForm = lazy(() => import('./pages/CheckoutPageForm'));
const DropPage = lazy(() => import('./pages/DropPage'));
const Homepage = lazy(() => import('./pages/Homepage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const ProductDescriptionPage = lazy(() => import('./pages/ProductDescriptionPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const ThankyouPage = lazy(() => import('./pages/ThankyouPage'));


function App() {
  // Remove html file loader
  useEffect(function () {
    document.querySelector('.htmlLoader').style.display = "none";
  }, [])
  return (
    <>
    {/* {isLoading && <GradientLoader />} */}
      <Suspense fallback={<GradientLoader />} >
        <HashRouter>
          <Routes>
            <Route index element={<Homepage />}/>
            <Route path='drawer' element={<MobileDrawer />}/>
            <Route path='product' element={<ProductPage />}/>
            <Route path='description' element={<ProductDescriptionPage />}/>
            <Route path='auctions' element={<AuctionPage />}/>
            <Route path='drops' element={<DropPage />} />
            {/* THIS SHOULD BE REQUIRE AUTENTICATION I THINK */}
            <Route path='checkout' element={<CheckoutPage />}>
              <Route index element={<Navigate replace to='cart' />} />
              <Route path='cart' element={<ShoppingCart />} />
              <Route path='shipping' element={<CheckoutPageForm />}/>
              <Route path='payment' element={<PaymentPage />}/>
              <Route path='thankyou' element={<ThankyouPage />}/>
            </Route>
            {/* END, ALSO ADD A PAGE NOT FOUND COMPONENT */}
          </Routes>
        </HashRouter>
      </Suspense>
    </>
  )
}

export default App;

