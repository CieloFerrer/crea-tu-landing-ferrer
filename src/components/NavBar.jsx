import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"; // Asegurate de tener tu logo aquí
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Valle Outdoors" />
      </Link>
      <nav className="navbar-links">
        <Link to="/categoria/ropa">Ropa</Link>
        <Link to="/categoria/pesca">Pesca</Link>
        <Link to="/categoria/accesorios">Accesorios</Link>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;