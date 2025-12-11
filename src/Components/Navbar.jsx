import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/bl-logo.png";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  
  const closeMenu = () => setOpenMenu(false);

  return (
    <nav className="navbar">

     
      <div className="logo-box">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1>Story Garden</h1>
      </div>

      
      <div 
        className={`hamburger ${openMenu ? "open" : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

     
      <ul className={`nav-menu ${openMenu ? "show" : ""}`}>

        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/books/Fiction" onClick={closeMenu}>Browse Books</Link>
        </li>

        <li>
          <Link to="/add" onClick={closeMenu}>Add Book</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
