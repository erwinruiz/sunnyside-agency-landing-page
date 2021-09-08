import classes from "./NavMenu.module.css";

function NavMenu() {
  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer}>
        <div className={classes.arrow} />
      </div>
      <nav className={classes.nav}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

export default NavMenu;
