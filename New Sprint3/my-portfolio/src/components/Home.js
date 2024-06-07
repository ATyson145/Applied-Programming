import React, { useState } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import "./Home.css";

function Home() {
  const [showConfetti, setShowConfetti] = useState({
    about: false,
    projects: false,
    contact: false,
  });

  const handleMouseEnter = (section) => {
    setShowConfetti((prev) => ({ ...prev, [section]: true }));
  };

  const handleMouseLeave = (section) => {
    setShowConfetti((prev) => ({ ...prev, [section]: false }));
  };

  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <div className="section">
        <Link
          to="/about"
          className="box"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={() => handleMouseLeave("about")}
        >
          {showConfetti.about && <Confetti recycle={false} />}
          <h2>About Me</h2>
          <p>Get to know more about me, my background, and my skills.</p>
        </Link>
        <Link
          to="/projects"
          className="box"
          onMouseEnter={() => handleMouseEnter("projects")}
          onMouseLeave={() => handleMouseLeave("projects")}
        >
          {showConfetti.projects && <Confetti recycle={false} />}
          <h2>Projects</h2>
          <p>
            Explore some of the projects I have worked on, showcasing my
            experience and skills.
          </p>
        </Link>
        <Link
          to="/contact"
          className="box"
          onMouseEnter={() => handleMouseEnter("contact")}
          onMouseLeave={() => handleMouseLeave("contact")}
        >
          {showConfetti.contact && <Confetti recycle={false} />}
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me for any inquiries or collaboration
            opportunities.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
