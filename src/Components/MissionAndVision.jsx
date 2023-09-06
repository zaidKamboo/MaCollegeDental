import React from 'react'
import "./CSS/MissionAndVision.css"
const MissionAndVision = () => {
    return (
        <div className='missionAndVisionContainer'>
            <h2 className='mvhead'>
                Vision & Mission
            </h2>
            <h4 className="vision">
                Vision:
            </h4>
            <p className="visionContent">
                "To create future dental professionals to provide quality based compassionate care with an attitude of service before self"
            </p>
            <div className="missionContainer">
                <h4 className="mission">
                    Mission:
                </h4>
                <ul>
                    <li>
                        Impart education through evolution, innovation, research and development grants and national and international collaborations with world class institutions and organizations.
                    </li>
                    <li>
                        Provide state of the art patient care with emphasis on affordable treatments which will benefit all strata of society including the underprivileged.
                    </li>
                    <li>
                        Focus on increasing student skills as self – directed learners to promote leadership transfer and trust building in a ragging free & stress-free environment.
                    </li>
                    <li>
                        Maintains integrity in the fraternity, amplifying quality of teaching and learning with emphasis on transparency and work ethics.
                    </li>
                    <li>
                        Promote unity in diversity, secular practices and societal upliftment.
                    </li>
                    <li>
                        Encourage recruitment, development, retention and support of diverse group of meritorious students and faculty.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MissionAndVision
