import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import "./ProjectCard.css";

export default function ProjectCard() {
  return (
    <div className="project-card">
      <img src="src\assets\img-teste.jpg" alt="" className="img-project-card" />
      <div className="info-card">
        {/* TODO: making this works */}
        <div className="card-fluid">
          <h3>Project Name</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor dolore magna
            aliqua. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <button className="see-project-link">
          <p>See project</p>
          <IoArrowForwardOutline size={24} color="var(--col-purple)" />
        </button>
      </div>
    </div>
  );
}
