import React from "react";
import classes from "./Project.module.css";

const Project = ({ image, header, summary, link }) => {
  return (
    <React.Fragment>
      <div className={classes.project}>
        <img className={classes.image} src={image} alt="x"></img>
        <div className={classes.click}>
          <a href={link} target="_blank " rel="noopener norefferer">
            Open
          </a>
        </div>
        <div className={classes.text}>
          <div className={classes.header}>{header}</div>
          <div className={classes.summary}>{summary}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
