import React from "react";
import BestGear from "../components/BestGear";
import Categories from "../components/Categories";
import Chakra from "../components/Chakra";
import Footer from "../components/Footer";
import NewProduct from "../components/NewProduct";

function Home() {
  return (
    <>
      <NewProduct />
      <Categories />
      <Chakra />
      <BestGear /> 
      <Footer />
    </>
  );
}

export default Home;
