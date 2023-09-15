import React from 'react';
import "./AcademicCalendar.css";
import Ac from "../../../Images/Academic-Calendar.jpg"


const AcademicCalendar = () => {
    return (
        <div className='mc'>
            <br />
            <img src={Ac} alt="" className="AC" />
            <h2 className='he'>
                Academic Calendar
            </h2>
            <strong>
                BDS
            </strong>
            <p className="para1">
                FIRST BDS LECTURE TIME TABLE 2021-2022 Summer (BDS) : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/FIRST-BDS-LECTURE-TIME-TABLE.pdf" target='__blank'>Time-Table</a>
            </p>
            <p className='para2'>
                SECOND BDS LECTURE TIME TABLE 2021-2022 Winter(BDS) : <a href="https://mardentalcollege.org/wp-content/uploads/2022/05/SECOND-BDS-LECTURE-TIME-TABLE.pdf" target='__blank'>Time-Table</a>
            </p>
            <p className='para3'>
                THIRD BDS LECTURE TIME TABLE 2021-2022 Winter(BDS) : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/THIRD-BDS-LECTURE-TIME-TABLE.pdf" target='__blank'>Time-Table</a>
            </p>
            <p className='para4'>
                FINAL BDS LECTURE TIME TABLE 2021-2022 Winter(BDS) : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/FINAL-BDS-LECTURE-TIME-TABLE.pdf" target='__blank'>Time-Table</a>
            </p>
            <strong>
                MDS
            </strong>
            <p className="para5">
                Part-I BASIC SCIENCES LECTURE TIME TABLE : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/MDS-I-BASIC-SCI.-LECTURE-TIME-TABLE.pdf" target='__blank'>Time-Table</a>
            </p>
            <p className="para6">
                DEPT. OF PERIODONTICS : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/DEPT.-OF-PERIODONTICS.pdf" target='__blank'>Time-Table</a>
            </p>
            <p className="para7">
                DEPT.OF PEDODONTICS : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/DEPT.-OF-PERIODONTICS.pdf" target='__blank'>Time-Table</a>
            </p>
            <p className="para8">
                DEPT. OF PROSTHODONTICS : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/DEPT.-OF-PROSTHODONTICS.pdf" target='__blank'>Time-Table</a>
            </p>
            <p className="para9">
                DEPT. OF CONSERVATIVE DENTISTRY & ENDODONTICS : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/DEPT.-OF-CONS-ENDO..pdf" target='__blank'>Time-Table</a>
            </p>
            <p className="para10">
                DEPT. OF ORAL MEDICINE & RADIOLOGY : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/DEPT.-OF-OMR.pdf" target='__blank'>Time-Table</a>
            </p>
            <p className="para11">
                DEPT. OF ORAL AND MAXILLOFACIAL SURGERY : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/DEPT.-OF-ORAL-SURGERY.pdf" target='__blank'>Time-Table</a>
            </p>
            <p className="para12">
                DEPT. OF ORTHODONTICS : <a className="alink" href="https://mardentalcollege.org/wp-content/uploads/2022/05/DEPT.-OF-ORTHODONTICS.pdf" target='__blank'>Time-Table</a>
            </p>
            <p>
                <strong>Learning Pathway –</strong>
            </p>
            <p>
                <strong>Innovative Teaching Activities : </strong>
            </p>
            <p>“The Best Teacher will tell you where to look but not what to see” – Alexandra K Trenfor</p>
            <p>We, at M.A Rangoolwala College of Dental Sciences & Research Centre, follow a student-centered learning approach along with a practical learning scenario for effective overall development of our dental students.</p>
            <ul className='ul'>
                <li>Seminars</li>
                <li>Online Lectures</li>
                <li>Demonstration sessions</li>
                <li>Use of Models & specimens from the department museums</li>
                <li>Integrated teaching</li>
                <li>Case Presentations </li>
                <li>Journal Clubs</li>
                <li>Inter-college Case Presentations</li>
                <li>Patient Case Discussions</li>
                <li>College Magazine</li>
                <li>Presentation of Papers/posters at Different Conferences</li>
                <li>Research Related discussions</li>
                <li>Digital access.</li>
            </ul>
        </div >
    )
}

export default AcademicCalendar
