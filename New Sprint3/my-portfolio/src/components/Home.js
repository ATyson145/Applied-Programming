import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Confetti from "react-confetti";
import MemoryGame from "./MemoryGame";
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
      <h1>
        <Typewriter
          options={{
            strings: [
              "Welcome to My Portfolio",
              "My name is Adam Tyson",
              "I am a computer science major",
              "I Love Coding",
              "And BBQ",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="section">
        <Link
          to="/about"
          className="box"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={() => handleMouseLeave("about")}
        >
          {showConfetti.about && <Confetti recycle={true} />}
          <h2>About Me</h2>
          <p>Get to know more about me, my background, and my skills.</p>
        </Link>
        <Link
          to="/projects"
          className="box"
          onMouseEnter={() => handleMouseEnter("projects")}
          onMouseLeave={() => handleMouseLeave("projects")}
        >
          {showConfetti.projects && <Confetti recycle={true} />}
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
          {showConfetti.contact && <Confetti recycle={true} />}
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me for any inquiries or collaboration
            opportunities.
          </p>
        </Link>
      </div>
      <div className="game-section">
        <h2>Memory Card Game</h2>
        <p>Made just in case you got bored looking at portfolios all day</p>
        <MemoryGame />
      </div>
    </div>
  );
}

export default Home;
