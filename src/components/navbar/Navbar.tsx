import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import roversEmblem from "../../images/roversEmblem.png";  
import { useAuth } from "../../hooks/auth";

export default function Navbar() {

  const { user, loading, logout } = useAuth();

  if (loading) return null;

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
        {
          user ? (
            <>
              <span className="username">Hi, {user.firstName}</span>
              <button className="logoutButton" onClick={logout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="login">
              Login
            </NavLink>
          )
        }
        <FaRegUserCircle size={36} data-testid="user-icon" />
      </div>
    </nav>
  );
}