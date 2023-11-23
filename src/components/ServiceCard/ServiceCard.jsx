import { FaPencilAlt } from "react-icons/fa";
import "./ServiceCard.css";

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="service-card">
        <div className="circle">
            {Icon && <Icon className="icon" size={24} />}
        </div>
        <div className="service-card-text">
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
  );
}
