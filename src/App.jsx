import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/headphones/:slug" index element={<ProductPage />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers/:slug" index element={<ProductPage />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/earphones/:slug" index element={<ProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster position="top-left" />
      <Footer />
    </>
  );
}

export default App;
