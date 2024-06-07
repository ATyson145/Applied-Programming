import React from 'react';

function About() {
    const skills = [
        'Javascript (Intermediate)',
        'React (Intermediate)',
        'HTML, CSS (Intermediate)',
        'Python (Advanced)',
        'C# (Advanced)',
    ];

    return (
        <div>
            <h2>About Me</h2>
            <p>Hello! My name is Adam Tyson and I am a computer science major from BYU-Idaho</p>
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{ skill }</li>
                ))}
            </ul>
        </div>
    );
}

export default About;