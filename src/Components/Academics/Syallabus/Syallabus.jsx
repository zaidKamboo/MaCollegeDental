import React from 'react'
import link from "../../../Images/link.jpg"
import "./Syallabus.css"
const Syallabus = () => {
    return (
        <div className='mc'>
            <h1 className="hes">Syallabus</h1>
            <strong >
                <h5 className='courseName'>
                    BDS :
                </h5>
            </strong>
            <div className="ln">
                <img className='lin' src={link} alt="" /> <a target='__blank' href="https://mardentalcollege.org/wp-content/uploads/2022/05/newfbds_121001_17082012_1039.pdf">FIRST YEAR</a><br />
            </div>
            <div className="ln">
                <img className='lin' src={link} alt="" /> <a target='__blank' href="https://mardentalcollege.org/wp-content/uploads/2022/05/Second_Year_newsbds_121001_17082012_1123.pdf">SECOND YEAR</a><br />
            </div>
            <div className="ln">
                <img className='lin' src={link} alt="" /> <a target='__blank' href="https://mardentalcollege.org/wp-content/uploads/2022/05/Third_Year_newtbds121001_17082012_1123.pdf">THIRD YEAR</a><br />
            </div>
            <div className="ln">
                <img className='lin' src={link} alt="" /> <a target='__blank' href="https://mardentalcollege.org/wp-content/uploads/2022/05/Final_Year_newlbds_121001_17082012_1124.pdf">FINAL YEAR</a><br />
            </div>
            <strong >
                <h5 className='courseName'>
                    MDS :
                </h5>
            </strong>
            <div className="ln">
                <img className='lin' src={link} alt="" /> <a target='__blank' href="https://mardentalcollege.org/wp-content/uploads/2022/05/Oral-Maxillofacial-Surgery-SYLLABUS-PART-I.pdf">Oral Maxillofacial Surgery SYLLABUS PART-I</a><br />
            </div>
        </div >
    )
}

export default Syallabus
