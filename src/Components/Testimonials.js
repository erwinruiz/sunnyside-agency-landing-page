import classes from "./Testimonials.module.css";
import { clients } from "../db/index";

function Testimonials() {
  return (
    <section className={classes.container}>
      <h1>Client testimonials</h1>
      {clients.map((client, i) => (
        <div key={i} className={classes.testimonial}>
          <img src={client.img} alt={client.altImg} />
          <p className={classes.description}>{client.text}</p>
          <h3>{client.name}</h3>
          <p className={classes.role}>{client.role}</p>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;
