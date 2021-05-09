import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div className="home_container">
                <div className="home_bubble">
                    <h1>Hi, I'm Sara Green</h1>
                    <h2>A Software Developer in Mammoth Lakes, CA.</h2>
                    <a href="#about_container" id="home_btn">Learn More</a>    
                </div>
                
            </div>
        )
    }
}

export default Home