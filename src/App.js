import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
