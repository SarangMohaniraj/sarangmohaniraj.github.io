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
      myIcon: file(relativePath: { eq: "icons/icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 32, maxHeight: 32) {
            ...GatsbyImageSharpFluid_withWebp
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

  const icons = content.allIconBarJson.edges;
  const myIcon = content.myIcon;

  return(
    <React.Fragment>
      <Header icon={myIcon}/>
      <main className="container">{children}</main>
      <Footer icons={icons}/>
    </React.Fragment>
  )
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;