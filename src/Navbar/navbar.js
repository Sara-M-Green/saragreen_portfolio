import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


class Navbar extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact Me</Link></li>
                </ul>
            </div>
        )
    }
}


export default Navbar