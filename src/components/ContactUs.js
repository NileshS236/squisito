import React, { useState } from "react";
import "./ContactUs.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";

function ContactUs() {
  const history = useHistory();
  const [{ user }] = useStateValue();
  const [message, setMessage] = useState("");
  const msgVal = document.querySelector(".contactUs__msgInput")?.value;
  const emailVal = document.querySelector(".contactUs__emailInput")?.value;
  const messageSent = (e) => {
    e.preventDefault();
    if (msgVal) {
      alert("Message Sent. You will replied on " + emailVal + " soon.");
      history.push("/explore");
    } else {
      alert("Email or Message missing.");
    }
  };
  return (
    <div className="contactUs">
      <h1 className="contactUs__title">Contact Us</h1>
      <form action="" className="contactUs__form">
        <h5 className="contactUs__emailTitle">Email :</h5>
        <input
          className="contactUs__emailInput"
          type="text"
          value={user?.email}
          disabled
        />
        <h5 className="contactUs__msgTitle">Message :</h5>
        <textarea
          className="contactUs__msgInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className="contactUs__sendButton"
          type="submit"
          onClick={messageSent}
        >
          Send
        </button>
      </form>
      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </div>
  );
}

export default ContactUs;
