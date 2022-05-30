import React from "react";
import myImg from "../../img/finallll.png";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.left}>
        <div className={classes.wrapper}>
          <img className={classes.img} src={myImg} alt="" />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.firstName}>amar</div>
        <div className={classes.lastName}>mangarhia</div>
      </div>
    </main>
  );
};

export default Main;
