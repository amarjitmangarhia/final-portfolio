import { useState } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LeftSideMenu from "./components/header/LeftSideMenu/LeftSideMenu";
import Main from "./components/main/Main";

function App() {
  const [showHamburger, setShowHamburger] = useState(true);
  const [showClose, setShowClose] = useState(false);

  const onClickHandler = () => {
    setShowHamburger((prevState) => !prevState);
    setShowClose((prevState) => !prevState);
  };

  return (
    <div>
      <div className="container">
        <LeftSideMenu showHamburger={showHamburger} />
        <Header showClose={showClose} onClickHandler={onClickHandler} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
