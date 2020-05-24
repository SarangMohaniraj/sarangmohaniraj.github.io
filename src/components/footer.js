import React from "react"
import IconBar from "./icon-bar"

const Footer = ({ icons }) => (
  <footer className="footer">
    <div className="text-center">
      <div className="footer-container">
        <IconBar icons={icons}/>
        <p className="footer-p">Created by Sarang Mohaniraj</p>
      </div>
    </div>
  </footer>
)

export default Footer
