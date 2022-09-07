import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Button from "./Button";
function SpeakerItems() {
  const data = useSelector((state) => state.product.product.products);
  const speakers = data.filter((e) => e.category === "speakers").reverse();
  return (
    <div className="w-2/3 mx-auto">
      {speakers &&
        speakers.map((speaker) => {
          return (
            <div
              key={nanoid()}
              className="flex justify-evenly even:flex-row-reverse my-24"
            >
              <img
                src={speaker.image.desktop}
                alt={speaker.name}
                className="w-96 h-96"
              />
              <div className="w-2/4 my-auto">
                {speaker.new ? (
                  <h3 className="text-orange font-bold tracking-widest">
                    NEW PRODUCT
                  </h3>
                ) : null}
                <h1 className="text-4xl font-bold my-5"> {speaker.name} </h1>
                <p>{speaker.description}</p>
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

export default SpeakerItems;
