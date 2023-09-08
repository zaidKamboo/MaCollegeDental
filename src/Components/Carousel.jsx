import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import assemblyHall from "../Images/AssemblyHall.jpg"
import computerLab from "../Images/ComputerLab.jpg"
import dentalCollge from "../Images/dentalCollege.jpg"
import informationCenter from "../Images/informationCentre.jpg"
import mosque from "../Images/mosque.jpg"
import nss from "../Images/nss.jpg"
import sportsComplex from "../Images/sportscomplex.jpg"
import campusGround from "../Images/campusground.jpg"
import basketBallCourt from "../Images/basketballCourt.jpg"
import sittingArea from "../Images/SittingAresa.jpg"
import dcgirlsHostel from "../Images/DcGirlsHostel.jpg"
import dcboyshostel from "../Images/dc boysHostel.jpg"
import parkingarea from "../Images/parking area.jpg"
import collgeCanteen from "../Images/collegeCanteen.jpg"
import motoOfAzamCampus from "../Images/MotoOfAzamCampus.jpg"

const AutoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = index => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Auto-switching logic
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % 15; // Replace 3 with the number of slides
      setCurrentSlide(nextSlide);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <Carousel selectedItem={currentSlide} onChange={handleSlideChange}>
      <div>
        <img src={informationCenter} alt="Information Centre" />
        <center >
          <h6 className='mt-8'>Information Centre.</h6>
        </center>
      </div>
      <div>
        <img src={dentalCollge} alt="Dental College" />
      </div>
      <div>
        <img src={computerLab} alt="Computer Lab" />
      </div>
      <div>
        <img src={assemblyHall} alt="Assembly hall" />
      </div>
      <div>
        <img src={mosque} alt="Mosque" />
      </div>
      <div>
        <img src={nss} alt="NSS" />
      </div>
      <div>
        <img src={sportsComplex} alt="Sports Complex" />
      </div>
      <div>
        <img src={campusGround} alt="Campus Ground" />
      </div>
      <div>
        <img src={basketBallCourt} alt="Basket Ball Court" />
      </div>
      <div>
        <img src={sittingArea} alt="Sitting Area" />
      </div>
      <div>
        <img src={dcgirlsHostel} alt="Dental College's Girls Hostel" />
      </div>
      <div>
        <img src={dcboyshostel} alt="Dental College's Boys Hostel" />
      </div>
      <div>
        <img src={parkingarea} alt="Parking Area" />
      </div>
      <div>
        <img src={collgeCanteen} alt="Collge Canteen" />
      </div>
      <div>
        <img src={motoOfAzamCampus} alt="Moto of Azam Campus" />
      </div>
    </Carousel>
  );
};

export default AutoCarousel;
