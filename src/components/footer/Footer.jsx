import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
         REACHOUT
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/abhisek.grg.3/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/abishekgurung___/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; ABISHEK Website. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
