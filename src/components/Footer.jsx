import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
function Footer() {
  return (
    <footer className="w-full h-[350px]  bg-[#191919] text-white ">
      <div className="w-2/4 mx-auto flex">
        <div className="flex flex-col justify-evenly mt-12 h-[250px]">
          <h2 className="font-bold text-3xl">audiophile</h2>
          <p className="w-3/4 text-[#ffffff80] py-10">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="text-[#ffffff80]">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        <div className="w-full h-full ">
          <div className="flex items-center text-md h-full mt-20">
            <Link
              className="text-white mx-3  h-full flex items-center"
              to={"/"}
            >
              HOME
            </Link>
            <Link
              className="text-white mx-3  h-full flex items-center"
              to={"/headphones"}
            >
              HEADPHONES
            </Link>
            <Link
              className="text-white mx-3  h-full flex items-center"
              to={"/speakers"}
            >
              SPEAKERS
            </Link>
            <Link
              className="text-white mx-3  h-full flex items-center"
              to={"/earphones"}
            >
              EARPHONES
            </Link>
          </div>
          <div className="mt-32 flex justify-end text-3xl">
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
