import React from 'react'
import "../CSS/Admissions/Curriculum.css"
import link from "../../Images/link.jpg"
const Curriculum = () => {
    return (
        <div className='curriculumContainer'>
            <h2 className="curriculumHeader">Curriculum</h2>
            <p className="curriculumLinks">
                <img className='lnkAr' src={link} alt="arrow" />
                <a className='cclink' href="https://mardentalcollege.org/wp-content/uploads/2022/05/bds-2007.pdf" target='__blank'>BDS</a><br />
                <img className='lnkAr' src={link} alt="arrow" />
                <a className='cclink' href="https://mardentalcollege.org/wp-content/uploads/2022/05/mds-course-2017.pdf" target='__blank'>MDS</a>
            </p>
        </div>
    )
}

export default Curriculum
