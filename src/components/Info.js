import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
const Info = () => {
  return (
    <div className="info mb-5" id="info">
      <h1 className="pb-2 d-md-block d-none">Peter Uadiale</h1>
      <div className="info-items">
        <div className="info-item">
            <span>{<FaUserAlt />}</span>
          <h5>Frontend Developer</h5>
        </div>
        <div className="info-item">
            <span>{<MdEmail />}</span>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="info-item">
            <span>{<MdLocationOn />}</span>
          <p>peteuadiale1@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
