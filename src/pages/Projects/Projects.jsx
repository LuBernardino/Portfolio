import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./Projects.css";
import projects from "../../data/projects.json";
// import Navbar from "../../components/Navbar/Navbar";
import TitleAnchor from "../../components/TitleAnchor/TitleAnchor";
import DynamicIcon from "../../components/DynamicIcon/DynamicIcon";
import BackgroundStar from "../../components/BackgroundStar/BackgroundStar";
import { FaGithub, FaFigma } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function Projects() {
  const { id } = useParams();
  const projectDetail = projects.filter((project) => project.id === Number.parseInt(id))[0];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  if (projectDetail) {
    return (
      <div>
        {/* <Navbar /> */}
        <button className="btn-back" onClick={handleBack}>
          <IoIosArrowBack /> Back
        </button>
        <BackgroundStar />
        <main className="project-container">
          <TitleAnchor title={projectDetail.title} sectionId="projects" />
          <div className="container-project-details">
            <div className="swiper-container">
              {/* Swiper */}
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true, dynamicBullets: true }}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                  }
                }}
              >
                {projectDetail.image.map((image, index) => (
                  <SwiperSlide>
                    <img className="project-details-images" src={image.source} alt={image.description} />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* End Swiper */}
            </div>
              <div>
                <div className="section-links-project">
                  <a className="project-link-deploy" href={projectDetail.link_deploy} target="_blank" rel="noopener noreferrer">
                    Visit here !!
                  </a>
                  <a className="btn-links" href={projectDetail.link_github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a className="btn-links" href={projectDetail.link_figma} target="_blank" rel="noopener noreferrer">
                    <FaFigma />
                  </a>
                </div>
                <p className="project-txt"><span>Description</span> <br></br>{projectDetail.description}</p>
                <ul className="list-icons">
                  {projectDetail.stack.map((stackItem, index) => (
                    <li className="project-icon" key={index}>
                      {<DynamicIcon icon={stackItem} size={26}/>}
                    </li>
                  ))}
                </ul>
              </div>
          </div>
          
        </main>
      </div>
    );
  }

  return null;
}
