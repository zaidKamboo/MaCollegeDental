// REACT IMPORTS
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// CSS IMPORTS
import "./TopNav.css"
import ".//Navbar.css"
// IMAGES IMPORTS
import logo from "../../Images/navbarlogo.webp";
import more from "../../Images/hamburger.png"
import downarrow from "../../Images/downarrow.png";

const NavbarTop = () => {

  const [ dropdownOpenAbout, setDropdownOpenAbout ] = useState( false );
  const toggleDropdownAbout = () => {
    setDropdownOpenAbout( !dropdownOpenAbout );
  };

  const [ dropdownOpenAdmissions, setDropdownOpenAdmissions ] = useState( false );
  const toggleDropdownAdmissions = () => {
    setDropdownOpenAdmissions( !dropdownOpenAdmissions );
  };

  const [ dropdownOpenStudents, setDropdownOpenStudents ] = useState( false );
  const toggleDropdownStudents = () => {
    setDropdownOpenStudents( !dropdownOpenStudents );
  };

  const [ dropdownOpenAcademics, setDropdownOpenAcademics ] = useState( false );
  const toggleDropdownAcademics = () => {
    setDropdownOpenAcademics( !dropdownOpenAcademics );
  };
  const [ dropdownOpenPatientCare, setDropdownOpenPatientCare ] = useState( false );
  const toggleDropdownPatientCare = () => {
    setDropdownOpenPatientCare( !dropdownOpenPatientCare );
  };
  const [ dropdownOpenAlumini, setDropdownOpenAlumini ] = useState( false );
  const toggleDropdownAlumini = () => {
    setDropdownOpenAlumini( !dropdownOpenAlumini );
  };
  const [ Menu, setMenu ] = useState( false )
  const toggleMenu = () => {
    setMenu( !Menu );
    var x = document.getElementById( "nav" );
    if ( x.className === "navbar" ) {
      console.log( "hello" )
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
          <ul className="nav-items na navbar-nav">
            <li className='navLinks'>
              <Link className="navLink" id="home" aria-current="page" to="/">HOME</Link>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li className="navLinks">
              <div className="dropdown-container " onMouseLeave={toggleDropdownAbout}>
                <div
                  className={`dropdown-trigger  navdrpdn ${ dropdownOpenAbout ? "open" : "" }`}
                  onMouseEnter={toggleDropdownAbout}
                >
                  ABOUT US
                  <img src={downarrow} className='downArrow' alt="" />
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
              <div className="dropdown-container" onMouseLeave={toggleDropdownAdmissions}>
                <div
                  className={`dropdown-trigger  navdrpdn ${ dropdownOpenAdmissions ? "open" : "" }`}
                  onMouseEnter={toggleDropdownAdmissions}
                >
                  ADMISSIONS
                  <img src={downarrow} className='downArrow' alt="" />
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
              <div className="dropdown-container" onMouseLeave={toggleDropdownStudents}>
                <div
                  className={`dropdown-trigger navdrpdn ${ dropdownOpenStudents ? "open" : "" }`}
                  onMouseEnter={toggleDropdownStudents}
                >
                  STUDENTS
                  <img src={downarrow} className='downArrow' alt="" />
                </div>
                {dropdownOpenStudents && (
                  <div className="dropdown-content  dropdown-item ">
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/duties">Duties</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/anti-ragging">Anti-Ragging</Link><br />
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
                      <Link className="drpdnlink" to="/students/healthCare&immunizationPolicy">Health Care & Immunization Policy</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/mentorMenteeProgram">Mentor-Mentee Program</Link><br />
                    </div>
                    <div className="divdropdownLink">
                      <Link className="drpdnlink" to="/students/codeOfConduct">Code of Conduct</Link><br />
                    </div>
                    <div className="dropdown-container" onMouseLeave={toggleDropdownAlumini} >
                      <div
                        className={`dropdown-trigger navdrpdn ${ dropdownOpenAlumini ? "open" : "" }`}
                        onMouseEnter={toggleDropdownAlumini}
                      >
                        Alumini
                        <img src={downarrow} className='downArrow ' alt="" />
                      </div>
                      {dropdownOpenAlumini && (
                        <div className="dropdown-content  dropdown-item ">
                          <div className="divdropdownLink">
                            <Link className="drpdnlink" to="/students/alumini/aluminiRegistrationPortal">Alumini Registration Portal </Link><br />
                          </div>
                          <div className="divdropdownLink">
                            <Link className="drpdnlink" to="/students/alumini/aluminiAssociationCommittee">Alumini Association Committee</Link><br />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li className="navLinks">
              <div className="dropdown-container " onMouseLeave={toggleDropdownAcademics}>
                <div
                  className={`dropdown-trigger navdrpdn ${ dropdownOpenAcademics ? "open" : "" }`}
                  onMouseEnter={toggleDropdownAcademics}
                >
                  ACADEMICS
                  <img src={downarrow} className='downArrow' alt="" />
                </div>
                {dropdownOpenAcademics && (
                  <div className="dropdown-content dropdown-item ">
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
                    <div className="divdropdownLink">
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
              <Link className="  mx-2 active navLink" aria-current="page" to="/departments">DEPARTMENTS</Link>
            </li>
            <p className='nav-link oropt'>
              |
            </p>
            <li className="navLinks">
              <div className="dropdown-container" onMouseLeave={toggleDropdownPatientCare}>
                <div
                  className={`dropdown-trigger navdrpdn ${ dropdownOpenPatientCare ? "open" : "" }`}
                  onMouseEnter={toggleDropdownPatientCare}
                >
                  PATIENT CARE
                  <img src={downarrow} className='downArrow ' alt="" />
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
              <Link className="mx-2 navLink" to="/nss">NSS</Link>
            </li>
          </ul>
        </nav >
      </div>
    </div>
  )
}

export default NavbarTop;
