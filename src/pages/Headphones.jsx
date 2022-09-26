import React from "react";
import Categories from "../components/Categories";
import HeadphonesItem from "../components/HeadphonesItem";
import { changeTitle } from "../utils";

function Headphones() {
  changeTitle("Audiophile Shop - headphones")
  return (
    <>
      <div className="h-60 w-full bg-dark text-white flex items-center justify-center text-5xl">
        HEADPHONES
      </div>
      <HeadphonesItem />
      <Categories />
    </>
  );
}

export default Headphones;
