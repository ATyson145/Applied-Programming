import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./About.css";

function About() {
  const [visible, setVisible] = useState(false);
  const skills = [
    { name: "Python", level: 90 },
    { name: "C#", level: 85 },
    { name: "HTML, CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "Kotlin", level: 70 },
    { name: "Erlang", level: 60 },
    { name: "React", level: 50 },
    { name: "Clojure", level: 30 },
    { name: "C++", level: 20 },
    { name: "C", level: 10 },
  ];

  const getSkillColor = (level) => {
    if (level >= 80) return "green";
    if (level >= 60) return "lightgreen";
    if (level >= 40) return "#ffd500";
    if (level >= 20) return "orange";
    return "red";
  };

  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        I am a computer science major from Brigham Young University Idaho. I am
        proficient in various languages, of which is shown below.
      </p>
      <h3>Skills</h3>
      <div className="skills">
        {skills.map((skill, index) => (
          <VisibilitySensor
            key={index}
            onChange={(isVisible) => setVisible(isVisible)}
            delayedCall
          >
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{
                  width: visible ? `${skill.level}%` : 0,
                  backgroundColor: getSkillColor(skill.level),
                }}
              >
                <span>{skill.name}</span>
              </div>
            </div>
          </VisibilitySensor>
        ))}
      </div>
    </div>
  );
}

export default About;
