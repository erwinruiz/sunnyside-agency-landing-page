import classes from "./Service.module.css";
import { Fragment } from "react";

function Service(props) {
  const { bgImg, altImg, title, description, learnMore } = props;
  return (
    <Fragment>
      {learnMore && (
        <div className={classes.container}>
          <img src={bgImg} alt={altImg} />
          <div className={classes.content}>
            <h2>{title}</h2>
            <p className={classes.description}>{description}</p>
            <div
              className={`${classes.learnMore} ${
                title === "Transform your brand"
                  ? classes.learnMoreYellow
                  : classes.learnMoreRed
              }`}
            >
              <p>Learn more</p>
            </div>
          </div>
        </div>
      )}
      {!learnMore && (
        <div
          className={`${classes.container2} ${
            title === "Graphic Design"
              ? classes.graphicDesign
              : classes.photography
          }`}
        >
          <img src={bgImg} alt={altImg} />
          <div className={classes.content}>
            <h2>{title}</h2>
            <p className={classes.description}>{description}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Service;
