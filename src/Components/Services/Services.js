import Service from "./Service";
import classes from "./Services.module.css";
import { services } from "../../db/index";

function Services() {
  return (
    <section id="services" className={classes.container}>
      {services.map((service, i) => (
        <Service
          key={i}
          bgImg={service.bgImg}
          altImg={service.altImg}
          title={service.title}
          description={service.description}
          learnMore={service.learnMore}
        />
      ))}
    </section>
  );
}

export default Services;
