import React from "react";
import "./CheckOut.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__top">
        <Subtotal />
      </div>
      <div className="checkout__bottom">
        <h2 className="checkout__title">Your orders are shown here -</h2>
        {basket.map((item) => (
          <CheckoutProduct
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOut;
