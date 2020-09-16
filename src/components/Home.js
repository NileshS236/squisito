import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img className="banner__image" src="/images/hotel-bg.jpg" alt="" />
      <div className="bg__opacity"></div>
      <div className="logo__container">
        <img className="logo__image" src="/images/Logo.png" alt="" />
      </div>
      <p className="tag__line">Best place for hungry suckers!!</p>
      <Link to="/explore">
        <button className="explore__button">Explore</button>
      </Link>
    </div>
  );
}

export default Home;
