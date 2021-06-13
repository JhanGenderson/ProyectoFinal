import React, { useState } from "react";
import {Link} from 'react-router-dom'

export default function NavTop() {
  const [colapso, setColapso] = useState(true);
  const manejarNavbar = () => setColapso(!colapso);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success fw-bold">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Sazon y Canela
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!colapso ? true : false}
          aria-label="Toggle navigation"
          onClick={manejarNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${colapso? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/carrito">
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
