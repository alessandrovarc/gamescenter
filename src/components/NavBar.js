import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Logo from "../assets/images/logo.png";

function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg position-sticky top-0 z-3"
        data-bs-theme="dark"
        style={{ backgroundColor: "#221f1f" }}
      >
        <div className="container-fluid">
          <div className="">
            <image src={Logo} />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold" href="/">
                  Home
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons" color="white" onClick={() => navigate("/search")}></i>
              <Login />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
