import React, { useContext } from "react";
import { UserContext } from "../../../App";
import classes from "./Skills.module.css";
import boyToy from "../../../img/boyToy.svg";

const Skills = () => {
  const styles = {
    backgroundColor: "#000000",
    border: " 1px solid",
    color: "#E1E1E1",
    hover: "red",
  };

  const noStyles = {
    backgroundColor: "",
    border: "",
    color: "",
  };

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
        <div style={value ? styles : noStyles} className={classes.skill}>
          HTML
        </div>
        <div style={value ? styles : noStyles} className={classes.skill}>
          CSS
        </div>
        <div style={value ? styles : noStyles} className={classes.skill}>
          JAVASCRIPT
        </div>
        <div style={value ? styles : noStyles} className={classes.skill}>
          NODE JS
        </div>
        <div style={value ? styles : noStyles} className={classes.skill}>
          REACT
        </div>
        <div style={value ? styles : noStyles} className={classes.skill}>
          UI/UX
        </div>
      </div>
    </div>
  );
};

export default Skills;
