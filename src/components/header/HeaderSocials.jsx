import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <IoLogoLinkedin />
      </a>
      <a
        href="https://www.facebook.com/abhisek.grg.3/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
      <a href="https://github.com/abi57" target="_blank" rel="noreferrer">
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
