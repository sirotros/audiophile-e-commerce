import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
function NewProduct() {
  const data = useSelector((state) => state.product.product.products);
  const newItem = data.filter((e) => e.new === true);
  return (
    <div className="w-full bg-[#191919] h-[525px] relative">
      <div className="absolute top-28 left-96 z-[999999]">
        <h4 className="text-gray text-xl  tracking-widest">NEW PRODUCT</h4>
        <h2 className="text-white text-5xl py-4 w-80">
          {newItem[1].name.toUpperCase()}{" "}
        </h2>
        <p className="w-[500px] text-gray">
          {newItem[1].description.toUpperCase()}
        </p>
        <Link to={`/headphones/${newItem[1].slug}`}>
          <Button orange> SEE PRODUCT</Button>
        </Link>
      </div>
      <img
        src={newItem[1].cartImage}
        alt={newItem[1].name}
        className="h-[525px] absolute right-72 bottom-2"
      />
    </div>
  );
}

export default NewProduct;
