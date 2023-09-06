import React from 'react'
import "./CSS/InstitutionalCommittees.css"
import { Link } from 'react-router-dom'
const InstitutionalCommittees = () => {
    return (
        <div className='mainContainer'>
            <h2 className="header">
                Institutional Committee
            </h2>
            <div className="links">

                <ul>
                    <li><Link className='clink' to="/academicCommittee">Academic Committee</Link> </li>
                    <li><Link className='clink' to="/coreCommittee">Core Committee</Link></li>
                    <li><Link className='clink' to="/libraryCommittee">Library Committee</Link></li>
                    <li><Link className='clink' to="/researchCommittee">Research Committee</Link></li>
                    <li><Link className='clink' to="/purchaseCommittee">Purchase Committee</Link></li>
                    <li><Link className='clink' to="/ethicsCommittee">Ethics Committee</Link></li>
                    <li><Link className='clink' to="/examinationCommittee">Examination Committee</Link></li>
                    <li><Link className='clink' to="/condemnationCommittee">Condemnation Committee</Link></li>
                    <li><Link className='clink' to="/vishakhaCommittee">Vishakha Committee</Link></li>
                    <li><Link className='clink' to="/developmentalProgramCommittee">Developmental Program Committee</Link></li>
                    <li><Link className='clink' to="/aluminiAssociationCommittee">Alumini Association Committee</Link></li>
                    <li> <Link className='clink' to="/internalQualityAssuranceCommittee">Internal Quality Assurance Committee </Link></li>
                    <li><Link className='clink' to="/internationalStudentsCommittee"> International Students Committee</Link></li>
                    <li> <Link className='clink' to="/infectionControlAndBiomedicalWasteCommittee">Infection Control and Biomedical Waste Committee </Link> </li>
                    <li><Link className='clink' to="/calendarOfEventsCommittee">Calendar Of Events Committee</Link></li>
                    <li><Link className='clink' to="/websiteCommittee">ebsite Committee</Link></li>
                    <li><Link className='clink' to="/studentsGrievance"> Students Grievance</Link></li>
                    <li><Link className='clink' to="/womenEmpowerment">Women Empowerment</Link> </li>
                    <li><Link className='clink' to="/anti-raggingAndDisciplinaryCommittee">Anti-Ragging and Disciplinary Committee </Link></li>
                    <li><Link className='clink' to="/hostelCommittee">Hostel Committee</Link></li>
                    <li><Link className='clink' to="/mentorshipCommittee">Mentorship Committee</Link></li>
                    <li><Link className='clink' to="/curriculumCommittee">Curriculum Committee</Link></li>
                    <li><Link className='clink' to="/nssCommittee">NSS Committee</Link></li>
                    <li><Link className='clink' to="/sportsCommittee">Sports Committee</Link></li>
                    <li><Link className='clink' to="/studentsCommittee"> Students Committee</Link></li>
                    <li><Link className='clink' to="/culturalCommitee">Cultural Commitee</Link>
                    </li><li><Link className='clink' to="/staffGrievances">Staff Grievances</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default InstitutionalCommittees
