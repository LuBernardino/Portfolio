import "./ExperienceCard.css";

export default function ExperienceCard({ title, date, subtitle, description, icon: Icon }) {
  return (
    <div className="experience-card">
        <div className="card">
            <div className="header">
                <div className="circle">
                    {Icon && <Icon className="icon" size={24} />}
                </div>
                <div>
                    <div className="card-txt">
                        <h5>{title}</h5>
                        <h6>{date}</h6>
                    </div>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
        <div className="description-txt">
            <p>{description}</p>
        </div>
    </div>
  );
}