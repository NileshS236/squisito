import React from "react";
import "./Explore.css";
import HotelInfo from "./HotelInfo";
import { HotelInfoContainer } from "./HotelInfoContainer";

function Explore() {
  return (
    <div className="explore">
      <div className="explore__row">
        {HotelInfoContainer.map((hotelInfo) => (
          <HotelInfo key={hotelInfo.id} {...hotelInfo} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
