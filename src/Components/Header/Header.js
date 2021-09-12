import classes from "./Header.module.css";
import NavMenu from "./NavMenu";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenuHandler = () => {
    setOpenMenu((state) => !state);
  };

  return (
    <header className={classes.header}>
      <img
        className={classes.bgMobile}
        src="./images/mobile/image-header.jpg"
        alt="header bg"
      />
      <img
        className={classes.bgDesktop}
        src="./images/desktop/image-header.jpg"
        alt="header bg"
      />
      <div className={classes.icons}>
        <img src="./images/logo.svg" alt="logo" />
        <img
          onClick={toggleMenuHandler}
          className={classes.navIcon}
          src="./images/icon-hamburger.svg"
          alt="menu icon"
        />
        <div className={classes.navMenu}>
          <NavMenu />
        </div>
      </div>
      {openMenu && (
        <div className={classes.modalAndMenuContainer}>
          <div className={classes.modal} onClick={toggleMenuHandler} />
          <NavMenu />
        </div>
      )}
      <h1>We are creatives</h1>
      <div className={classes.arrow}>
        <img src="./images/icon-arrow-down.svg" alt="arrow down" />
      </div>
    </header>
  );
}

export default Header;
