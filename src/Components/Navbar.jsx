import React,{useState} from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);
  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!nestedDropdownOpen);
  };
  
  const [ dropdownOpenAbout, setDropdownOpenAbout ] = useState( false );
  const toggleDropdownAbout = () => {
    setDropdownOpenAbout(!dropdownOpenAbout);
  };
  
  const [dropdownOpenAdmissions, setDropdownOpenAdmissions] = useState(false);
  const toggleDropdownAdmissions = () => {
    setDropdownOpenAdmissions(!dropdownOpenAdmissions);
  };

  const [dropdownOpenStudents, setDropdownOpenStudents] = useState(false);
  const toggleDropdownStudents = () => {
    setDropdownOpenStudents(!dropdownOpenStudents);
  };

  const [dropdownOpenAcademics, setDropdownOpenAcademics] = useState(false);
  const toggleDropdownAcademics = () => {
    setDropdownOpenAcademics(!dropdownOpenAcademics);
  };
  const [dropdownOpenPatientCare, setDropdownOpenPatientCare] = useState(false);
  const toggleDropdownPatientCare = () => {
    setDropdownOpenPatientCare(!dropdownOpenPatientCare);
  };
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse topnav dropdown-container" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link mx-2" aria-current="page" to="/home">Home</Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link className="nav-link mx-2 dropdown-toggle" to="/aboutus" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About us
                </Link>
                <ul className="dropdown-menu dropdown-content">
                  <li><Link className="dropdown-item" to="/aboutUs/aboutCollege">About College</Link></li>
                  <li><Link className="dropdown-item" to="/aboutUs/mission&vision">Mission & Vision</Link></li>
                  <li><Link className="dropdown-item" to="/aboutUs/presidentSirMessage">President Sir's Message</Link></li>
                  <li><Link className="dropdown-item" to="/aboutUs/principalMessage">Principal's Message</Link></li>
                  <li><Link className="dropdown-item" to="/aboutUs/vicePrincipal">Vice-Principal</Link></li>
                  <li><Link className="dropdown-item" to="/aboutUs/story&futureGoals">Our Story & Future Goals</Link></li>
                  <li><Link className="dropdown-item" to="/aboutUs/institutionalCommittiees">Institutional Committees</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link mx-2 dropdown-toggle" to="/home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admissions
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/admissions/applicationGuidelines">Application Guidelines</Link></li>
                  <li><Link className="dropdown-item" to="/admissions/admission&affilation">Admission & Affilation</Link></li>
                  <li><Link className="dropdown-item" to="/admissions/courses">Courses</Link></li>
                  <li><Link className="dropdown-item" to="/admissions/curriculum">Curriculum</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link mx-2 dropdown-toggle" to="/home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Students
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/students/duties">Duties</Link></li>
                  <li><Link className="dropdown-item" to="/students/antiRagging">Anti Ragging</Link></li>
                  <li><Link className="dropdown-item" to="/students/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/students/studentsCouncil">Students Council:Members,Duties</Link></li>
                  <li><Link className="dropdown-item" to="/students/hostel">Hostel</Link></li>
                  <li><Link className="dropdown-item" to="/students/healthCare&immunizationPolicy">Health Cate & Immunization Policy</Link></li>
                  <li><Link className="dropdown-item" to="/students/mentor-menteeProgram">Mentor-Mentee Program</Link></li>
                  <li><Link className="dropdown-item" to="/students/codeOfConduct">Code Of Conduct</Link></li>
                  <li className="nav-item dropdown">
                    <Link className=" dropdown-toggle" to="/students/alumini" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Alumni
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/students/alumini/applicationGuidelines">Alumini Registratin Portal</Link></li>
                    <li><Link className="dropdown-item" to="/students/alumini/admission&affilation">Alumini Associatin Committee</Link></li>
                  </ul>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className="nav-link mx-2" aria-current="page" to="/departments">Departments</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link mx-2 dropdown-toggle" to="/patientCare" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Patient Care
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/patientCare/facilities">Facilities</Link></li>
                  <li><Link className="dropdown-item" to="/patientCare/concessions">Concessions</Link></li>
                </ul>
              </li>
              <li>
                <Link className="nav-link mx-2" to="/news&events">News & Events</Link>
              </li>
              <li>
                <Link className="nav-link mx-2" to="/nss">NSS</Link>
              </li>
              <li>
                <Link className="nav-link mx-2" to="/muhsMandate">MUHS Mandate</Link>
              </li>
            </ul>
          </div>
        </div>
     </nav> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary bnav">
        <div className='mx-2 navcont'>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li >
                <Link className="nav-link  mx-2 active link" aria-current="page" to="/home">HOME</Link>
            </li>
            <li>
                <div className="dropdown-container link mx-2" onMouseLeave={toggleDropdownAbout}>
                  <div
                    className={`dropdown-trigger ${dropdownOpenAbout ? "open" : ""}`}
                    onMouseEnter={toggleDropdownAbout}
                    
                  >
                    ABOUT US
                  </div>
                  {dropdownOpenAbout && (
                    <div className="dropdown-content mx-4 dropdown-item" >
                      <Link className='drpdnlink' to="/aboutUs/aboutCollege">About College</Link><br/>
                      <Link className='drpdnlink' to="/aboutUs/mission&vision">Mission & Vision</Link><br/>
                      <Link className='drpdnlink' to="/aboutUs/presidentSirMessage">President Sir's Message</Link><br />
                      <Link className="drpdnlink" to="/aboutUs/principalMessage">Principal's Message</Link><br />
                      <Link className="drpdnlink" to="/aboutUs/vicePrincipal">Vice-Principal</Link><br />
                      <Link className="drpdnlink" to="/aboutUs/story&futureGoals">Our Story & Future Goals</Link><br />
                      <Link className="drpdnlink" to="/aboutUs/institutionalCommittiees">Institutional Committees</Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div className="dropdown-container link" onMouseLeave={toggleDropdownAdmissions}>
                  <div
                    className={`dropdown-trigger ${dropdownOpenAdmissions ? "open" : ""}`}
                    onMouseEnter={toggleDropdownAdmissions}
                  >
                  ADMISSIONS
                  </div>
                  {dropdownOpenAdmissions && (
                    <div className="dropdown-content mx-4 dropdown-item ">
                      <Link className="drpdnlink" to="/students/applicationGuidelines">Application Guidelines</Link><br/>
                      <Link className="drpdnlink" to="/admissions/admission&affilation">Admission & Affilation</Link><br/>
                      <Link className="drpdnlink" to="/admissions/courses">Courses</Link><br/>
                      <Link className="drpdnlink" to="/admissions/curriculum">Curriculum</Link><br/>
                    </div>
                  )}
                </div>
              </li> 
              <li>
                <div className="dropdown-container link" onMouseLeave={toggleDropdownStudents}>
                  <div
                    className={`dropdown-trigger ${dropdownOpenStudents ? "open" : ""}`}
                    onMouseEnter={toggleDropdownStudents}
                  >
                  STUDENTS
                  </div>
                  {dropdownOpenStudents && (
                    <div className="dropdown-content mx-4 dropdown-item ">
                      <Link className="drpdnlink" to="/students/duties">Duties</Link><br/>
                      <Link className="drpdnlink" to="/students/anit-ragging">Anti-Ragging</Link><br/>
                      <Link className="drpdnlink" to="/students/sports">Sports</Link><br/>
                      <Link className="drpdnlink" to="/students/studentsCouncil">Students Council:Members,Duties</Link><br />
                      <Link className="drpdnlink" to="/students/hostel">Hostel</Link><br />
                      <Link className="drpdnlink" to="/students/healthCare&immunizationPolicy">Health Cate & Immunization Policy</Link><br />
                      {/* **** Alumi TODO **** */}
                    </div>
                  )}
                </div>
            </li>
             <li>
                <div className="dropdown-container link" onMouseLeave={toggleDropdownAcademics}>
                  <div
                    className={`dropdown-trigger ${dropdownOpenAcademics ? "open" : ""}`}
                    onMouseEnter={toggleDropdownAcademics}
                  >
                  ACADEMICS
                  </div>
                  {dropdownOpenAcademics && (
                    <div className="dropdown-content mx-4 dropdown-item ">
                      <Link className="drpdnlink" to="/academics/academicCalendar">Academic Calendar</Link><br/>
                      <Link className="drpdnlink" to="/academics/learningPathways">Learning Pathways</Link><br/>
                      <Link className="drpdnlink" to="/academics/innovativeTeachingActivities">Innovative Teaching Activities</Link><br/>
                      <Link className="drpdnlink" to="/academics/extraCurricularActivities">Extra Curricular Activities</Link><br />
                      <Link className="drpdnlink" to="/academics/listOfHolidays">List Of Holidays</Link><br />
                      <Link className="drpdnlink" to="/academics/syllabus">Syllabus</Link><br />
                      <Link className="drpdnlink" to="/academics/research">Research</Link><br />
                      <Link className="drpdnlink" to="/academics/libraryFacilities">Library Facilities</Link><br/>
                    </div>
                  )}
                </div>
            </li> 
            <li >
                <Link className="nav-link  mx-2 active link" aria-current="page" to="/departments">DEPARTMENTS</Link>
            </li>
            <li>
                <div className="dropdown-container link" onMouseLeave={toggleDropdownPatientCare}>
                  <div
                    className={`dropdown-trigger ${dropdownOpenPatientCare ? "open" : ""}`}
                    onMouseEnter={toggleDropdownPatientCare}
                  >
                  ADMISSIONS
                  </div>
                  {dropdownOpenPatientCare && (
                    <div className="dropdown-content mx-4 dropdown-item ">
                      <Link className="drpdnlink" to="/patientCare/facilities">Facilities</Link><br/>
                      <Link className="drpdnlink" to="/patientCare/concessions">Concessions</Link><br/>
                    </div>
                  )}
                </div>
            </li> 
             <li>
                <Link className="nav-link mx-2 link" to="/news&events">NEWS & EVENTS</Link>
              </li>
              <li>
                <Link className="nav-link mx-2 link" to="/nss">NSS</Link>
              </li>
              <li>
                <Link className="nav-link mx-2 link" to="/muhsMandate">MUHS MANDATE</Link>
              </li>
          </ul>
        </div>
      </nav>
    </>

  )
}

export default Navbar;

