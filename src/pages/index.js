import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../library"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => {
  const content = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            description
            tech
            githubURL
            url
            #image {
            #  childImageSharp {
            #    fluid(maxHeight: 150) {
            #      ...GatsbyImageSharpFluid
            #      ...GatsbyImageSharpFluidLimitPresentationSize
            #    }
            #  }
            #}
          }
        }
      }
      allSkillsJson {
        edges {
          node {
            area
            skills
          }
        }
      }
      allIconBarJson {
        edges {
          node {
            icon
            url
          }
        }
      }
    }
  `);

  const projects = content.allProjectsJson.edges;
  const skills = content.allSkillsJson.edges;
  const iconBar = content.allIconBarJson.edges;
  return(
    <Layout>
      <SEO/>
      <Hero iconBar={iconBar}/>
      <About />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <Contact />
    </Layout>
  )
}

export default IndexPage
