import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const icons = [
  {
    icon: "github",
    url: "https://www.github.com/sarangmohaniraj/"

  },
  {
    icon: "instagram",
    url: "https://www.instagram.com/sarangmohaniraj/"
  },
  {
    icon: "linkedin-in",
    url: "https://www.linkedin.com/in/sarangmohaniraj/"
  }
]

const IconBar = ({ children }) => (
  <div className="icon-bar">
    {icons.map(icon => (
      <a href={icon.url} aria-label={icon.icon} target="_blank" rel="noopener noreferrer" key={icon.icon}>
        <FontAwesomeIcon icon={['fab',icon.icon]} className="icon-transition"/>
      </a>
    ))}
  </div>
)



export default IconBar
