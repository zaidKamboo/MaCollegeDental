import "./App.css";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
