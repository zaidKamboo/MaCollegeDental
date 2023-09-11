import React from 'react'
import "./Sports.css"
const Sports = () => {
    return (
        <div className='sportsContainer'>
            <h2>Sports</h2>
            <p className='para1'>
                The campus has a well-equipped sports ground and equipment for various sports activities. The college can avail facilities the same for various events. Annual sports events are organized regularly under the supervision of the sports committee and several events are held with a competitive spirit. The winners are awarded trophies and all the participants are awarded certificates for participation. The energy of the students is worth watching at such events. The students and staff have participated in various events at inter-college, district, state, and national levels.
            </p>
            <p>
                The aim of this is to increase collaboration, interaction, sporting spirit, and fun.
            </p>
            <b>
                SPORTS COUNCIL :
            </b>
            <ul className="parent">
                <li>
                    SPORTS SECRETARY : ABDUL RAHIM
                </li>
                <li>
                    SPORTS COUNCIL MEMBERS :
                    <ol className='child2'>
                        <li>
                            OSAMA AHMED
                        </li>
                        <li>
                            AMIR CHOWDHURY
                        </li>
                        <li>
                            NAZIYA SHAIKH
                        </li>
                        <li>
                            SABA KHAN
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    )
}

export default Sports
