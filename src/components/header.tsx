import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>React-3-Route</h1>
      <nav>
        » <Link to="/">Home</Link> • <Link to="/about">About</Link> •{" "}
        <Link to="/contact">Contact</Link> «
      </nav>
    </header>
  );
};

export default Header;
