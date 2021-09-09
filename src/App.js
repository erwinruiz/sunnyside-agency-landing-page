import classes from "./App.module.css";
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
    </div>
  );
}

export default App;
