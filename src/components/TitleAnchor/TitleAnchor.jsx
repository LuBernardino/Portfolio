import { MdOutlineStar } from "react-icons/md";
import "./TitleAnchor.css";

export default function TitleAnchor({ title, sectionId }) {
  return (
    <div id={sectionId}>
      {/* <div className="btn-get-look">
        <MdOutlineStar />
        <p>Get Look</p>
      </div> */}
      <h1>{title}</h1>
    </div>
  );
}
