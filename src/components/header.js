import { AnchorLink } from "gatsby-plugin-anchor-links";
import Scrollspy from 'react-scrollspy'
import React from "react"

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.header = React.createRef();

    this.state = {
      prevScrollY: typeof window !== `undefined` ? window.pageYOffset : null,
      visible: true,
      height: "58",
      clickNav: false
    };

  }


  handleScroll = () => {
    if (typeof window !== `undefined`) {
      const { prevScrollY, clickNav } = this.state;

      const currentScrollY = window.pageYOffset;
      let visible = prevScrollY > currentScrollY;

      /* Click Nav is so when one of the nav items are clicked and scrolling to its respective section,
       * navbar stays visible for the entire scroll, as well as afterward. It will go away when scrolled downward.
       * The navbar-brand doesn't need clickNav because the scroll direction is always upward, so it will always
       * show.
       *
       * Click Nav is only meant for medium screens and larger when the navbar is expanded
       * It was added so the user can see the slide transition when the section is clicked.
       */

      if(clickNav){
        visible = true;
        if(prevScrollY - currentScrollY > -3)
          setTimeout(() => this.setState({clickNav: false}),500);
      }


      this.setState({
        prevScrollY: currentScrollY,
        visible,
        height: this.header.current.clientHeight || "58"
      });
    }
  };


  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render(){
    const { visible, height, prevScrollY } = this.state;
    return(
      <header className="header" style={{top: !visible ? `-${height+5}px` : 0, boxShadow: prevScrollY < height*4 ? "none" : "0 4px 2px -2px rgba(0,0,0,.16)"}} ref={this.header}>
        <nav>
          <AnchorLink className="navbar-brand" to="/#hero" title="Sarang Mohaniraj" stripHash />
          <Scrollspy items={['about', 'skills', 'projects', 'contact']} currentClassName="active" className="navbar" offset={-75}>
            {[
              {name: "About Me", to: "/#about"},
              {name: "Skills", to: "/#skills"},
              {name: "Projects", to: "/#projects"},
              {name: "Contact", to: "/#contact"}
            ].map(section => (
              <li className="nav-item" key={section.name}><AnchorLink to={section.to} title={section.name}><span onClick={() => this.setState({clickNav: true})}>{section.name}</span></AnchorLink></li>
            ))}
            <li className="slide"></li>
          </Scrollspy>
        </nav>
      </header>
    )
  }
}


