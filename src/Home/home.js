import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'


class Home extends Component {
    render() {
        return (
            <div>
                <div className="home_container">
                    <h1>Hi, I'm Sara Green</h1>
                    <h2>A Software Developer in Mammoth Lakes, CA.</h2>
                    <Link to="/nav" id="home_btn">Learn More</Link>    
                </div>
                
            </div>
        )
    }
}

export default Home