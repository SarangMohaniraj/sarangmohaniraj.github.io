import { Link } from "gatsby"
import React from "react"

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.header = React.createRef();

    this.state = {
      prevScrollY: typeof window !== `undefined` ? window.pageYOffset : null,
      visible: true
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
    const { visible, height } = this.state;
    return(
      <header style={{top: !visible ? `-${height+5}px` : 0}} ref={this.header}>
        <nav>
          <Link className="navbar-brand"to="/">Sarang Mohaniraj</Link>
          <ul className="navbar">
            <li className="nav-item"><Link to="/#about">About Me</Link></li>
            <li className="nav-item"><Link to="/#skills">Skills</Link></li>
            <li className="nav-item"><Link to="/#projects">Projects</Link></li>
            <li className="nav-item"><Link to="/#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}


