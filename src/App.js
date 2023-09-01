import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/" Component={Home} />
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;
