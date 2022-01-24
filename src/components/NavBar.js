import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav_bar">
      <Link to="/" className="links">
        Home
      </Link>

      <Link to="/campuses" className="links">
        Campuses
      </Link>

      <Link to="/students" className="links">
        Students
      </Link>

    </div>
  );
}