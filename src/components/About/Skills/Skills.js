import React, { useContext } from "react";
import { UserContext } from "../../../App";
import classes from "./Skills.module.css";
import boyToy from "../../../img/boyToy.svg";

const Skills = () => {
  const value = useContext(UserContext);
  return (
    <div
      style={{ backgroundColor: value ? "#1B1B1B" : "" }}
      className={classes.right}
    >
      <div className={classes.rightNav}>
        <p>Skills I Have</p>
      </div>
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
  );
};

export default Skills;
