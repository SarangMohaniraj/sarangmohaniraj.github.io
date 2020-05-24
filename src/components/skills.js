import React from "react"
import PropTypes from "prop-types"

const Skills = ({ skills }) => (
  <section id="skills">
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
  </section>
)

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.exact({
      node: PropTypes.exact({
        area: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    })
  )
}

export default Skills
