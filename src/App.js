import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ImageScroll from "./components/ImageScroll";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <Navbar />
      <body>
        <Carousel />
        <ImageScroll />
      </body>
      <footer></footer>
    </Router>
  );
}

export default App;
