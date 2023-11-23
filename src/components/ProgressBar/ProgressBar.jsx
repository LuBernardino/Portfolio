import React from "react";
import "./ProgressBar.css";

export default function ProgressBar({ title, percentage }) {
  return (
    <div className="progress-section" data-aos="fade-left" data-aos-once="true">
      <div className="task-progress">
        <p>
          {title}
          <span>{percentage} %</span>
        </p>
        <progress max="100" value={percentage}></progress>
      </div>
    </div>
  );
}
