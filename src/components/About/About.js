import React, { useContext } from "react";
import { UserContext } from "../../App";
import classes from "./About.module.css";
import wheelChair from "../../img/wheelChair.svg";
import Skills from "./Skills/Skills";

const About = () => {
  const value = useContext(UserContext);

  return (
    <div>
      <div className={classes.about}>
        <div
          style={{
            backgroundColor: value ? "#141414" : "",
            color: value ? "white" : "black",
          }}
          className={classes.left}
        >
          <div className={classes.header}>
            Who Am I<span> ?</span>
          </div>
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
      <Skills />
    </div>
  );
};

export default About;
