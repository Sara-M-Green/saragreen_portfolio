import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


class Navbar extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><a href="#about_container">About</a></li>
                    <li><a href="#projects_container">Projects</a></li>
                    <li><a href="#contact_container">Contact Me</a></li>
                </ul>
            </div>
        )
    }
}


export default Navbar