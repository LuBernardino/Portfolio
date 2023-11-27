import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import "./ProjectCard.css";

export default function ProjectCard({ name, description, imageSrc }) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={`Project: ${name}`} className="img-project-card" />
      <div className="info-card">
        {/* TODO: making this works */}
        <div className="description">
          <button className="see-project-link">
            <p>See project</p>
            <IoArrowForwardOutline size={24} color="var(--col-purple)" />
          </button>
          <div className="card-fluid">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
