import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
function NewProduct() {
  const data = useSelector((state) => state.product.product.products);
  const newItem = data.filter((e) => e.new === true);

  return (
    <div className="w-full bg-[#191919] h-[525px] bg-[url(https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-hero.55c18e98.jpg)] bg-auto bg-no-repeat bg-center relative">
      <div className="absolute top-28 left-96">
        <h4 className="text-gray text-xl  tracking-widest">
          {newItem[1].new ? "NEW PRODUCT" : ""}
        </h4>
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
    </div>
  );
}

export default NewProduct;
