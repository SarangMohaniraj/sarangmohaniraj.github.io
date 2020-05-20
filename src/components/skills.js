import React from "react"

const skills = [
  {
    area: "Languages",
    skills: ["Java", "Python", "JavaScript", "HTML/(S)CSS", "C#"]
  },
  {
    area: "Frameworks",
    skills: ["Node", "Express", "React", "Redux", "Gatsby"]
  },
  {
    area: "Tools",
    skills: ["Tensorflow", "Git & GitHub", "Android Studio", "Gatsby"]
  },
  {
    area: "Cloud",
    skills: ["Firebase", "Firestore", "AWS"]
  }
]

const About = () => (
  <section id="skills">
    <div className="container">
      <div className="section-container">
        <h3 className="section-title">Skills</h3>
        <div className="section-content">
          {skills && skills.map(area => (
            <div className="area" key={area.area}>
              <h4 className="skill">{area.area}</h4>
              {area.skills.map(skill => (
                <p className="skill" key={skill}>{skill}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About
