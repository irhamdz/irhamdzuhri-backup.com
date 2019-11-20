import React from "react";
import instagram from "../../static/img/instagram.svg"
import linkedin from "../../static/img/linkedin.svg"
// import logo from "../img/logo.svg";
// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          
            Made by{" "}
            <a href="https://www.linkedin.com/in/irhamdz/" target="_blank" rel="noopener noreferrer">Irham Dzuhri</a>,
            Built with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gastby</a> and hosted
            by <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.
        </div>
        <div className="logo-list has-text-centered">
          <a href="https://www.linkedin.com/in/irhamdz/" target="_blank" rel="noopener noreferrer" title="linkedin">
            <img src={linkedin} alt="linkedin"></img>
          </a>
          <a href="https://www.instagram.com/dzuhri/" target="_blank" rel="noopener noreferrer" title="instagram">
            <img src={instagram} alt="instagram"></img>
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
