import { useState, createContext } from "react";

import "./App.css";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LeftSideMenu from "./components/header/LeftSideMenu/LeftSideMenu";
import Main from "./components/main/Main";

export const UserContext = createContext();

function App() {
  const [nightMode, setNightMode] = useState(false);
  const ThemeStyles = {
    mainBackgroundColorOnNightMode: "#1B1B1B",
    firstNameColorOnNightMode: "#f2aa4cff",
    lastNameColorOnNightMode: "#F3F3F3",
    aboutBackgroundColor: "#141414",
    aboutColor: "white",
    headerBackgroundColor: "#000000",
    LeftSideMenuBackgroundColor: "#000000dd",
    toggleRightPosition: "4px",
    state: nightMode,
  };

  const [showHamburger, setShowHamburger] = useState(true);
  const [showClose, setShowClose] = useState(false);

  const onClickHandler = () => {
    setShowHamburger((prevState) => !prevState);
    setShowClose((prevState) => !prevState);
  };

  return (
    <div className="container">
      <UserContext.Provider color={"black"} value={ThemeStyles}>
        <LeftSideMenu showHamburger={showHamburger} />
        <Header showClose={showClose} onClickHandler={onClickHandler} />
        <Main setNightMode={setNightMode} />
        <About />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
