import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MyNav title="My Book Shop" />
      <Footer />
    </div>
  );
}

export default App;
