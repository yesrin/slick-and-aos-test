import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Imagescroll from "./components/Image scroll";

function App() {
  return (
    <Router>
      <Navbar />
      <body>
        <Imagescroll />
      </body>
      <footer></footer>
    </Router>
  );
}

export default App;
