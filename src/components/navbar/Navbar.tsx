// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import roversEmblem from "../../images/roversEmblem.png";  

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/reports">
          Reports
        </NavLink>
      </div>

      <div className="nav-center">
        <img
          src={roversEmblem}
          alt="Club Icon"
          style={{ height: "3rem", width: "3rem" }}
        />
      </div>

      <div className="nav-right">
        <FaRegUserCircle size={24} />
      </div>
    </nav>
  );
}