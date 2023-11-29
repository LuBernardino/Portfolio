import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import "./ProjectCard.css";

export default function ProjectCard({ name, description, imageSrc, projectLink }) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={`Project: ${name}`} className="img-project-card" />
      <div className="info-card">
        <div className="description">
          <Link to={projectLink} className="see-project-link">
            <p>See project</p>
            <IoArrowForwardOutline size={24} color="var(--col-purple)" />
          </Link>
          <div className="card-fluid">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
