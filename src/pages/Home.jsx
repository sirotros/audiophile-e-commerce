import React from "react";
import BestGear from "../components/BestGear";
import Categories from "../components/Categories";
import Chakra from "../components/Chakra";
import NewProduct from "../components/NewProduct";
import { changeTitle } from "../utils";

function Home() {
  changeTitle("Audiophile Shop");
  return (
    <>
      <NewProduct />
      <Categories />
      <Chakra />
      <BestGear />
    </>
  );
}

export default Home;
