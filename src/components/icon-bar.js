import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from "prop-types"

const IconBar = ({ icons }) => (
  <div className="icon-bar">
    {icons.map(({ node: icon }) => (
      <a href={icon.url} aria-label={icon.icon} target="_blank" rel="noopener noreferrer" key={icon.icon}>
        <FontAwesomeIcon icon={['fab',icon.icon]} className="icon-transition" fixedWidth={true}/>
      </a>
    ))}
  </div>
)

IconBar.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.exact({
      node: PropTypes.exact({
        icon: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    })
  )
}

export default IconBar
