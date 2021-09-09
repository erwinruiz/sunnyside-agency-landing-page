import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.container}>
      <img className={classes.logo} src="./images/logo-footer.svg" alt="logo" />
      <div className={classes.sectionsLinks}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
      </div>
      <div className={classes.socialLinks}>
        <img src="./images/icon-facebook.svg" alt="facebook logo" />
        <img src="./images/icon-instagram.svg" alt="instagram logo" />
        <img src="./images/icon-twitter.svg" alt="twitter logo" />
        <img src="./images/icon-pinterest.svg" alt="pinterest logo" />
      </div>
    </footer>
  );
}

export default Footer;
