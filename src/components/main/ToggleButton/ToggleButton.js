import React, { useContext } from "react";
import UserContext from "../../../user-context";
import classes from "../../main/ToggleButton/ToggleButton.module.css";
import sun from "../../../img/sun.svg";
import moon from "../../../img/moon.svg";

const ToggleButton = ({ setNightMode }) => {
  const ctx = useContext(UserContext);

  return (
    <div onClick={ctx.changeThemeHandler} className={classes.toggleButton}>
      <img className={classes.sun} src={sun} alt="" />
      <div
        style={{ right: ctx.state ? ctx.toggleRightPosition : "" }}
        className={classes.round}
      ></div>
      <img className={classes.moon} src={moon} alt="" />
    </div>
  );
};

export default ToggleButton;
