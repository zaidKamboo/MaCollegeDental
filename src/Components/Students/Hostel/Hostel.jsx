import React from 'react'
import "./Hostel.css"
import right from "../../../Images/link.jpg"
import left from "../../../Images/leftArrow.jpg"
import hostel from "../../../Images/hostel.webp"
const Hostel = () => {
    return (
        <div className='hContainer'>
            <div className="ici">
                <img src={right} className='img1' alt="" />
                <center><a href="https://mardentalcollege.org/wp-content/uploads/2022/05/Hostel.pdf" target='__blank'><h2 className='heading'>
                    Hostel Details
                </h2></a></center>
                <img src={left} className='img2' alt="" />
            </div>
            <div className="ici">
                <img src={right} className='img3' alt="" />
                <center><a href="https://mardentalcollege.org/wp-content/uploads/2022/06/Hostel-Committee.pdf" target='__blank'><h2 className='heading'>
                    Hostel Committee
                </h2></a></center>
                <img src={left} className='img4' alt="" />
            </div>
            <img src={hostel} alt="" className="hoste" />
        </div>
    )
}

export default Hostel
