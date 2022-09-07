import React from "react";
import SpeakerItems from "../components/SpeakerItems";
import Categories from "../components/Categories";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer"
function Speakers() {
  return (
    <>
      <div className="h-60 w-full bg-dark text-white flex items-center justify-center text-5xl">
          SPEAKERS
      </div>
      <SpeakerItems />
      <Categories />
      <BestGear/>
      <Footer/>
    </>
  );
}

export default Speakers;
