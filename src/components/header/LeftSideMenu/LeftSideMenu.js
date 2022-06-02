import React, { useContext } from "react";
import { UserContext } from "../../../App";
import classes from "./LeftSideMenu.module.css";

const LeftSideMenu = (props) => {
  const value = useContext(UserContext);

  let leftNavbarClass = "";

  if (props.showHamburger) {
    leftNavbarClass = classes.leftNavbar;
  } else {
    leftNavbarClass = `${classes.leftNavbar} ${classes.df}`;
  }

  return (
    <div
      style={{ backgroundColor: value ? " #000000dd" : "" }}
      className={leftNavbarClass}
    >
      <div className={classes.leftNavItems}>
        <a href="google.com">Home</a>
      </div>
      <div className={classes.leftNavItems}>
        <a href="google.com">About</a>
      </div>
      <div className={classes.leftNavItems}>
        <a href="google.com">Project</a>
      </div>
      <div className={classes.leftNavItems}>
        <a href="google.com">Contact</a>
      </div>
    </div>
  );
};

export default LeftSideMenu;
