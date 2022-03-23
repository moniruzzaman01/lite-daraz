import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="brand">LITE DARAZ</div>
      <div className="links">
        <a href="./shop">Shop</a>
        <a href="./orders">Orders</a>
        <a href="./inventory">Inventory</a>
        <a href="./about">About</a>
      </div>
    </nav>
  );
}

export default Header;
