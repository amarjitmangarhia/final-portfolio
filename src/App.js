import { useState } from "react";

import "./App.css";
import myImg from "./img/finallll.png";
function App() {
  const [showHamburger, setShowHamburger] = useState(true);
  const [showClose, setShowClose] = useState(false);

  const onClickHandler = () => {
    setShowHamburger((prevState) => !prevState);
    setShowClose((prevState) => !prevState);
  };

  let leftNavbarClass = "";

  if (showHamburger) {
    leftNavbarClass = "left-navbar";
  } else {
    leftNavbarClass = "left-navbar df";
  }

  let hamburgerClose = "";

  if (!showClose) {
    hamburgerClose = (
      <svg
        onClick={onClickHandler}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="svgHamburger"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    );
  } else {
    hamburgerClose = (
      <svg
        onClick={onClickHandler}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="svgClose"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    );
  }

  return (
    <div>
      <div className="container">
        <div className={leftNavbarClass}>
          <div className="left-nav-items">
            <a href="google.com">Home</a>
          </div>
          <div className="left-nav-items">
            <a href="google.com">About</a>
          </div>
          <div className="left-nav-items">
            <a href="google.com">Project</a>
          </div>
          <div className="left-nav-items ">
            <a href="google.com">Contact</a>
          </div>
        </div>

        <header id="header">
          <div className="hello-text">Hello I Am</div>
          <div className="navbar">
            <div className="nav-items">Home</div>
            <div className="nav-items">About</div>
            <div className="nav-items">Project</div>
            <div className="nav-items ">Contact</div>
          </div>
          {hamburgerClose}
        </header>
        <main id="main">
          <div className="left">
            <div className="wrapper">
              <img className="img" src={myImg} alt="" />
            </div>
          </div>
          <div className="right">
            <div className=" first-name">amar</div>
            <div className="last-name">mangarhia</div>
          </div>
        </main>
        <footer id="footer">
          <div className="mern">MERN STACK DEV</div>
          <div className="skills">MONGO DB | EXPRESS | REACT | NODE JS</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
