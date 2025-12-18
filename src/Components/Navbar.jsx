import { NavLink } from "react-router-dom";
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
    <NavLink
      to="/"
      end
      onClick={closeMenu}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/books/Fiction"
      onClick={closeMenu}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Browse Books
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/add"
      onClick={closeMenu}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
     Add Book
    </NavLink>
  </li>
</ul>



    </nav>
  );
}

export default Navbar;
