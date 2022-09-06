import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
