import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Services />
    </div>
  );
}

export default App;
