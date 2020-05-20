import React from "react"
import "../styles/style.scss"
import "../library"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import IconBar from "../components/icon-bar"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <IconBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
  </Layout>
)

export default IndexPage
