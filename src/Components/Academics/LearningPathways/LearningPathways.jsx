import React from 'react'
import "./LearningPathways.css"
import lp from "../../../Images/learning-pathways.jpg"
const LearningPathways = () => {
    return (
        <div className='mc'>
            <img src={lp} alt="" />
            <h2 className="lp">Learning Pathways</h2>
            <p>“The Best Teacher will tell you where to look but not what to see” – Alexandra K Trenfor</p>
            <p>We, at M.A Rangoolwala College of Dental Sciences & Research Centre, follow a student-centered learning approach along with a practical learning scenario for the effective overall development of our dental students.</p>
            <ul>
                <li>Seminars</li>
                <li>Online Lectures</li>
                <li>Demonstration sessions</li>
                <li>Use of Models & specimens from the department museums</li>
                <li>Integrated teaching</li>
                <li>Case Presentations</li>
                <li>Journal Clubs</li>
                <li>Inter-college Case Presentations</li>
                <li>Patient Case Discussions</li>
                <li>College Magazine</li>
                <li>Presentation of Papers/posters at Different Conferences</li>
                <li>Research Related discussions</li>
                <li>Digital access</li>
            </ul>
        </div>
    )
}

export default LearningPathways
