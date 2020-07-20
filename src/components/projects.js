import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "gatsby-image"
import PropTypes from "prop-types"

const Projects = ({ projects }) => (
  <section id="projects">
    <div className="section-container">
      <h3 className="section-title">Projects</h3>
      <div className="section-content">
        {projects.map(({node: project}) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  </section>
)

const Project = ({ project }) => {
  const { title, image, description, tech, githubURL, url } = project;
  return(
    <div className="project">

      <div className="project-inner">
        <div className="project-main">
          <div className="project-external">
            {githubURL && <a href={githubURL} aria-label={`${title} GitHub Repository`} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab','github']} className="icon-transition project-external-github" fixedWidth={true}/>
            </a>}
            {url && <a href={url} aria-label={`${title} Website`} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="external-link-alt" className="icon-transition project-external-url" fixedWidth={true}/>
            </a>}
          </div>

          {image && <Image fluid={image.childImageSharp.fluid} alt={title} />}

          <h4 className="project-title">{title}</h4>
          <p className="project-description">{description}</p>
        </div>
        <footer className="project-tech">
        {tech && tech.map(icon => (
          icon !== "" && <FontAwesomeIcon icon={['fab',icon]} key={['fab',icon]} className="icon-transition" fixedWidth={true}/>
        ))}
        </footer>
      </div>
    </div>
  )
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        tech: PropTypes.arrayOf(PropTypes.string),
        githubURL: PropTypes.string,
        url: PropTypes.string,
        image: PropTypes.string
      })
    })
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    githubURL: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string
  })
}

export default Projects
