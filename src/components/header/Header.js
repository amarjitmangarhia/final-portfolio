import React from "react";
import classes from "./Header.module.css";
import list from "../../img/list.svg";
import xSquare from "../../img/x-square.svg";
const Header = (props) => {
  let hamburgerClose = "";

  if (!props.showClose) {
    hamburgerClose = (
      <img
        src={list}
        alt="hamburger"
        className={classes.svgHamburger}
        onClick={props.onClickHandler}
      />
    );
  } else {
    hamburgerClose = (
      <img
        src={xSquare}
        alt="hamburger"
        className={classes.svgClose}
        onClick={props.onClickHandler}
      />
    );
  }

  return (
    <header className={classes.header}>
      <div className={classes.helloText}>Hello I Am</div>
      <div className={classes.navbar}>
        <div className={classes.navItems}>Home</div>
        <div className={classes.navItems}>About</div>
        <div className={classes.navItems}>Project</div>
        <div className={classes.navItems}>Contact</div>
      </div>
      {hamburgerClose}
    </header>
  );
};

export default Header;
