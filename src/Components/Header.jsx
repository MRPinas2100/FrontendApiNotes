import React from "react";
import "../index.css"

function Header() {
  return (
    <div>
      <header className="header-notes">
        <h1 className="titulo-api">API Notes</h1>
        <section className="btn-box">
          <button>Route1</button>
          <button>Route2</button>
          <button>Route3</button>
        </section>
      </header>
      ;
    </div>
  );
}

export default Header;
