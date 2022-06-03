import React, { useContext } from "react";
import UserContext from "../../user-context";
import myImg from "../../img/image-fulll.png";
import classes from "./Main.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";
import LeftSideMenu from "../header/LeftSideMenu/LeftSideMenu";

const Main = ({ setNightMode }) => {
  const ctx = useContext(UserContext);

  return (
    <main
      style={{
        backgroundColor: ctx.state ? ctx.mainBackgroundColorOnNightMode : "",
      }}
      className={classes.main}
    >
      <LeftSideMenu />
      <div className={classes.left}>
        <img className={classes.img} src={myImg} alt="myImage" />
      </div>
      <div className={classes.right}>
        <div
          style={{ color: ctx.state ? ctx.firstNameColorOnNightMode : "" }}
          className={classes.firstName}
        >
          amar
        </div>
        <div
          style={{ color: ctx.state ? ctx.lastNameColorOnNightMode : "" }}
          className={classes.lastName}
        >
          mangarhia
        </div>
      </div>
      <ToggleButton />
    </main>
  );
};

export default Main;
