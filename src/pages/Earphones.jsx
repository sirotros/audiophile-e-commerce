import React from "react";
import EarphonesItem from "../components/EarphonesItem";
import Categories from "../components/Categories";
import BestGear from "../components/BestGear";

import { changeTitle } from "../utils";

function Earphones() {
  changeTitle("Audiophile Shop - headphones");

  return (
    <>
      <div className="h-60 w-full bg-dark text-white flex items-center justify-center text-5xl">
        HEADPHONES
      </div>
      <EarphonesItem />
      <Categories />
      <BestGear />
    </>
  );
}

export default Earphones;
