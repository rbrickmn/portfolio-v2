import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToAbout: true } });
    } else {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e) => {
    navigate("/", { state: null });
  };

  return (
    <header className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a onClick={handleAboutClick}>About</a>
            </li>

            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>

            <li>
              <a onClick={handleContactClick}>Contact</a>
            </li>
          </ul>
        </div>
        <a
          onClick={handleHomeClick}
          className="btn btn-ghost text-xl cursor-pointer"
        >
          Riley Brickman
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={handleAboutClick}>About</a>
          </li>

          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>

          <li>
            <a onClick={handleContactClick}>Contact</a>
          </li>
        </ul>
      </div>

      {/* Github Link */}
      <div className="navbar-end"></div>
    </header>
  );
};

export default Navbar;
