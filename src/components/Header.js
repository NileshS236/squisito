import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__image" src="/images/FavIcon.png" alt="" />
      </Link>
      <div className="header__nav">
        <Link to={!user && "/signup"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuth} className="header__option">
            <span className="option">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link
          to={user ? "/contact_us" : "/signup"}
          style={{ textDecoration: "none" }}
        >
          <div className="header__option">
            <span className="option">Contact Us</span>
          </div>
        </Link>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__option header__optionBasket">
            <ShoppingBasketIcon />
            <span className="option basket__count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
