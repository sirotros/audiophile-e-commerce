import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Button from "./Button";
function EarphonesItem() {
  const data = useSelector((state) => state.product.product.products);
  const earphones = data.filter((e) => e.category === "earphones").reverse();
  return (
    <div className="lg:w-2/3 sm:w-3/4 mx-auto">
      {earphones &&
        earphones.map((earphone) => {
          return (
            <div
              key={nanoid()}
              className="flex justify-evenly lg:even:flex-row-reverse lg:flex-row sm:flex-col my-24"
            >
              <img
                src={earphone.image.desktop}
                alt={earphone.name}
                className="lg:w-96 lg:h-96"
              />
              <div className="lg:w-2/4 md:text-center lg:text-start my-auto">
                {earphone.new ? (
                  <h3 className="text-orange font-bold tracking-widest sm:mt-5 lg:mt-0">
                    NEW PRODUCT
                  </h3>
                ) : null}
                <h1 className="text-4xl font-bold my-5"> {earphone.name} </h1>
                <p>{earphone.description}</p>
                <div className="sm:ml-16 md:ml-56 lg:ml-0">
                  <Link to={earphone.slug}>
                    <Button orange>SEE PRODUCT</Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default EarphonesItem;
