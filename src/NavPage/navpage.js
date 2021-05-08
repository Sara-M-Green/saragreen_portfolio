import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navpage.css'


class NavPage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Link className="home_btn" to="/about">About</Link>
                    <Link className="home_btn" to="/projects">Projects</Link>
                    <Link className="home_btn" to="/conatct">Contact</Link>
                </div>
                
            </div>
        )
    }
}

export default NavPage