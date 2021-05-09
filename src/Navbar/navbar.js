import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            scrollPos: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top < -760
        });
    }

    render() {
        return (
            <nav className={this.state.show ? "active" : "hidden"}>
                <ul id="nav">
                    <li><a href="home_container">Home</a></li>
                    <li><a href="#projects_container">Projects</a></li>
                    <li><a href="#about_container">About</a></li>
                    <li><a href="#contact_container">Contact Me</a></li>
              </ul>
            </nav>
        )
    }
}

export default Navbar