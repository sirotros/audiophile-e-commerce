import React from "react";
import SpeakerItems from "../components/SpeakerItems";
import Categories from "../components/Categories";
import BestGear from "../components/BestGear";
import { changeTitle } from "../utils";

function Speakers() {
  changeTitle("Audiophile Shop - speakers");

  return (
    <>
      <div className="h-60 w-full bg-dark text-white flex items-center justify-center text-5xl">
        SPEAKERS
      </div>
      <SpeakerItems />
      <Categories />
      <BestGear />
    </>
  );
}

export default Speakers;
