import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
function NewProduct() {
  const data = useSelector((state) => state.product.product.products);
  const newItem = data.filter((e) => e.new === true);

  return (
    <div className="w-full bg-[#191919] h-[525px] relative z-10">
      <div className="absolute lg:top-28 lg:left-96 sm:top-28 sm:text-center lg:text-left sm:w-full md:w-2/4 md:left-52 z-[999999]">
        <h4 className="text-gray text-xl  tracking-widest">NEW PRODUCT</h4>
        <h2 className="text-white text-5xl py-4 lg:w-80">
          {newItem[1].name.toUpperCase()}{" "}
        </h2>
        <p className="lg:w-[500px] text-gray">
          {newItem[1].description.toUpperCase()}
        </p>
        <div className="sm:flex">
          <Link
            to={`/headphones/${newItem[1].slug}`}
            className="sm:mx-auto lg:mx-0"
          >
            <Button orange> SEE PRODUCT</Button>
          </Link>
        </div>
      </div>
      <img
        src={newItem[1].cartImage.mobile}
        alt={newItem[1].name}
        className="lg:h-[450px] lg:w-[400px] sm:h-[450px] sm:w-[350px] absolute sm:left-4 sm:top-2 lg:left-[1100px] lg:top-0 md:left-44 md:w-[500px]"
      />
    </div>
  );
}

export default NewProduct;
