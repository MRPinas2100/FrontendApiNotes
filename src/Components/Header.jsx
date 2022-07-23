import React from "react";
import "../index.css";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header-notes">
        <h1 className="titulo-api">API Notes</h1>
        <nav className="btn-box">
          <Link to="/about" element={<About />}>
            About
          </Link>
          <Link to="/contact" element={<Contact />}>
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
