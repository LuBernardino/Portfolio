import React from "react";
import { useParams, redirect } from "react-router-dom";
import "./Projects.css";
import projects from "../../data/projects.json";
import Navbar from "../../components/Navbar/Navbar";
import TitleAnchor from "../../components/TitleAnchor/TitleAnchor";
import DynamicIcon from "../../components/DynamicIcon/DynamicIcon";
import Carousel from "../../components/Carousel/Carousel";
import BackgroundStar from "../../components/BackgroundStar/BackgroundStar";
import { FaGithub, FaFigma } from 'react-icons/fa';

// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel  from 'react-bootstrap/Carousel';

export default function Projects() {
  const { id } = useParams();
  const projectDetail = projects.filter((project) => project.id === Number.parseInt(id))[0];

  if (projectDetail) {
    return (
      <div>
        <Navbar />
        {/* <div className="square-purple"></div> */}
        <BackgroundStar />
        <main className="project-container">
            <TitleAnchor title={projectDetail.title} sectionId="projects" />
            <div className="containers">
                {/* BEGIN CARROSEL */}
                <Carousel />
                {/* END CARROSEL */}               
                <div>
                  <div className="section-links-project">
                    <a className="project-link-deploy" href={projectDetail.link_deploy} target="_blank" rel="noopener noreferrer">
                      Visite aqui !!
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
                            {<DynamicIcon icon={stackItem} />}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
      </div>
    );
  } 
}

<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>