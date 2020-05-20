import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

export default class Layout extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    const { children } = this.props;
    return(
      <div className="layout">
        <Header/>
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

