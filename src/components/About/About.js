import React from "react";
import classes from "./About.module.css";
import wheelChair from "../../img/wheelChair.svg";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <div>
      <div className={classes.about}>
        <div className="container">
          <div className={classes.left}>
            <div className={classes.header}>Who Am I</div>
            <div className={classes.desc}>
              Amarjit, A Computer Science Graduate.
              <br />
              Fully self taught.
              <div className={classes.image}>
                <img
                  className={classes.wheelChair}
                  src={wheelChair}
                  alt="wheelChair"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
