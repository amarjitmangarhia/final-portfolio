import { useState, createContext } from "react";

import "./App.css";
import About from "./components/About/About";
// import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LeftSideMenu from "./components/header/LeftSideMenu/LeftSideMenu";
import Main from "./components/main/Main";

export const UserContext = createContext({
  color: "white",
  backgroundColor: "black",
});

function App() {
  const [showHamburger, setShowHamburger] = useState(true);
  const [showClose, setShowClose] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  const onClickHandler = () => {
    setShowHamburger((prevState) => !prevState);
    setShowClose((prevState) => !prevState);
  };

  return (
    <div className="container">
      <UserContext.Provider value={nightMode}>
        <LeftSideMenu showHamburger={showHamburger} />
        <Header showClose={showClose} onClickHandler={onClickHandler} />
        <Main setNightMode={setNightMode} />
        <About />
        {/* <Footer /> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
