import classes from "./App.module.css";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
