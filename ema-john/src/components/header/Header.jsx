import React from "react";
import "./Header.css";
import logo from "../../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img style={{width:'140px', height:'auto'}} src={logo} />
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/iogin">Login</a>
      </div>
    </nav>
  );
};

export default Header;
