import React from "react"

const Skills = ( {skills} ) => (
  <section id="skills">
    <div className="container">
      <div className="section-container">
        <h3 className="section-title">Skills</h3>
        <div className="section-content">
          {skills && skills.map(({node: area}) => (
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

export default Skills
