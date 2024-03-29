import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        {/* Add a div with classname container to bring back a centered column view */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            {/* <img src={logo} alt="Kaldi" style={{ width: "88px" }} /> */}
            Mary Choueiter
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <div className="navbar-end has-text-right">
            <Link className="navbar-item" to="/">
              Work
            </Link>
            <Link className="navbar-item" to="/side-notes">
              Side Notes
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
