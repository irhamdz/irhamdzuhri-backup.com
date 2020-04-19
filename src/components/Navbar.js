import React from "react";
import {Link} from "gatsby";
import github from "../img/github-icon.svg";
import kofi from "../img/Ko-fi_Logo_RGB.png";
// TODO: change logo
// import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
    handleKeyPress;

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
                className="navbar is-fixed-top has-shadow"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="logo">
                            IRHAM<span className="lite">DZUHRI.com</span>
                        </Link>
                        {/* <Link to="/" className="navbar-item" title="Logo">
              IRHAM
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link> */}
                        {/* Hamburger menu */}
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            role="button"
                            tabIndex="0"
                            onClick={() => this.toggleHamburger()}
                            onKeyPress={this.handleKeyPress}
                        >
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        <div
                            className="navbar-start has-text-centered"
                            style={{flexGrow: "1", justifyContent: "center"}}
                        >

                            {/* <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
                        </div>
                        <div className="navbar-end has-text-centered">
                            <Link className="navbar-item" to="/me">
                                Me
                            </Link>
                            <Link className="navbar-item" to="/projects">
                                Projects
                            </Link>
                            <Link className="navbar-item" to="/blog">
                                Blog
                            </Link>
                            <a className="navbar-item" href="img/Irham_Dzuhri_CV-9_Nov_2019.pdf"
                               target="_blank">Resume</a>
                            {/* <Link className="navbar-item" to="/">
                Resume
              </Link> */}
                            <a
                                className="navbar-item"
                                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><span className="icon"><img src={github} alt="Github"/></span>
                            </a>
                            <a
                                className="navbar-item"
                                href="https://ko-fi.com/irhamdz"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><span className="icon"><img src={kofi} alt="Ko-fi"/></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
