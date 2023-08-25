import React,{useState} from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
   const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!nestedDropdownOpen);
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary topnav">
        <div className='mx-2 navcont'>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li >
               <Link className="nav-link mx-2 active " aria-current="page" to="/home">HOME</Link>
          </li>
          <li>
              <div className="dropdown-container mx-2" onMouseLeave={toggleDropdown}>
                <div
                  className={`dropdown-trigger ${dropdownOpen ? "open" : ""}`}
                  onMouseEnter={toggleDropdown}
                  
                >
                  ABOUT US
                </div>
                {dropdownOpen && (
                  <div className="dropdown-content mx-4 dropdown-item" >
                    
                    <Link to="/aboutUs/aboutCollege">About College</Link><br/>
                    <Link to="/aboutUs/mission&vision">Mission & Vision</Link><br/>
                    <Link to="/something" >Option 3</Link><br/>
                  </div>
                )}
              </div>
          </li>
          <li>
            
              <div className="dropdown-container" onMouseLeave={toggleDropdown}>
                <div
                  className={`dropdown-trigger ${dropdownOpen ? "open" : ""}`}
                  onMouseEnter={toggleDropdown}
                >
                ADMISSIONS
                </div>
                {dropdownOpen && (
                  <div className="dropdown-content">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                  </div>
                )}
              </div>
          </li>
          </ul>
        </div>
      </nav>
    </>

  )
}

export default Navbar;

