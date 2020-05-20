import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const projects = [
  {
    title: "1",
    description: "lkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfaj",
    tech: ["react"],
    githubURL: "https://github.com",
    url: "https://github.com"
  },
  {
    title: "2",
    description: "lkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfaj"
  },
  {
    title: "3",
    description: "lkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfaj"
  },
  {
    title: "4",
    description: "lkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfajlkajsflasjfaljflajfajfaj",
    tech: ["react"],
    githubURL: "https://github.com",
    url: "https://github.com"
  },
]

const Projects = () => (
  <section id="projects">
    <div className="container">
      <div className="section-container">
        <h3 className="section-title">Projects</h3>
        <div className="section-content">
          {projects.map(project => (
            <Project project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

const Project = ( {project} ) => {
  const { title, image, description, tech, githubURL, url } = project;
  return(
    <div className="project">
      <div className="project-inner">
        <span>
          <h4 className="project-title">{title}</h4>
          <div className="project-external">
            {githubURL && <a href={githubURL} aria-label={"GitHub Repository"} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab','github']} className="icon-transition"/>
            </a>}
            {url && <a href={url} aria-label={"Project Website"} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="external-link-alt" className="icon-transition"/>
            </a>}
          </div>
        </span>
        <p className="project-description">{description}</p>
        <footer className="project-tech">
        {tech && tech.map(icon => (
          <FontAwesomeIcon icon={['fab',icon]} key={['fab',icon]} className="icon-transition"/>
        ))}
        </footer>
      </div>
    </div>
  )
}

export default Projects
