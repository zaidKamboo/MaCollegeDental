import "./StudentsCouncilMembersList.css"
import React from 'react'
import arrow from "../../../Images/link.jpg"

const StudentsCouncilMembersLIst = () => {
    return (
        <div className="mainContainer">
            <h2 className="header">
                Students Council : Members List
            </h2>
            <div className="content">
                <img src={arrow} className="link" alt="" />
                <a href="https://mardentalcollege.org/wp-content/uploads/2022/05/COLLEGE-STUDENTS-COUNCIL.pdf" target="__blank" className="li">COLLEGE STUDENTS COUNCIL</a>
            </div>
        </div>
    )
}

export default StudentsCouncilMembersLIst
