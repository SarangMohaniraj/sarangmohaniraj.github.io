import React from "react"
import "../styles/style.scss"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import IconBar from "../components/icon-bar"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <IconBar />
    <Hero />
  </Layout>
)

export default IndexPage
