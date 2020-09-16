import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ image, name, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      name: name,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <div className="checkoutProduct__namePrice">
          <h2 className="checkoutProduct__name">{name}</h2>
          <h4 className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </h4>
        </div>
        <button onClick={removeFromBasket} className="checkoutProduct__remove">
          &times;
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
