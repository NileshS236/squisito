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
        {MenuItems[i].items.map((item) => (
          <MenuItemDisplayer key={item.id} hotelId={_id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default DisplayMenuItems;
