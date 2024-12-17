import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Login from "../Login";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar-wrapper">
        <img src={Logo} alt="GamesCenter" className="logo-img" onClick={() => navigate("/")}/>
        <div className="d-flex align-items-center">
            {/* <i className="bi bi-search icons" color="white" onClick={() => navigate("/search")}></i> */}
            <Login />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
