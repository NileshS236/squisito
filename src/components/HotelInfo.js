import React from "react";
import "./HotelInfo.css";
import { Link } from "react-router-dom";

function HotelInfo({ id, image, name, address, rating }) {
  return (
    <div className="hotel">
      <img className="hotelinfo__image" src={image} alt="" />
      <div className="hotelinfo">
        <div className="hotelinfo__name">{name}</div>
        <p className="hotelinfo__address">{address}</p>
        <div className="hotelinfo__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <Link to={"/explore/" + id} style={{ width: "70%" }}>
        <button>View Available Items</button>
      </Link>
    </div>
  );
}

export default HotelInfo;
