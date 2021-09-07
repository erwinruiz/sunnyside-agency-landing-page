import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img
        className={classes.bg}
        src="./images/mobile/image-header.jpg"
        alt="header bg"
      />
      <div className={classes.icons}>
        <img src="./images/logo.svg" alt="logo" />
        <img
          className={classes.navIcon}
          src="./images/icon-hamburger.svg"
          alt="menu icon"
        />
      </div>
      <h1>We are creatives</h1>
      <div className={classes.arrow}>
        <img src="./images/icon-arrow-down.svg" alt="arrow down" />
      </div>
    </header>
  );
}

export default Header;
