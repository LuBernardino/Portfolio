import React from "react";
import { Link } from "react-router-dom";
import "./AnimateCard.css";

export default function AnimateCard({ name, description, imageSrc, projectLink }) {
  return (
    <div>
        <div className="container">
            <div className="card" >
                <div className="img-box">
                    <img src={imageSrc} alt={`Project: ${name}`} />
                </div>
                <div className="content">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link to={projectLink} className="btn-more">
                        <p>Read More</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}
