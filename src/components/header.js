import { Link } from "gatsby"
import React from "react"

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollY: window.pageYOffset,
      visible: true
    };
  }

  handleScroll = () => {
    const { prevScrollY } = this.state;

    const currentScrollY = window.pageYOffset;
    const visible = prevScrollY > currentScrollY;

    this.setState({
      prevScrollY: currentScrollY,
      visible
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render(){
    const { visible } = this.state;
    return(
      <header  style={{top: !visible ? "-40px" : 0}} >
        <nav>
          <ul className="navbar">
            <div className="brand">
              <li><Link to="/">Sarang Mohaniraj</Link></li>
            </div>
            <div className="nav-items">
              <li className="nav-item"><Link to="/#about">About Me</Link></li>
              <li className="nav-item"><Link to="/#skills">Skills</Link></li>
              <li className="nav-item"><Link to="/#projects">Projects</Link></li>
              <li className="nav-item"><Link to="/#contact">Contact</Link></li>
            </div>
          </ul>
        </nav>
      </header>
    )
  }
}


