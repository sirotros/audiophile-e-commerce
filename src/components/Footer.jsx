import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
function Footer() {
  return (
    <footer className="w-full lg:h-[350px]  bg-[#191919] text-white ">
      <div className="lg:w-2/4 lg:mx-auto flex lg:flex-row sm:flex-col ">
        <div className="flex flex-col justify-evenly mt-12 h-[250px] sm:items-center">
          <h2 className="font-bold text-3xl">audiophile</h2>
          <p className="sm:w-10/12 sm:ml-4 lg:ml-0 lg:w-3/4 text-[#ffffff80] py-10">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="text-[#ffffff80]">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        <div className="lg:w-full sm:w-2/4 sm:mx-auto h-full ">
          <div className="flex items-center lg:text-md sm:text-sm h-full sm:-ml-20 lg:ml-10 mt-20">
            <Link className="text-white mx-2 h-full flex items-center" to={"/"}>
              HOME
            </Link>
            <Link
              className="text-white mx-2 h-full flex items-center"
              to={"/headphones"}
            >
              HEADPHONES
            </Link>
            <Link
              className="text-white mx-2 h-full flex items-center"
              to={"/speakers"}
            >
              SPEAKERS
            </Link>
            <Link
              className="text-white mx-2 h-full flex items-center"
              to={"/earphones"}
            >
              EARPHONES
            </Link>
          </div>
          <div className="lg:mt-32 sm:mt-20 lg:mb-0 sm:mb-10 flex lg:justify-end sm:justify-end text-3xl">
            <Link to={"/"}>
              <AiFillFacebook className="mr-3" />
            </Link>
            <Link to={"/"}>
              <AiOutlineTwitter className="mr-3" />
            </Link>
            <Link to={"/"}>
              <AiOutlineInstagram className="mr-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
