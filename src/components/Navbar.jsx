import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToAbout: true } });
    } else {
      // If we're already on the home page, just scroll
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e) => {
    // Navigate to home and explicitly set state to null to trigger top scroll
    navigate('/', { state: null });
  };

  return (
    <header className="navbar bg-base-100 sticky top-0 z-10 shadow-md">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a onClick={handleAboutClick}>About</a>
            </li>

            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>

            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a onClick={handleHomeClick} className="btn btn-ghost text-xl cursor-pointer">
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
            <a>Contact</a>
          </li>
        </ul>
      </div>

      {/* Github Link */}
      <div className="navbar-end">
        {/* Existing code */}
      </div>
    </header>
  );
};

export default Navbar;