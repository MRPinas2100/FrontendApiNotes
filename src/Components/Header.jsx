import React from "react";
import "../index.css";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NewNote from "../Pages/NewNote";
import { Link, useNavigate } from "react-router-dom";
import Notes from "../Pages/Notes";

function Header() {
  let navigate = useNavigate();

  const logOut = () => {
    window.localStorage.removeItem("userLogged");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <header className="header-notes">
        <div className="title-name-container">
          <h1 className="titulo-api">API Notes</h1>
        </div>
        <nav className="btn-box">
          <Link to="/notes" element={<Notes />}>
            Home
          </Link>
          <Link to="/create" element={<NewNote />}>
            New Note
          </Link>
          <Link to="/about" element={<About />}>
            About
          </Link>
          <Link to="/contact" element={<Contact />}>
            Contact
          </Link>
          <button onClick={logOut}>Log Out</button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
