import classes from "./Header.module.css";
import UserContext from "../../user-context";
import list from "../../img/list.svg";
import xSquare from "../../img/x-square.svg";
import { useContext } from "react";
const Header = (props) => {
  let hamburgerClose = "";

  const ctx = useContext(UserContext);

  if (!ctx.showCloseState) {
    hamburgerClose = (
      <img
        src={list}
        alt="hamburger"
        className={classes.svgHamburger}
        onClick={ctx.onClickHandler}
      />
    );
  } else {
    hamburgerClose = (
      <img
        src={xSquare}
        alt="hamburger"
        className={classes.svgClose}
        onClick={ctx.onClickHandler}
      />
    );
  }

  return (
    <header
      style={{ backgroundColor: ctx.state ? ctx.headerBackgroundColor : "" }}
      className={classes.header}
    >
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
