import React, { useEffect } from "react";
import "./MenuItemDisplayer.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";

function MenuItemDisplayer({ hotelId, id, image, name, price }) {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        hotelId: hotelId,
        id: id,
        image: image,
        name: name,
        price: price,
      },
    });
  };
  return (
    <div className="menuItemDisplayer">
      <h2 className="menuItem__name">{name}</h2>
      <img className="menuItem__image" src={image} alt="" />
      <p className="menuItem__price">
        <small>₹</small>
        <strong>{price}</strong>
      </p>
      <button
        className="menuItem__add"
        onClick={user ? addToBasket : history.push("/signup")}
      >
        Add Item
      </button>
    </div>
  );
}

export default MenuItemDisplayer;
