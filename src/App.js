import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import CopyrightDetails from "./Components/CopyrightDetails/CopyrightDetails"
import AboutCollege from "./Components/AboutUS/AboutCollege/AboutCollege";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MissionAndVision from "./Components/AboutUS/MisssionAndVision/MissionAndVision";
import PresidentSirsMessage from "./Components/AboutUS/PresidentSir'sMessge/PresidentSir'sMessage";
import PrincipalsMessage from "./Components/AboutUS/Principal'sMessage/PrincipalsMessage";
import VicePrincipal from "./Components/AboutUS/VicePrincipal/VicePrincipal";
import OurStoryAndFutureGoals from "./Components/AboutUS/OurStoryAndFutureGoals/OurStoryAndFutureGoals";
import InstitutionalCommittees from "./Components/AboutUS/InstitutionalCommittees/InstitutionalCommittees";
import ApplicationGuidelines from "./Components/Admissions/ApplicationGuidelines/ApplicationGuidelines";
import AdmissionsAndAffilation from "./Components/Admissions/AdmissionsAndAffilation/AdmissionsAndAffilation";
import Courses from "./Components/Admissions/Courses/Courses";
import Curriculum from "./Components/Admissions/Curriculum/Curriculum";
import AntiRagging from "./Components/Students/AntiRagging/AntiRagging";
import Sports from "./Components/Students/Sports/Sports";
import StudentsCouncilMembersLIst from "./Components/Students/StudentsCouncil/StudentsCouncilMembersLIst";
import Hostel from "./Components/Students/Hostel/Hostel";
import HealthCareAndImmunizationPolicy from "./Components/Students/HealthCareAndImmunizationPolicy/HealthCareAndImmunizationPolicy";
import MentorMenteeProgram from "./Components/Students/MentorMenteeProgram/MentorMenteeProgram";
import NestedDropdown from "./Components/NestedDropdown/NestedDropdown";
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
        <Route exact path="/students/healthCare&immunizationPolicy" Component={HealthCareAndImmunizationPolicy} />
        <Route exact path="/students/mentorMenteeProgram" Component={MentorMenteeProgram} />
      </Routes>
      <NestedDropdown/>
      <CopyrightDetails />
      <Footer />
    </Router>
  );
}

export default App;
