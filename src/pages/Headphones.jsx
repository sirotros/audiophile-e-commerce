import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import HeadphonesItem from "../components/HeadphonesItem";

function Headphones() {
  return (
    <>
      <div className="h-60 w-full bg-dark text-white flex items-center justify-center text-5xl">
        HEADPHONES
      </div>
      <HeadphonesItem />
      <Categories />
      <Footer />
    </>
  );
}

export default Headphones;
