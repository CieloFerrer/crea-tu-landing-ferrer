import React from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
        <h2 className="nav-title">Mi Tienda</h2>
      </div>

      <div className="nav-links">
        <a href="#" className="nav-link">Inicio</a>
        <a href="#" className="nav-link">Productos</a>
        <a href="#" className="nav-link">Contacto</a>
      </div>

      <CartWidget />
    </nav>
  );
}

export default NavBar;