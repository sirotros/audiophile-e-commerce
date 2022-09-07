import React from "react";
import EarphonesItem from "../components/EarphonesItem";
import Categories from "../components/Categories";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer";
function Earphones() {
  return (
    <>
      <div className="h-60 w-full bg-dark text-white flex items-center justify-center text-5xl">
        HEADPHONES
      </div>
      <EarphonesItem />
      <Categories />
      <BestGear />
      <Footer />
    </>
  );
}

export default Earphones;
