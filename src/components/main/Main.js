import React, { useContext } from "react";
import { UserContext } from "../../App";
import myImg from "../../img/image-fulll.png";
import classes from "./Main.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";

const Main = ({ setNightMode }) => {
  const value = useContext(UserContext);

  return (
    <main
      style={{ backgroundColor: value ? "#1B1B1B" : "" }}
      className={classes.main}
    >
      <div className={classes.left}>
        <img className={classes.img} src={myImg} alt="myImage" />
      </div>
      <div className={classes.right}>
        <div
          style={{ color: value ? "#f2aa4cff" : "" }}
          className={classes.firstName}
        >
          amar
        </div>
        <div
          style={{ color: value ? "#F3F3F3" : "" }}
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
