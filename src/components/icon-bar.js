import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const IconBar = ({ children }) => (
  <div className="icon-bar">
    <a href="https://www.github.com/sarangmohaniraj/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub}/>
    </a>
    <a href="https://www.instagram.com/sarangmohaniraj/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram}>
        <radialGradient id="rg" r="150%" cx="30%" cy="107%">
            <stop stop-color="#fdf497" offset="0" />
            <stop stop-color="#fdf497" offset="0.05" />
            <stop stop-color="#fd5949" offset="0.45" />
            <stop stop-color="#d6249f" offset="0.6" />
            <stop stop-color="#285AEB" offset="0.9" />
          </radialGradient>
      </FontAwesomeIcon>
    </a>
    <a href="https://www.linkedin.com/in/sarangmohaniraj/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
  </div>
)



export default IconBar
