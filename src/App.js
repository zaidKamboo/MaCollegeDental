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
import ApplicationGuidelines from "./Components/Admissions/ApplicationGuidelines";
import AdmissionsAndAffilation from "./Components/Admissions/AdmissionsAndAffilation";
import Courses from "./Components/Admissions/Courses";
import Curriculum from "./Components/Admissions/Curriculum";
import AntiRagging from "./Components/Students/AntiRagging/AntiRagging";
import Sports from "./Components/Students/Sports/Sports";
import StudentsCouncilMembersLIst from "./Components/Students/StudentsCouncil/StudentsCouncilMembersLIst";
import Hostel from "./Components/Students/Hostel/Hostel";
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
        <Route exact path="/admissions/applicationGuidelines" Component={ApplicationGuidelines} />
        <Route exact path="/admissions/admission&affilation" Component={AdmissionsAndAffilation} />
        <Route exact path="/admissions/courses" Component={Courses} />
        <Route exact path="/admissions/curriculum" Component={Curriculum} />
        <Route exact path="/students/anti-ragging" Component={AntiRagging} />
        <Route exact path="/students/sports" Component={Sports} />
        <Route exact path="/students/studentsCouncil" Component={StudentsCouncilMembersLIst} />
        <Route exact path="/students/hostel" Component={Hostel} />
      </Routes>
      <CopyrightDetails />
      <Footer />
    </Router>
  );
}

export default App;
