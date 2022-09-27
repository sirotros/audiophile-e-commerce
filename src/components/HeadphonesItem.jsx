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
            className="lg:w-2/4 sm:w-3/4 mx-auto  my-32 flex lg:justify-between lg:flex-row sm:flex-col lg:even:flex-row-reverse sm:even:flex-col"
          >
            <img
              src={headphone.image.desktop}
              alt="img"
              className="lg:w-96 lg:h-96"
            />
            <div className="w-96 md:w-10/12 md:text-center md:mx-auto md:text-xl lg:text-base lg:text-start lg:ml-5 lg:my-auto sm:mt-5">
              {headphone.new ? (
                <h3 className="text-orange lg:tracking-widest  font-bold">
                  NEW PRODUCT
                </h3>
              ) : null}
              <h2 className="text-4xl"> {headphone.name} </h2>
              <p className="py-5 sm:w-3/4 md:w-full">
                {headphone.description}
              </p>
              <div className="sm:ml-16 md:ml-44 lg:ml-0">
                <Link to={headphone.slug}>
                  <Button orange> SEE PRODUCT </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeadphonesItem;
