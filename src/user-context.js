import { createContext, useState } from "react";

const UserContext = createContext({
  mainBackgroundColorOnNightMode: "",
  firstNameColorOnNightMode: "",
  lastNameColorOnNightMode: "",
  aboutBackgroundColor: "",
  aboutColor: "",
  headerBackgroundColor: "",
  LeftSideMenuBackgroundColor: "",
  toggleRightPosition: "",
  onClickHandler: () => {},
});

export const UserContextProvider = (props) => {
  const [nightMode, setNightMode] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);
  const [showClose, setShowClose] = useState(false);

  const onClickHandler = () => {
    setShowHamburger((prevState) => !prevState);
    setShowClose((prevState) => !prevState);
  };

  const changeThemeHandler = () => {
    setNightMode((prevState) => !prevState);
  };

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
    showCloseState: showClose,
    showHamburgerState: showHamburger,
    onClickHandler: onClickHandler,
    changeThemeHandler: changeThemeHandler,
  };

  return (
    <UserContext.Provider value={ThemeStyles}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
