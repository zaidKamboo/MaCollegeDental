import React from 'react'
import "./Courses.css"
import CoursesImage from "../../../Images/CoursesImg.jpg"
const Courses = () => {
    return (
        <div className='coursesContainer'>
            <div className="imgot"><img className='img' src={CoursesImage} alt="Courses" /><div className="text"><h1><b>Courses</b></h1></div></div>
            <div className="contentC"><b><h2 className='headCC'>BDS</h2></b>
                <p className='contentcc'><strong className="key">Course Level : </strong> Undergraduate</p>
                <p className='contentcc'><strong className="key">Duration : </strong>4 Years Course + 1 Year Internship</p>
                <p className='contentcc'><strong className="key">Eligibility : </strong>Minimum Marks in ‘National Eligibility-cum-Entrance Test’ held by National Testing agency for the said academic year + minimum prescribed marks at the qualifying examination i.e. Higher Secondary Certificate (HSC/12th Standard) or equivalent examination as prescribed by the respective central council</p>
                <p className='contentcc'><strong className="key">Intake Capacity : </strong>100</p>
                <p className='contentcc'>Admission link for UG (BDS course) :- <a className='linkA' href="https:/cetcell.net/UG_NEET_2021/">https:/cetcell.net/UG_NEET_2021/</a></p>
                <p className="contentcc">(For more information, please visit <a href=" https://cetcell.mahacet.org"> https://cetcell.mahacet.org</a> )</p>
            </div>
            <div className="contentC"><b><h2 className='headCC'>BDS</h2></b>
                <p className='contentcc'><strong className="key">Course Level : </strong> Post Graduate</p>
                <p className='contentcc'><strong className="key">Duration : </strong>3 Years Course</p>
                <p className='contentcc'><strong className="key">Eligibility : </strong> Minimum eligibility percentile/marks in NEET-MDS eligibility-cum-ranking examination held by<strong>(NSE) Competent Authority, Government of India, New Delhi </strong>said academic year+ passed final B.D.S examination from the dental college and completed/ completing one-year internship training by<strong>31st March(respective year)</strong></p>
                <p className='contentcc'><strong className="key">Intake Capacity : </strong>48 Students Per Year</p>
                <p className='contentcc'>Admission link for PG (MDS course) :- <a className='linkA' href="https://cetcell.net/PGD_2021/">https://cetcell.net/PGD_2021/</a></p>
                <p className="contentcc">(For more information, please visit <a href="https://cetcell.mahacet.org"> https://cetcell.mahacet.org</a> )</p>
            </div>
            <div className="table">
                <table class="tabla has-background">
                    <tbody>
                        <tr><td>SR.no</td><td>Subject </td><td>No. of seats</td><td>Status</td></tr>
                        <tr><td>1</td><td>Oral medicine &amp; Radiology</td><td>6</td><td>Approved/Recognised</td></tr>
                        <tr><td>2</td><td>Oral &amp; Maxillofacial Surgery</td><td>6</td><td>Approved/Recognised</td></tr>
                        <tr><td>3</td><td>Conservative Dentistry &amp; Endodontics</td><td>6</td><td>Approved/Recognised</td></tr>
                        <tr><td>4</td><td>Prosthodontics &amp; Crown &amp; Bridge &amp; Implantology</td><td>6</td><td>Approved/Recognised</td></tr>
                        <tr><td>5</td><td>Periodontology</td><td>6</td><td>Approved/Recognised</td></tr>
                        <tr><td>6</td><td>Oral Pathology</td><td>6</td><td>Approved/Recognised</td></tr>
                        <tr><td>7</td><td>Orthodontics &amp; Dentofacial Orthopedics</td><td>6</td><td>Approved/Recognised</td></tr>
                        <tr><td>8</td><td>Pedodontics &amp; Preventive Dentistry</td><td>6</td><td>Approved/Recognised</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Courses
