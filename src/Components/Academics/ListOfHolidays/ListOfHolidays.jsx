import React from 'react'
import "./ListOfHolidays.css"
import left from "../../../Images/link.jpg"
const ListOfHolidays = () => {
    return (
        <div className='mc'>
            <h2 className="he">
                List Of Holidays
            </h2>
            <div className="lofh">
                <img className='lin' src={left} alt="" />
                <a className='loh' href="https://mardentalcollege.org/wp-content/uploads/2022/05/LIST-OF-HOLIDAYS-2022.pdf">LIST OF HOLIDAYS - 2022</a>
            </div>
        </div>
    )
}

export default ListOfHolidays
