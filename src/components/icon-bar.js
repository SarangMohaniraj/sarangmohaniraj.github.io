import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconBar = ({ iconBar }) => (
  <div className="icon-bar">
    {iconBar.map(({node: icon}) => (
      <a href={icon.url} aria-label={icon.icon} target="_blank" rel="noopener noreferrer" key={icon.icon}>
        <FontAwesomeIcon icon={['fab',icon.icon]} className="icon-transition" fixedWidth={true}/>
      </a>
    ))}
  </div>
)



export default IconBar
