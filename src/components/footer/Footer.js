import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.mern}>MERN STACK DEV</div>
      <div className={classes.skills}>MONGO DB | EXPRESS | REACT | NODE JS</div>
    </footer>
  );
};

export default Footer;
