import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import CopyrightDetails from "./Components/CopyrightDetails/CopyrightDetails";
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
import CodeOfConduct from "./Components/Students/CodeOfConduct/CodeOfConduct";
import AluminiAssociationCommittee from "./Components/Students/Alumini/AluminiAssociationCommittee/AluminiAssociationCommittee";
import AcademicCalendar from "./Components/Academics/AcademicCalendar/AcademicCalendar";
import LearningPathways from "./Components/Academics/LearningPathways/LearningPathways";
import InnovativeTeachingActivities from "./Components/Academics/InnovativeTeachingActivities/InnovativeTeachingActivities";
import ExtraCurricularActivities from "./Components/Academics/ExtraCurricularActivities/ExtraCurricularActivities";
import ListOfHolidays from "./Components/Academics/ListOfHolidays/ListOfHolidays";
import Syallabus from "./Components/Academics/Syallabus/Syallabus";
import Research from "./Components/Academics/Research/Research";
import LibraryFacilities from "./Components/Academics/LibraryFacilities/LibraryFacilities";
import Facilities from "./Components/PatientCare/Facilities/Facilities";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/aboutUs/aboutCollege" Component={AboutCollege} />
        <Route
          exact
          path="/aboutUs/mission&vision"
          Component={MissionAndVision}
        />
        <Route
          exact
          path="/aboutUs/presidentSirMessage"
          Component={PresidentSirsMessage}
        />
        <Route
          exact
          path="/aboutUs/principalMessage"
          Component={PrincipalsMessage}
        />
        <Route exact path="/aboutUs/vicePrincipal" Component={VicePrincipal} />
        <Route
          exact
          path="/aboutUs/story&futureGoals"
          Component={OurStoryAndFutureGoals}
        />
        <Route
          exact
          path="/aboutUs/institutionalCommittiees"
          Component={InstitutionalCommittees}
        />
        <Route
          exact
          path="/admissions/applicationGuidelines"
          Component={ApplicationGuidelines}
        />
        <Route
          exact
          path="/admissions/admission&affilation"
          Component={AdmissionsAndAffilation}
        />
        <Route exact path="/admissions/courses" Component={Courses} />
        <Route exact path="/admissions/curriculum" Component={Curriculum} />
        <Route exact path="/students/anti-ragging" Component={AntiRagging} />
        <Route exact path="/students/sports" Component={Sports} />
        <Route
          exact
          path="/students/studentsCouncil"
          Component={StudentsCouncilMembersLIst}
        />
        <Route exact path="/students/hostel" Component={Hostel} />
        <Route
          exact
          path="/students/healthCare&immunizationPolicy"
          Component={HealthCareAndImmunizationPolicy}
        />
        <Route
          exact
          path="/students/mentorMenteeProgram"
          Component={MentorMenteeProgram}
        />
        <Route exact path="/students/codeOfConduct" Component={CodeOfConduct} />
        <Route
          exact
          path="/students/alumini/aluminiAssociationCommittee"
          Component={AluminiAssociationCommittee}
        />
        <Route
          exact
          path="/academics/academicCalendar"
          Component={AcademicCalendar}
        />
        <Route
          exact
          path="/academics/learningPathways"
          Component={LearningPathways}
        />
        <Route
          exact
          path="/academics/innovativeTeachingActivities"
          Component={InnovativeTeachingActivities}
        />
        <Route
          exact
          path="/academics/extraCurricularActivities"
          Component={ExtraCurricularActivities}
        />
        <Route
          exact
          path="/academics/listOfHolidays"
          Component={ListOfHolidays}
        />
        <Route exact path="/academics/syllabus" Component={Syallabus} />
        <Route exact path="/academics/research" Component={Research} />
        <Route exact path="/academics/libraryFacilities" Component={LibraryFacilities} />
        <Route exact path="/patientCare/facilities" Component={Facilities} />
      </Routes>
      <CopyrightDetails />
      <Footer />
    </Router>
  );
}

export default App;
