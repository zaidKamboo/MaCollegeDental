import React from 'react'
import "./LibraryFacilities.css"
import libimg1 from "../../../Images/libimg1.jpg"
import libimg2 from "../../../Images/libimg2.jpg"
import libimg3 from "../../../Images/libimg3.jpg"
const LibraryFacilities = () => {
  return (
    <div className='mc'>
        <h2 className='h'>Library Facilities</h2>
        <p>
        The college has a well-equipped library, managed by a well-qualified librarian and co-staff, with a variety of textbooks of Indian as well as foreign authors from all the concerned faculties. We have subscriptions to a number of national and international journals in copy as well as journals from various publication houses that are available as E-Journals as well.  
        </p>
        <a href="https://mardclibrary.weebly.com/" target='__blank'>www.mardclibrary.weebly.com</a>
        <div className="images">
          <img src={libimg1} alt="" />
          <img src={libimg2} alt="" />
          <img src={libimg3} alt="" />
        </div>
    </div>
  )
}

export default LibraryFacilities
