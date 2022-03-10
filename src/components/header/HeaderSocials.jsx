import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="" target="_blank">
        {" "}
        <IoLogoLinkedin />{" "}
      </a>
      <a href="" target="_blank">
        <FaFacebook />
      </a>
      <a href="" target="_blank">
        {" "}
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
