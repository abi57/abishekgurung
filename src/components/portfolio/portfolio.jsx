import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <h3>Project One</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/abi57"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/abi57"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <h3>Project Two</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/abi57"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/abi57"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <h3>Project Three</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/abi57"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/abi57"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
