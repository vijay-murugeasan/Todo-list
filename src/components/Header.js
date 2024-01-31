import React from "react";
import DarkthemeIcon from "../assets/images/icon-sun.svg";
import LightthemeIcon from "../assets/images/icon-moon.svg";

function Header(props) {
  const { isDarkTheme, toggleTheme } = props;
  // console.log(props);
  console.log(DarkthemeIcon)
  return (
    <header className={isDarkTheme ? "header" : "header light"}>
      <div className="title-theme-div">
        <h1 className="title">Todo</h1>
        <div className="theme-switcher">
          <img
            onClick={toggleTheme}
            src={isDarkTheme ? DarkthemeIcon : LightthemeIcon}
            alt={isDarkTheme ? "Sun" : "moon"}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
