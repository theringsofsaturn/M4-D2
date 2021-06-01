import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="App">
      <MyNav title="My Book Shop" />
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default App;
