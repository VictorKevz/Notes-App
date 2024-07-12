import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header-wrapper">
      <nav className="nav-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="header-title">Notes App</h1>
      </nav>
    </header>
  );
}

export default Header;
