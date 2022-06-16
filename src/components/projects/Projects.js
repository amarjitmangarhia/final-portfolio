import React from "react";
import Project from "./Project/Project";
import classes from "./Projects.module.css";
import data from "../../data-file";

const Projects = () => {
  return (
    <React.Fragment>
      <div className={classes.work}>
        <h2>My Work</h2>
        <div className={classes.projects}>
          {data.map((item) => (
            <Project
              image={item.image}
              header={item.header}
              summary={item.summary}
              link={item.link}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
