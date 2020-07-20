import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/style.scss"
import "../library"

import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
   const content = useStaticQuery(graphql`
    {
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

  const icons = content.allIconBarJson.edges;
  return(
    <React.Fragment>
      <Header/>
      <main className="container">{children}</main>
      <Footer icons={icons}/>
    </React.Fragment>
  )
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;