import React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <Link style={{ color: "black" }} to="/">
            Back
          </Link>{" "}
        </div>
      </footer>
    );
  }
};

export default Footer;
