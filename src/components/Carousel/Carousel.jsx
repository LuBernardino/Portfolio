import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import projects from "../../data/projects.json";
import "./Carousel.css";

const Carousel = () => {
  const { id } = useParams();
  const projectDetail = projects.filter(
    (project) => project.id === Number.parseInt(id)
  )[0];
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = projectDetail.image.length; /* quantidade de slides */

  const handlePrevSlide = () => {
    const prevSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const handleNextSlide = () => {
    const nextSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  const translateValue = {
    transform: `translateX(-${100 * (currentSlide - 1)}%)`,
  };

  return (
    <div className="carousel">
      <div className="carousel__viewport" style={translateValue}>
        {projectDetail.image.map((item, index) => (
          <div key={index} className="carousel__slide">
            <div className="carousel__snapper">
              <img src={item.source} alt={item.description} />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel__navigation">
        <button
          className="carousel__navigation-button"
          onClick={handlePrevSlide}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="carousel__navigation-button"
          onClick={handleNextSlide}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
