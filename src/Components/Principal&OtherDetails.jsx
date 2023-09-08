import React from 'react'
import presiImg from "../Images/president.jpg"
import PrinImg from "../Images/principal.jpg"
import { Link } from 'react-router-dom'
import ilink from "../Images/link.jpg"
const PrincipalandOtherDetails = () => {
    return (

        <div>
            <div className='ppMainContainer'>

                <div className="item1">
                    <div className="innerContainer">
                        <h3 className='headin'><b>
                            Our President
                        </b>
                        </h3>
                        <Link to="/ourPresident" >
                            <img src={presiImg} alt="" />
                        </Link>
                        <br />
                        <h5>
                            <b>
                                Shri Dr. P.A. Inamdar
                            </b>
                        </h5>
                    </div>
                </div>
                <div className="item2">
                    <div className="innerContainer">
                        <h3 className='headin'>
                            <b>
                                Our Principal
                            </b>
                        </h3>
                        <Link to="/ourPrincipal">
                            <img src={PrinImg} height="300px" alt="" />
                        </Link>
                        <br />
                        <h5>
                            <b>
                                Dr. Ramandeep Dugal
                            </b>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="messageContainer">
                <Link className='msgLinkLeft' to="/aboutUs/presidentSirMessage">Message from Our President</Link>
                <Link className='msgLink' to="/aboutUs/principalMessage">Message from out Principal</Link>
            </div>
            <div className="BFaOC">
                <div className="head">
                    Creating a Brighter Future
                </div>
                <div className="content">
                    <p>
                        At M.A. Rangoonwala College of Dental Sciences & Research Centre, Pune, we are committed to spirited learning, growth and professional development. We empower our students to ask insightful questions, explore disciplinary boundaries, and confront conventional ways of thinking. We invite you to learn more about M.A. Rangoonwala College of Dental Sciences & Research Centre, Pune and discover an education built for you.
                    </p>
                </div>
            </div>
            <div className="uCIL container">
                <div className="uc">
                    <p className='heade'>
                        Up-Coming Events
                    </p>
                    <div className="impLinks">
                        <img src={ilink} alt="" className="imgLink" />
                        <Link className="lnk" to="/publicHealthMinistry">
                            Dept Of Public Health Ministry
                        </Link>
                    </div>
                </div>
                <div className="il">
                    <p className='heade'>
                        Important Links
                    </p>
                    <div className="impLinks">
                        <Link className='lnk' to="
                        /bdsfp">
                            <img src={ilink} alt="" className="imgLink" />
                            BDS FEES PROPOSAL 2023-24
                        </Link>
                        <br />
                        <Link className='lnk' to="
                        /mdsfp">
                            <img src={ilink} alt="" className="imgLink" />
                            MDS FEES PROPOSAL 2023-24
                        </Link>
                        <br />
                        <Link className='lnk' to="
                        /newsletter">
                            <img src={ilink} alt="" className="imgLink" />
                            News Letter
                        </Link>
                        <br />
                        <Link className='lnk' to="
                        /newsletter">
                            <img src={ilink} alt="" className="imgLink" />
                            List of selected Candidates of Institutional Level Round-1
                            (Institutional Quota)
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrincipalandOtherDetails
