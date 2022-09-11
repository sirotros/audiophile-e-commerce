import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Button from "./Button";
function HeadphonesItem() {
  const data = useSelector((state) => state.product.product.products);
  const headphones = data.filter((e) => e.category === "headphones").reverse();
  return (
    <div>
      {headphones.map((headphone) => {
        return (
          <div
            key={nanoid()}
            className="w-2/4 mx-auto my-32 flex justify-between even:flex-row-reverse"
          >
            <img
              src={headphone.image.desktop}
              alt="img"
              className="w-96 rounded-lg"
            />
            <div className="w-96 my-auto">
              {headphone.new ? (
                <h3 className="text-orange tracking-widest font-bold">
                  NEW PRODUCT
                </h3>
              ) : null}
              <h2 className="text-4xl"> {headphone.name} </h2>
              <p className="py-5"> {headphone.description} </p>
              <Link to={headphone.slug}>
                <Button orange> SEE PRODUCT </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeadphonesItem;
