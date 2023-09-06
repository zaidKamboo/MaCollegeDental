import React from 'react'
import "./CSS/PrincipalsMessage.css"
import pimg from "../principal.jpg"
const PrincipalsMessage = () => {
    return (
        <div>
            <div className="pImg">
                <img className='pImge' src={pimg} alt="Principal" />
                <h2 className='name'>Dr.Ramandeep Dugal</h2>
                <h3 className='msg'>Principal's Message</h3>
                <center className='cn'>M.A. Rangoowala College of Dental Sciences & Research Centre, Pune</center>
            </div>
            <div className="pcontent">
                <p className="para1">
                    It is a great pleasure for me as the Principal of M. A. Rangoonwala College of Dental Sciences and Research centre to welcome you to our website – a glimpse into our college and hospital which is a place of learning, growing and imbibing knowledge.<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The foundation stone of our college was laid in 1998 and the college started a undergraduate BDS course in 2001since then it has come a long way from an undergraduate Institute to postgraduate Institute par excellence, with our students securing University Ranks every year. With the fast-paced change in dentistry, poor oral health is more than just a tooth problem and therefore, we have been following the aspirational vision for the Dental College and Research Centre of the future:
                </p>
                <p className="para3">
                    <center>
                        “To lead and transform the way dentistry is taught and practiced. “
                    </center>
                </p>
                <p className="para4">
                    We have channelized the enthusiasm to achieve this vision and continue with our mission of improving the oral and systemic health of the community through education, research, patient care and hard work. We have responsibility toward our current and future students, our patients, our faculty who have built their careers here and definitely to our dedicated supporting staff who work so hard to keep our operations moving and to our local community and beyond. Healthcare and dentistry are changing very fast in our country. We want to develop the future academic and community leaders who will have the capabilities, confidence and ethical decision-making skills to improve the general and oral health of our communities.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For those of you visiting our Website as potential students, know that M. A Rangoonwala College of Dental Sciences and Research centre has all the facilities to deliver the knowledge and success in your professional journey. I am proud to say that in addition to Undergraduate and Postgraduate Courses, we are also running a Certification course in Maxillofacial Prosthodontics in Collaboration with IMPT, UK; Diploma in Dental Laser in coordination with SOLA (Society of Laser Application) and Faculty from the University of Vienna, Austria. Our College is also recognised as IGNOU centre for Diploma in Endodontics. We are also successfully running a student Exchange programme for our students with Kings College, London. We inculcate that habit of critical thinking, through research in the minds of our young students. I am proud to say that we have successfully transformed our dreams into reality and the credit for this goes to the selfless commitment and hard work of our Management, Teaching Faculty and Support Staff
                </p>
            </div>
        </div>
    )
}

export default PrincipalsMessage
