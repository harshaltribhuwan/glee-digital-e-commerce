import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer__react">
      <p>Glee Digital ⓒ {year}</p>
    </footer>
  );
};

export default Footer;
