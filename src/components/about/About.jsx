import React from "react";
import "./About.css";
import Me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>+1 Year Working Experience</small>
            </article>
            <article className="about_card">
              <GrProjects className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Self-Learning Projects.</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam sit
            deleniti deserunt ab consequatur earum ipsum repellat non
            blanditiis, quas quo. Dolores deserunt commodi fugiat voluptates
            alias consequuntur corporis!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
