import React from "react";
import { useParams, redirect } from "react-router-dom";
import "./Projects.css";
import projects from "../../data/projects.json";
import Navbar from "../../components/Navbar/Navbar";
import TitleAnchor from "../../components/TitleAnchor/TitleAnchor";
import DynamicIcon from "../../components/DynamicIcon/DynamicIcon";

export default function Projects() {
  const { id } = useParams();
  const projectDetail = projects.filter((project) => project.id === Number.parseInt(id))[0];

  if (projectDetail) {
    return (
      <div>
        <Navbar />
        <TitleAnchor title={projectDetail.title} sectionId="projects" />
        <p><span>Description</span> <br></br>{projectDetail.description}</p>
        <ul>
            {projectDetail.stack.map((stackItem, index) => (
            <li key={index}>
                {<DynamicIcon icon={stackItem} />}
            </li>
            ))}
        </ul>
        <ul>
            <li>Acesse aqui: {projectDetail.link_deploy}</li>
            <li>Github: {projectDetail.link_github}</li>
            <li>Figma: {projectDetail.link_figma}</li>
        </ul>
      </div>
    );
  } 
}
