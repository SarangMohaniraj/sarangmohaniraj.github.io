import React from "react"
import IconBar from "./icon-bar"

const Hero = ({iconBar}) => (
  <section id="hero">
    <div className="container">
      <div className="hero-container">
        <h1>Hi, I'm Sarang</h1>
        <h3>a developer</h3>
        <IconBar iconBar={iconBar}/>
        <div className="hero-text-container">
          <p className="hero-text">I am high schooler who is aspires to explore data science. I am interested in Artificial Intelligence and Machine Learning and hope to pursue an education in it as well as develop experience.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
