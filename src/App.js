import { useState } from "react";

import "./App.css";
import myImg from "./img/finallll.png";
function App() {
  const [first, setfirst] = useState(false);

  const onClickHandler = () => {
    setfirst((prevSate) => !prevSate);
  };
  return (
    <div>
      <div className="container">
        <div className={!first ? "left-navbar" : "left-navbar df"}>
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
          <svg
            onClick={onClickHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="svgHamburger"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </header>
        <main id="main">
          <div className="left">
            <div className="wrapper">
              <img className="img" src={myImg} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="first-name">amar</div>
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
