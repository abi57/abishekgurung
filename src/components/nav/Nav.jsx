import React from "react";
import "./Nav.css";
import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [ActiveNav, setActiveNav] = useState("");
  return (
    <nav>
      <a
        href="#"
        onclick={() => setActiveNav("#")}
        className={ActiveNav === "#" ? "active" : ""}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onclick={() => setActiveNav("#about")}
        className={ActiveNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onclick={() => setActiveNav("#experience")}
        className={ActiveNav === "#experience" ? "active" : ""}
      >
        <AiOutlineRead />
      </a>
      <a
        href="#contact"
        onclick={() => setActiveNav("#contact")}
        className={ActiveNav === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
