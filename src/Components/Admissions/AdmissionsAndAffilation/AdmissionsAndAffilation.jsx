import React from 'react'
import "./AdmissionsAndAffilation.css"
import { Link } from 'react-router-dom'
import link from "../../../Images/link.jpg"
const AdmissionsAndAffilation = () => {
    return (
        <div className='AAContainer'>
            <h2 className="header">
                Admission & Affilation
            </h2>
            <ul className='ulLink'>
                <li>
                    <img src={link} className="linkImg" alt="" />
                    <Link className='links' target='__blank' to="https://mardentalcollege.org/wp-content/uploads/2023/07/BDS-Affiliation-2023-24.pdf">BDS Affilation letter</Link></li>
                <li><img src={link} className="linkImg" alt="" /><Link className='links' target='__blank' to="https://mardentalcollege.org/wp-content/uploads/2023/07/MDS-Affiliqation-2023-24.pdf">MDS Affilation letter</Link></li>
                <li><img src={link} className="linkImg" alt="" />MERIT LIST & SELECTED CANDIDATES FOR INSTITUTIONAL ROUND 3</li>
                <li><img src={link} className="linkImg" alt="" />LIST OF JOINED CANDIDATES _ VACANCY POSITION AFTER INSTITUTIONAL LEVEL ROUND-1 STATE QUOTA</li>
                <li><img src={link} className="linkImg" alt="" />LIST OF SELECTED CANDIDATES FOR INSTITUTIONAL LEVEL ROUND-2 STATE QUOTA</li>
                <li><img src={link} className="linkImg" alt="" />INSTITUTIONAL LEVEL ROUND-1 = STATE QUOTA LIST</li>
                <li><img src={link} className="linkImg" alt="" />LIST OF MDS 38 STUDENTS ADMISSION 2021-2022 FINAL</li>
            </ul>
        </div>
    )
}

export default AdmissionsAndAffilation
