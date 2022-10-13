import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { calculatQuantity } from "../redux/basket";
import Modal from "./Modal";
import Basket from "./Basket";
import { useState } from "react";
import Categories from "../components/Categories";

function Header() {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const basket = useSelector((state) => state.baskets.baskets);
  const basketTotal = useSelector((state) => state.baskets.quantity);

  useEffect(() => {
    dispatch(calculatQuantity());
  }, [basket, basketTotal]);

  return (
    <header className="w-full lg:h-20 sm:h-32 bg-dark  ">
      <div className="lg:w-defaultWidth sm:w-full sm:h-20 md:h-20 mx-auto flex sm:items-center lg:justify-between sm:justify-around sm:mb-5">
        <FiMenu
          className="lg:hidden sm:block text-white text-2xl"
          onClick={(e) => setOpenMenu(!openMenu)}
        />
        {openMenu ? (
          <div className=" w-11/12 absolute top-32 z-[99999] bg-white">
            <Categories setOpenMenu={setOpenMenu} />
          </div>
        ) : null}

        <Link to={"/"} className="text-white text-2xl ">
          audiophile
        </Link>
        <div className="lg:flex items-center h-full sm:hidden ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange mx-3 text-sm h-full flex items-center hover:text-orange"
                : "text-white mx-3 text-sm h-full flex items-center  hover:text-orange "
            }
            id="home"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange mx-3 text-sm h-full flex items-center hover:text-orange "
                : "text-white mx-3 text-sm h-full flex items-center hover:text-orange"
            }
            id="headphones"
            to={"/headphones"}
          >
            HEADPHONES
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange mx-3 text-sm h-full flex items-center hover:text-orange "
                : "text-white mx-3 text-sm h-full flex items-center hover:text-orange"
            }
            id="speakers"
            to={"/speakers"}
          >
            SPEAKERS
          </NavLink>
          <NavLink
            id="earphones"
            className={({ isActive }) =>
              isActive
                ? "text-orange mx-3 text-sm h-full flex items-center hover:text-orange "
                : "text-white mx-3 text-sm h-full flex items-center hover:text-orange"
            }
            to={"/earphones"}
          >
            EARPHONES
          </NavLink>
        </div>

        {basketTotal > 0 ? (
          <button onClick={toggleModal} className="text-white relative">
            <AiOutlineShoppingCart className="text-2xl" />
            <span className="absolute bottom-3 left-4 bg-orange rounded-full flex items-start justify-center text-xs w-5 h-5">
              {basketTotal}
            </span>
          </button>
        ) : (
          <button onClick={toggleModal} className="text-white">
            <AiOutlineShoppingCart className="font-2xl" />
          </button>
        )}
      </div>
      <Modal isOpen={modalOpen} onClose={toggleModal} basket>
        <Basket toggleModal={toggleModal} />
      </Modal>
    </header>
  );
}

export default Header;
