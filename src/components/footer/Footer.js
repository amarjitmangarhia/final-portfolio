import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.mern}>
        <span>©</span> copr 2022
      </div>
      <div className={classes.skills}>@amarmangarhia</div>
    </footer>
  );
};

export default Footer;
