import React from "react";
import { MenuItems } from "./MenuItems";
import "./DisplayMenuItems.css";
import MenuItemDisplayer from "./MenuItemDisplayer";
// import { useStateValue } from "./StateProvider";

function DisplayMenuItems({ match }) {
  let _id = match.params.id;
  let i;
  for (i = 0; i < MenuItems.length; i++) {
    if (MenuItems[i].id === _id) {
      break;
    }
  }
  return (
    <div className="displayMenuItems">
      <h1>MenuItems</h1>
      <div className="menuItems">
        <MenuItemDisplayer {...MenuItems[i].items[0]} />
        <MenuItemDisplayer {...MenuItems[i].items[1]} />
        <MenuItemDisplayer {...MenuItems[i].items[2]} />
        <MenuItemDisplayer {...MenuItems[i].items[3]} />
        <MenuItemDisplayer {...MenuItems[i].items[4]} />
      </div>
    </div>
  );
}

export default DisplayMenuItems;
