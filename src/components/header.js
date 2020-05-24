import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react"

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.header = React.createRef();

    this.state = {
      prevScrollY: typeof window !== `undefined` ? window.pageYOffset : null,
      visible: true,
      height: "55"
    };

  }

  handleScroll = () => {
    if (typeof window !== `undefined`) {
      const { prevScrollY } = this.state;

      const currentScrollY = window.pageYOffset;
      const visible = prevScrollY > currentScrollY;

      this.setState({
        prevScrollY: currentScrollY,
        visible,
        height: this.header.current.clientHeight || "55"
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
    const { visible, height, currentScrollY } = this.state;
    return(
      <header className="header" style={{top: !visible ? `-${height+5}px` : 0, boxShadow: currentScrollY < height*4 ? "0 4px 2px -2px rgba(0,0,0,.16)" : "none"}} ref={this.header}>
        <nav>
          <AnchorLink className="navbar-brand" to="/#hero" title="Sarang Mohaniraj" stripHash />
          <ul className="navbar">
            {[
              {name: "About Me", to: "/#about"},
              {name: "Skills", to: "/#skills"},
              {name: "Projects", to: "/#projects"},
              {name: "Contact", to: "/#contact"}
            ].map(section => (
              <li className="nav-item" key={section.name}><AnchorLink to={section.to} title={section.name} stripHash /></li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
}


