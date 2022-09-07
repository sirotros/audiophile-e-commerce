import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Button from "./Button";
function EarphonesItem() {
  const data = useSelector((state) => state.product.product.products);
  const earphones = data.filter((e) => e.category === "earphones").reverse();
  return (
    <div className="w-2/3 mx-auto">
      {earphones &&
        earphones.map((earphone) => {
          return (
            <div
              key={nanoid()}
              className="flex justify-evenly even:flex-row-reverse my-24"
            >
              <img
                src={earphone.image.desktop}
                alt={earphone.name}
                className="w-96 h-96"
              />
              <div className="w-2/4 my-auto">
                {earphone.new ? (
                  <h3 className="text-orange font-bold tracking-widest">
                    NEW PRODUCT
                  </h3>
                ) : null}
                <h1 className="text-4xl font-bold my-5"> {earphone.name} </h1>
                <p>{earphone.description}</p>
                <Link to={"/"}>
                  <Button orange>SEE PRODUCT</Button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default EarphonesItem;
