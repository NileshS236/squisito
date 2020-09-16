import React from "react";
import "./Explore.css";
import HotelInfo from "./HotelInfo";
import { HotelInfoContainer } from "./HotelInfoContainer";

function Explore() {
  return (
    <div className="explore">
      <div className="explore__row">
        <HotelInfo {...HotelInfoContainer[0]} />
        <HotelInfo {...HotelInfoContainer[1]} />
      </div>
    </div>
  );
}

export default Explore;
