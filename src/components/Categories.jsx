import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";
import { nanoid } from "nanoid";

function Categories() {
  const data = useSelector((state) => state.product.product.products);
  const headphones = data.filter((e) => e.category === "headphones");
  const speakers = data.filter((e) => e.category === "speakers");
  const earphones = data.filter((e) => e.category === "earphones");
  const categories = [
    {
      img: headphones[0].png,
      category: "Headphones",
      link: "/headphones",
    },
    {
      img: speakers[0].png,

      category: "Spekaer",
      link: "/speakers",
    },
    {
      img: earphones[0].png,
      category: "Earphones",
      link: "/earphones",
    },
  ];

  return (
    <div
      className="w-3/4 mx-auto flex mt-40 justify-evenly 
    "
    >
      {categories.map((category) => {
        return (
          <Link
            to={category.link}
            className="w-[350px] h-[200px] bg-[#F1F1F1] mb-10 relative"
            key={nanoid()}
          >
            <img
              src={category.img}
              className="absolute w-[200px] h-[200px] ml-20 bottom-16 hover:translate-y-[-10px] hover:transition"
              alt="category"
            />
            <p className="flex justify-center mt-28 py-2">
              {category.category}
            </p>
            <div className="flex justify-center items-center">
              Shop <AiOutlineRight className="ml-2 text-orange" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;
