import Service from "./Service";
import { services } from "../../db/index";

function Services() {
  return (
    <section id="services">
      {services.map((service, i) => (
        <Service
          key={i}
          bgImgMobile={service.bgImgMobile}
          bgImgDesktop={service.bgImgDesktop}
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
