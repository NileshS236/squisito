import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckOut from "./components/CheckOut";
import ContactUs from "./components/ContactUs";
import Explore from "./components/Explore";
import SignIn from "./components/SignIn";
import DisplayMenuItems from "./components/DisplayMenuItems";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route
            path="/explore/:id"
            render={(props) => (
              <div>
                <Header />
                <DisplayMenuItems {...props} />
              </div>
            )}
          ></Route>
          <Route path="/explore" exact>
            <Header />
            <Explore />
          </Route>
          <Route path="/contact_us">
            <ContactUs />
          </Route>
          <Route path="/signup">
            <SignIn />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
