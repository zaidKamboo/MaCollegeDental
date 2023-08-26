import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imaage1 from "../image1.jpg"
import imaage2 from "../image2.jpg"
import imaage3 from "../image3.jpg"

const AutoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = index => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Auto-switching logic
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % 3; // Replace 3 with the number of slides
      setCurrentSlide(nextSlide);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <Carousel selectedItem={currentSlide} onChange={handleSlideChange}>
      <div>
        <img src={imaage1} alt="Image 1" />
      </div>
      <div>
        <img src={imaage2} alt="Image 2" />
      </div>
      <div>
        <img src={imaage3} alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default AutoCarousel;
