import "./App.css";
import Navbar from "./components/Navbar";
import ImageScroll from "./components/ImageScroll";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Carousel />
      <ImageScroll />
    </div>
  );
}

export default App;
