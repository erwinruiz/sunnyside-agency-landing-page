import classes from "./Gallery.module.css";

function Gallery() {
  return (
    <section className={classes.container}>
      <img
        src="./images/mobile/image-gallery-milkbottles.jpg"
        alt="milkbottles"
      />
      <img src="./images/mobile/image-gallery-orange.jpg" alt="orange" />

      <img src="./images/mobile/image-gallery-cone.jpg" alt="cone" />
      <img src="./images/mobile/image-gallery-sugar-cubes.jpg" alt="cubes" />
    </section>
  );
}

export default Gallery;
