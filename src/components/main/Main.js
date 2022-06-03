import React, { useContext } from "react";
import { UserContext } from "../../App";
import myImg from "../../img/image-fulll.png";
import classes from "./Main.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";

const Main = ({ setNightMode }) => {
  const ctx = useContext(UserContext);
  console.log(ctx);

  return (
    <main
      style={{
        backgroundColor: ctx.state ? ctx.mainBackgroundColorOnNightMode : "",
      }}
      className={classes.main}
    >
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
      <ToggleButton setNightMode={setNightMode} />
    </main>
  );
};

export default Main;
