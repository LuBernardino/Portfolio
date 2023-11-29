import React from "react";
import { useParams, redirect } from "react-router-dom";
import "./Projects.css";
import projects from "../../data/projects.json";

export default function Projects() {
  const { id } = useParams();
  const projectDetail = projects.filter((project) => project.id === Number.parseInt(id))[0];
  if (projectDetail) {
    return (
      <div>
        <h1>{projectDetail.title}</h1>
      </div>
    );
  } 
}
