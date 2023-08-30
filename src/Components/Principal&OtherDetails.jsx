import React from 'react'
import presiImg from "../president.jpg"
import PrinImg from "../principal.jpg"
import { Link } from 'react-router-dom'
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
                        <img src={presiImg} alt="" />
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
                        <img src={PrinImg} height="300px" alt="" />
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
        </div>
    )
}

export default PrincipalandOtherDetails
