import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Button from "../components/Button";
function ProductDetail() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const datas = useSelector((state) => state.product.product.products);
  const detailProduct = datas.filter((data) => data.slug === slug);
  const includedItems = detailProduct[0].includedItems;
  const likes = detailProduct[0].others;

  return (
    <div className="w-defaultWidth mx-auto">
      <div className="flex">
        <img
          src={detailProduct[0].image.desktop}
          alt={detailProduct[0].name}
          className="w-[493px] h-[511px]"
        />
        <div className="ml-16 flex flex-col w-3/4 ">
          {detailProduct[0].new ? (
            <p className="text-orange mt-10">NEW PRODUCT</p>
          ) : null}
          <h1 className="text-5xl w-80 font-bold my-5">
            {detailProduct[0].name}
          </h1>
          <p className="w-3/4">{detailProduct[0].description}</p>
          <p className="my-5">${detailProduct[0].price}</p>

          <div className="flex items-center justify-evenly w-2/4  h-9">
            <div className="flex items-center bg-grayLight w-20 h-9">
              <button className="w-80 ">-</button>
              <p>1</p>
              <button className="w-80 ">+</button>
            </div>
            <Button orange className="mb-5">
              Add Product
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-28">
        <div className="w-2/4">
          <h1 className="text-4xl font-bold">Features</h1>
          <p className="mt-10 text-base text-gray">
            {detailProduct[0].features}{" "}
          </p>
        </div>
        <div className="w-1/4 mx-auto">
          <h1 className="text-3xl font-bold mb-10">IN THE BOX</h1>

          {includedItems.map((item) => {
            return (
              <div className="flex mt-3" key={nanoid()}>
                <span className="text-orange font-bold">{item.quantity}x</span>
                <p className="ml-3"> {item.item} </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-around mt-20">
        <div>
          <img
            src={detailProduct[0].gallery.first?.desktop}
            alt={detailProduct[0].name}
          />
          <img
            src={detailProduct[0].gallery.second?.desktop}
            alt={detailProduct[0].name}
            className="mt-14"
          />
        </div>
        <img
          src={detailProduct[0].gallery.third?.desktop}
          alt={detailProduct[0].name}
        />
      </div>

      <div className="mt-10">
        <h1 className="w-full flex justify-center my-20 text-4xl font-semibold">
          YOU MAY ALSO LIKE
        </h1>

        <div className="flex justify-between">
          {likes
            ? likes.map((like) => {
                return (
                  <div key={nanoid()}>
                    <img
                      src={like.image.desktop}
                      alt={like.name}
                      className="w-72 h-72"
                    />
                    <h3 className="w-full flex justify-center mt-5 text-xl font-semibold">
                      {like.name}
                    </h3>
                    <Link
                      to={pathname + `../../../${like.slug}`}
                      className="flex justify-center"
                    >
                      <Button orange>SEE PRODUCT</Button>
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
