import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { addToBasket } from "../redux/basket";
import Button from "../components/Button";
function ProductDetail() {
  const { slug } = useParams();
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const datas = useSelector((state) => state.product.product.products);
  const detailProduct = datas.filter((data) => data.slug === slug)[0];
  const includedItems = detailProduct.includedItems;
  const likes = detailProduct.others;

  const [quantity, setQuantity] = useState(1);

  const addBasket = () => {
    const newBasketItem = { id: detailProduct.id, detailProduct, quantity };
    dispatch(addToBasket(newBasketItem));
    setQuantity(1);
  };

  const decrementQuantitiy = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      const decrement = quantity - 1;
      setQuantity(decrement);
    }
  };

  const incrementQuantitiy = () => {
    const increment = quantity + 1;
    setQuantity(increment);
  };
  return (
    <div className="lg:w-defaultWidth sm:w-3/4 mx-auto">
      <div className="flex sm:flex-col md:flex-row">
        <img
          src={detailProduct.image.desktop}
          alt={detailProduct.name}
          className="lg:w-[493px] lg:h-[511px] md:w-[200px] md:h-[500px] sm:h-[350px]"
        />
        <div className="lg:ml-16 md:ml-14 flex flex-col lg:w-3/4 sm:w-full ">
          {detailProduct.new ? (
            <p className="text-orange mt-10">NEW PRODUCT</p>
          ) : null}
          <h1 className="text-5xl w-80 font-bold my-5">{detailProduct.name}</h1>
          <p className="lg:w-3/4">{detailProduct.description}</p>
          <p className="my-5">${detailProduct.price}</p>

          <div className="flex items-center justify-evenly lg:w-2/4 h-8 -ml-5">
            <div className="flex items-center bg-grayLight lg:w-24 h-11 sm:w-32 ">
              <button className="w-80 " onClick={decrementQuantitiy}>
                -
              </button>
              <p>{quantity}</p>
              <button className="w-80 " onClick={incrementQuantitiy}>
                +
              </button>
            </div>
            <Button orange className="mb-5" onClick={addBasket}>
              Add Product
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-28 sm:flex-col lg:flex-row">
        <div className="lg:w-2/4">
          <h1 className="text-4xl font-bold">Features</h1>
          <p className="mt-10 text-base text-gray">{detailProduct.features} </p>
        </div>
        <div className="lg:w-1/4 lg:mx-auto sm:mt-7 lg:mt-0">
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

      <div className="flex justify-around lg:flex-row md:flex-row  lg:mt-20 sm:mt-10 sm:flex-col ">
        <div>
          <img
            src={detailProduct.gallery?.first?.desktop}
            alt={detailProduct.name}
          />
          <img
            src={detailProduct.gallery?.second?.desktop}
            alt={detailProduct.name}
            className="lg:mt-14 sm:mt-10"
          />
        </div>
        <img
          src={detailProduct.gallery?.third?.desktop}
          alt={detailProduct.name}
          className="lg:mt-0 sm:mt-10"
        />
      </div>

      <div className="mt-20">
        <h1 className="w-full flex justify-center my-10 text-4xl font-semibold">
          YOU MAY ALSO LIKE
        </h1>

        <div className="flex lg:flex-row md:flex-row sm:flex-col md:w-3/4 lg:w-full lg:ml-10">
          {likes
            ? likes.map((like) => {
                return (
                  <div
                    key={nanoid()}
                    className="lg:mt-0 md:-ml-1 mx-5 p-5 sm:mt-10"
                  >
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
