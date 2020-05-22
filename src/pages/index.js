import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../library"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import IconBar from "../components/icon-bar"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"

const IndexPage = () => {
  const content = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            tech
            githubURL
            url
            image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
  const iconBar = content.allIconBarJson.edges;
  return(
    <Layout>
      <SEO/>
      <IconBar iconBar={iconBar}/>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects}/>
    </Layout>
  )
}

export default IndexPage
