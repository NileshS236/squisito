import React, { useState } from "react";
import "./SignIn.css";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/explore");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/explore");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signin">
      <h1>SignIn</h1>
      <form className="signin__form" action="">
        <div className="signin__email">
          <h5 className="signin__title">Email :</h5>
          <input
            className="signin__input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="signin__password">
          <h5 className="signin__title">Password :</h5>
          <input
            className="signin__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="signin__buttons">
          <button
            className="signin__signinButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>Don't have an account?</p>
          <button className="signin__registerButton" onClick={register}>
            Create Account
          </button>
        </div>
      </form>
      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </div>
  );
}

export default SignIn;
