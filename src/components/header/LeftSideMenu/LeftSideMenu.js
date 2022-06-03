import React, { useContext } from "react";
import UserContext from "../../../user-context";
import classes from "./LeftSideMenu.module.css";

const LeftSideMenu = (props) => {
  const ctx = useContext(UserContext);

  let leftNavbarClass = "";

  if (ctx.showHamburgerState) {
    leftNavbarClass = classes.leftNavbar;
  } else {
    leftNavbarClass = `${classes.leftNavbar} ${classes.df}`;
  }

  return (
    <div
      style={{
        backgroundColor: ctx.state ? ctx.LeftSideMenuBackgroundColor : "",
      }}
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
