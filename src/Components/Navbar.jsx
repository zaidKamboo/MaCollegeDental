import React, { useState } from 'react';
import logo from "../Images/navbarlogo.webp";
import more from "../Images/hamburger.png"
import { Link } from "react-router-dom";

import downarrow from "../Images/downarrow.png";
import "./CSS/TopNav.css"
import "./CSS/Navbar.css"
const NavbarTop = () => {

  const [dropdownOpenAbout, setDropdownOpenAbout] = useState(false);
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
  const [Menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!Menu);
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
      console.log("hello")
      x.className += "respNav"
    }
    else {
      x.className = "navbar"
    }
  }

  return (
    <div className='Navbar'>
      <div className='navbarTop'>
        <Link className="navbar-logo" to="/home">
          <img className='logo' src={logo} alt="" />
        </Link>
        <h4 className='CollegeTitle'>
          M. A. Rangoonwala College of Dental Sciences & Research Centre, Pune
        </h4>
        <img className='moreOpt' src={more} onClick={toggleMenu} alt="" />
      </div >
      <div className="navbarBottom">
        <nav className="navbar" id='nav'>
          <ul className="nav-items navbar-nav">
            <li className='navLinks'>
              <Link className="navLink " id="home" aria-current="page" to="/">HOME</Link>
            </li>

            <p className='nav-link oropt'>
              |
            </p>

            <li className="navLinks">
              <div className="dropdown-container link " onMouseLeave={toggleDropdownAbout}>
                <div
                  className={`dropdown-trigger  navLink ${dropdownOpenAbout ? "open" : ""}`}
                  onMouseEnter={toggleDropdownAbout}

                >
                  ABOUT US
                  <img src={downarrow} className='downArrow link' alt="" />
                </div>
                {dropdownOpenAbout && (
                  <div className="dropdown-content dropdown-item" >
                    <div className="divdropdownLink">
                      <Link className='drpdnlink' to="/aboutUs/aboutCollege">About College</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className='drpdnlink' to="/aboutUs/mission&vision">Mission & Vision</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className='drpdnlink' to="/aboutUs/presidentSirMessage">President Sir's Message</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/aboutUs/principalMessage">Principal's Message</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/aboutUs/vicePrincipal">Vice-Principal</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/aboutUs/story&futureGoals">Our Story & Future Goals</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/aboutUs/institutionalCommittiees">Institutional Committees</Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li className="navLinks">
              <div className="dropdown-container link " onMouseLeave={toggleDropdownAdmissions}>
                <div
                  className={`dropdown-trigger  navLink ${dropdownOpenAdmissions ? "open" : ""}`}
                  onMouseEnter={toggleDropdownAdmissions}
                >
                  ADMISSIONS
                  <img src={downarrow} className='downArrow link' alt="" />
                </div>
                {dropdownOpenAdmissions && (
                  <div className="dropdown-content  dropdown-item ">
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/admissions/applicationGuidelines">Application Guidelines</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/admissions/admission&affilation">Admission & Affilation</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/admissions/courses">Courses</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/admissions/curriculum">Curriculum</Link><br />
                    </div>
                  </div>
                )}
              </div>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li className="navLinks">
              <div className="dropdown-container  link" onMouseLeave={toggleDropdownStudents}>
                <div
                  className={`dropdown-trigger navLink ${dropdownOpenStudents ? "open" : ""}`}
                  onMouseEnter={toggleDropdownStudents}
                >
                  STUDENTS
                  <img src={downarrow} className='downArrow link' alt="" />
                </div>
                {dropdownOpenStudents && (
                  <div className="dropdown-content  dropdown-item ">
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/duties">Duties</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/anit-ragging">Anti-Ragging</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/sports">Sports</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/studentsCouncil">Students Council:Members,Duties</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/hostel">Hostel</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/healthCare&immunizationPolicy">Health Cate & Immunization Policy</Link><br />
                    </div>
                  </div>
                )}
              </div>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li className="navLinks">
              <div className="dropdown-container link" onMouseLeave={toggleDropdownAcademics}>
                <div
                  className={`dropdown-trigger navLink ${dropdownOpenAcademics ? "open" : ""}`}
                  onMouseEnter={toggleDropdownAcademics}
                >
                  ACADEMICS
                  <img src={downarrow} className='downArrow link' alt="" />
                </div>
                {dropdownOpenAcademics && (
                  <div className="dropdown-content  dropdown-item ">
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/academics/academicCalendar">Academic Calendar</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/academics/learningPathways">Learning Pathways</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/academics/innovativeTeachingActivities">Innovative Teaching Activities</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/academics/extraCurricularActivities">Extra Curricular Activities</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/academics/listOfHolidays">List Of Holidays</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/academics/syllabus">Syllabus</Link><br />
                    </div>
                    <div className="divdropdownLInk">
                      <Link className="drpdnlink" to="/academics/research">Research</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/academics/libraryFacilities">Library Facilities</Link><br />
                    </div>
                  </div>
                )}
              </div>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li >
              <Link className="nav-link  mx-2 active link" aria-current="page" to="/departments">DEPARTMENTS</Link>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li className="navLinks">
              <div className="dropdown-container link" onMouseLeave={toggleDropdownPatientCare}>
                <div
                  className={`dropdown-trigger navLink ${dropdownOpenPatientCare ? "open" : ""}`}
                  onMouseEnter={toggleDropdownPatientCare}
                >
                  ADMISSIONS
                  <img src={downarrow} className='downArrow link' alt="" />
                </div>
                {dropdownOpenPatientCare && (
                  <div className="dropdown-content  dropdown-item ">
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/patientCare/facilities">Facilities</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/patientCare/concessions">Concessions</Link><br />
                    </div>
                  </div>
                )}
              </div>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li className="navLinks">
              <Link className="nav-link mx-2 navLink" to="/news&events">NEWS & EVENTS</Link>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li className="navLinks">
              <Link className="nav-link mx-2 navLink" to="/nss">NSS</Link>
            </li>
          </ul>

        </nav >
        {/* <nav className="navbar navbar-expand-lg bnav mt-4 navbar-light bg-light">
          <div className='mx-2 navcont'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li >
                <Link className="nav-link mx-2 active link " aria-current="page" to="/">HOME</Link>
              </li>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <p className='nav-link oropt'>
                |
              </p>

              <li>
                <div className="dropdown-container link mx-2" onMouseLeave={toggleDropdownAbout}>
                  <div
                    className={`dropdown-trigger link ${ dropdownOpenAbout ? "open" : "" }`}
                    onMouseEnter={toggleDropdownAbout}

                  >
                    ABOUT US
                    <img src={downarrow} className='downArrow link' alt="" />
                  </div>
                  {dropdownOpenAbout && (
                    <div className="dropdown-content mx-4 dropdown-item" >
                      <div className="divdropdownLink">
                        <Link className='drpdnlink' to="/aboutUs/aboutCollege">About College</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className='drpdnlink' to="/aboutUs/mission&vision">Mission & Vision</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className='drpdnlink' to="/aboutUs/presidentSirMessage">President Sir's Message</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/aboutUs/principalMessage">Principal's Message</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/aboutUs/vicePrincipal">Vice-Principal</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/aboutUs/story&futureGoals">Our Story & Future Goals</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/aboutUs/institutionalCommittiees">Institutional Committees</Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <p className='nav-link oropt'>
                |
              </p>
              <li>
                <div className="dropdown-container link " onMouseLeave={toggleDropdownAdmissions}>
                  <div
                    className={`dropdown-trigger link ${ dropdownOpenAdmissions ? "open" : "" }`}
                    onMouseEnter={toggleDropdownAdmissions}
                  >
                    ADMISSIONS
                    <img src={downarrow} className='downArrow link' alt="" />
                  </div>
                  {dropdownOpenAdmissions && (
                    <div className="dropdown-content mx-4 dropdown-item ">
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/students/applicationGuidelines">Application Guidelines</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/admissions/admission&affilation">Admission & Affilation</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/admissions/courses">Courses</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/admissions/curriculum">Curriculum</Link><br />
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <p className='nav-link oropt'>
                |
              </p>
              <li>
                <div className="dropdown-container link" onMouseLeave={toggleDropdownStudents}>
                  <div
                    className={`dropdown-trigger link ${ dropdownOpenStudents ? "open" : "" }`}
                    onMouseEnter={toggleDropdownStudents}
                  >
                    STUDENTS
                    <img src={downarrow} className='downArrow link' alt="" />
                  </div>
                  {dropdownOpenStudents && (
                    <div className="dropdown-content mx-4 dropdown-item ">
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/students/duties">Duties</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/students/anit-ragging">Anti-Ragging</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/students/sports">Sports</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/students/studentsCouncil">Students Council:Members,Duties</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/students/hostel">Hostel</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/students/healthCare&immunizationPolicy">Health Cate & Immunization Policy</Link><br />
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <p className='nav-link oropt'>
                |
              </p>
              <li>
                <div className="dropdown-container link" onMouseLeave={toggleDropdownAcademics}>
                  <div
                    className={`dropdown-trigger link ${ dropdownOpenAcademics ? "open" : "" }`}
                    onMouseEnter={toggleDropdownAcademics}
                  >
                    ACADEMICS
                    <img src={downarrow} className='downArrow link' alt="" />
                  </div>
                  {dropdownOpenAcademics && (
                    <div className="dropdown-content mx-4 dropdown-item ">
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/academics/academicCalendar">Academic Calendar</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/academics/learningPathways">Learning Pathways</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/academics/innovativeTeachingActivities">Innovative Teaching Activities</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/academics/extraCurricularActivities">Extra Curricular Activities</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/academics/listOfHolidays">List Of Holidays</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/academics/syllabus">Syllabus</Link><br />
                      </div>
                      <div className="divdropdownLInk">
                        <Link className="drpdnlink" to="/academics/research">Research</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/academics/libraryFacilities">Library Facilities</Link><br />
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <p className='nav-link oropt'>
                |
              </p>
              <li >
                <Link className="nav-link  mx-2 active link" aria-current="page" to="/departments">DEPARTMENTS</Link>
              </li>
              <p className='nav-link oropt'>
                |
              </p>
              <li>
                <div className="dropdown-container link" onMouseLeave={toggleDropdownPatientCare}>
                  <div
                    className={`dropdown-trigger link ${ dropdownOpenPatientCare ? "open" : "" }`}
                    onMouseEnter={toggleDropdownPatientCare}
                  >
                    ADMISSIONS
                    <img src={downarrow} className='downArrow link' alt="" />
                  </div>
                  {dropdownOpenPatientCare && (
                    <div className="dropdown-content mx-4 dropdown-item ">
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/patientCare/facilities">Facilities</Link><br />
                      </div>
                      <div className="divdropdownLink">
                        <Link className="drpdnlink" to="/patientCare/concessions">Concessions</Link><br />
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <p className='nav-link oropt'>
                |
              </p>
              <li>
                <Link className="nav-link mx-2 link" to="/news&events">NEWS & EVENTS</Link>
              </li>
              <p className='nav-link oropt'>
                |
              </p>
              <li>
                <Link className="nav-link mx-2 link" to="/nss">NSS</Link>
              </li>
            </ul>
          </div>
        </nav> */}
        {/* <p className='nav-link oropt'>
        |
      </p>
      <li className="navLinks">
        <Link className="nav-link mx-2 link" to="/muhsMandate">MUHS MANDATE</Link>
      </li> */}
      </div>
    </div>
  )
}

export default NavbarTop;
