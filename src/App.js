import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CopyrightDetails from "./Components/CopyrightDetails"
import AboutCollege from "./Components/AboutCollege";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MissionAndVision from "./Components/MissionAndVision";
import PresidentSirsMessage from "./Components/PresidentSir'sMessage";
import PrincipalsMessage from "./Components/PrincipalsMessage";
import VicePrincipal from "./Components/VicePrincipal";
import OurStoryAndFutureGoals from "./Components/OurStoryAndFutureGoals";
import InstitutionalCommittees from "./Components/InstitutionalCommittees";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/aboutUs/aboutCollege" Component={AboutCollege} />
        <Route exact path="/aboutUs/mission&vision" Component={MissionAndVision} />
        <Route exact path="/aboutUs/presidentSirMessage" Component={PresidentSirsMessage} />
        <Route exact path="/aboutUs/principalMessage" Component={PrincipalsMessage} />
        <Route exact path="/aboutUs/vicePrincipal" Component={VicePrincipal} />
        <Route exact path="/aboutUs/story&futureGoals" Component={OurStoryAndFutureGoals} />
        <Route exact path="/aboutUs/institutionalCommittiees" Component={InstitutionalCommittees} />

      </Routes>
      <CopyrightDetails />
      <Footer />
    </Router>
  );
}

export default App;
