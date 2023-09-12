import React from 'react'
import "./MentorMenteeProgram.css"
const MentorMenteeProgram = () => {
    return (
        <div className='mmContainer'>
            <h2 className="mmheader">
                Mentor - Mentee Program
            </h2>
            <div className="content">
                <strong className='str'>
                    Structure of mentorship in the college
                </strong>
            </div>
            <p>
                The mentorship committee comprises of the Dean as the chairman and other committee members as mentioned below
            </p>
            <p>
                Every staff willing to participate in the membership program is included. All students are allotted a mentor who is theirs till they pass out. Twice a year the mentors, take a one to one update from the mentees. The mentees are encouraged to approach their mentor for any problem related to
            </p>
            <ol>
                <li className='lis'>
                    Academics and career related issues
                </li>
                <li className='lis'>
                    Personal issues
                </li>
                <li className='lis'>
                    Family issues
                </li>
                <li className='lis'>
                    Social issues

                </li>
                <li className='lis'>
                    Health issues
                </li>
            </ol>
            <p>
                Any issue that cannot be resolved by the mentor is forwarded to the mentoring committee which then with the help of the principal navigate the student to the proper specialist if at all required.
            </p>
            <p>
                The student to mentor ratio does not exceed 10:1
            </p>
            <p className="para">
                Every mentor makes a report semi-annually and submits it to the mentorship committee.
            </p>
        </div>
    )
}

export default MentorMenteeProgram
