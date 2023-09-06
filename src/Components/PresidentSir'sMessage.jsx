import React from 'react'
import "./CSS/PresidentSirsMessage.css"
import psimg from "../president.jpg"
const PresidentSirsMessage = () => {
    return (
        <div className='psmContainer'>
            <div className="psImg">
                <img src={psimg} alt="" className="psImge" />
                <div className="npm">
                    <h2 className='name'>Shri Dr. P. A. Inamdar Sir</h2>
                    <center className='pm'>President's Message</center>
                </div>
            </div>
            <center><h3 className='cn'>M. A. Rangoowala College of Dental Sciences & Research Centre, Pune
            </h3></center>
            <div className="paras">
                <p className="para1">
                    Dental Sciences and Research center is ranked among the top colleges in India. This is a tribute to its standard of excellence in academics and commitments to quality education. Challenges and opportunities are 2 sides of the same coin. Modern education, curricular development, and teaching methodologies have to keep pace With the demand of the World at large while addressing the local needs. Holistic education should include the all-round development of an individual and that is the goal of the education we all have to ensure that there is no stone left unturned to equip the students of today for the challenges of tomorrow.
                </p>
                <p className="para2">
                    It is indeed heartening and satisfying to see such Wonderful health care providers passing out of our institution, year after year, and contributing to the development and progress of their specialty as well as our nation. Remember, as Steve Jobs very simply put, Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. The staff and students of our institution are upholding the vision of our institution and Working towards developing all-around personalities. I Would like to congratulate the entire faculty and the other staff members for encouraging and guiding the students in all facets for their all-round development at the right age and right stage. I wish our students all the best for achieving great success and scaling new heights in their education and career ahead.
                </p>
            </div>
        </div>
    )
}

export default PresidentSirsMessage
