import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ImageScroll from "./components/ImageScroll";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Carousel />
        <ImageScroll />
      </Router>
    </div>
  );
}

export default App;
