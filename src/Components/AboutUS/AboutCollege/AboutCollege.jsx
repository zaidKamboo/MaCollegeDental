import React from 'react'
import "./AboutCollege.css"
const AboutCollege = () => {
    return (
        <div className="aboutContainer">
            <h2 className="header">
                About College
            </h2>
            <div className="aboutCont">
                M. A. Rangoonwala College of Dental Sciences and Research Centre was established in the year 1998 and is accredited by Dental Council of India and affiliated to the Maharashtra University of Health Sciences, Nashik. The college is situated in the city of Pune, in Maharashtra state, India.<br />
                The college offers the following courses:
                <ol>
                    <li>BDS</li>
                    <li>MDS</li>

                    <br />
                    MDS courses are offered across 8 major dental specialities , mentioned as follows:
                    <ul>
                        <li>Oral and Maxillofficial Surgery</li>
                        <li>Conservative Dentistry and Endodontics</li>
                        <li>Orthodontics & Dentofacial Orthopaedics</li>
                        <li>Oral Medicine and Radiology</li>
                        <li>Prosthodontics and Crown & Bridge</li>
                        <li>Pediatric and Preventive Dentistry</li>
                        <li>Public Health Dentistry</li>
                        <li>Periodontology</li>
                    </ul>
                    <li>Certification Course in Maxillofacial Prosthodontics in Collaboration with IMPT, UK. </li>
                    <li> Diploma in Dental Laser in coordination with SOLA. (Society of Laser Application) and Faculty from University of Vienna, Austria. </li>
                    <li>Recognised IGNOU centre for Diploma in Endodontics.</li>
                    <li> Student Exchange programme for our students with Kings College, London.</li>
                </ol>
                <div className="conclusion">
                    The college is dedicated to fulfilling the educational pursuits of the students with help of modern infrastructure and the faculty
                    that infuse their teachings and research with the diverse dental and medical perspectives. Our zealous faculty has brought glory to the college with several paper presentations and publications at both the national and international levels.
                </div>
            </div>
        </div>
    )
}

export default AboutCollege
