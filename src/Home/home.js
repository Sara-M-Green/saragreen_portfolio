import React, { Component } from 'react'
import './home.css'
import photo from '../images/mountains-2.jpg'

class Home extends Component {
    render() {
        return (
            <div id="home_container">
                <div className="home_bubble">
                    <h1>Hi, I'm Sara Green</h1>
                    <h2>A Software Developer in Mammoth Lakes, CA.</h2>
                    <img className="photo" src={photo} />
                    <a href="#about_container" id="home_btn">Learn More</a>    
                </div>
                
            </div>
        )
    }
}

export default Home