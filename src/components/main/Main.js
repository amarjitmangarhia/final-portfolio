import React from "react";
import myImg from "../../img/image-fulll.png";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className="container">
      <main className={classes.main}>
        <div className={classes.left}>
          <img className={classes.img} src={myImg} alt="myImage" />
        </div>
        <div className={classes.right}>
          <div className={classes.firstName}>amar</div>
          <div className={classes.lastName}>mangarhia</div>
        </div>
      </main>
    </div>
  );
};

export default Main;
