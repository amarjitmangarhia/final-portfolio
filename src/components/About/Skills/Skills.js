import React from "react";
import classes from "./Skills.module.css";
import boyToy from "../../../img/boyToy.svg";

const Skills = () => {
  return (
    <div className="container">
      <div className={classes.right}>
        <div className={classes.rightNav}>Skills I Have</div>
        <div className={classes.image}>
          <img className={classes.img} src={boyToy} alt="myImage" />
        </div>
        <div className={classes.skills}>
          <div className={classes.skill}>HTML</div>
          <div className={classes.skill}>CSS</div>
          <div className={classes.skill}>JAVASCRIPT</div>
          <div className={classes.skill}>NODE JS</div>
          <div className={classes.skill}>REACT</div>
          <div className={classes.skill}>UI/UX</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
