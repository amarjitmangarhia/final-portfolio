import React from "react";
import classes from "./About.module.css";
import boyToy from "../../img/boyToy.svg";
import wheelChair from "../../img/wheelChair.svg";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.left}>
        <div className={classes.header}>Who Am I</div>
        <div className={classes.desc}>
          Amarjit, A Computer Science Graduate.
          <br />
          Fully self taught.
          <img
            className={classes.wheelChair}
            src={wheelChair}
            alt="wheelChair"
          />
        </div>
      </div>
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

export default About;
