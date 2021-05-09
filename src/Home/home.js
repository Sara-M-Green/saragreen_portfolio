import React, { Component } from 'react'
import './home.css'
import photo from '../images/me.jpg'

class Home extends Component {
    render() {
        return (
            <div id="home_container">
                <div className="home_bubble">
                    <h1>Hi, I'm Sara Green</h1>
                    <h2>A Software Developer in Mammoth Lakes, CA.</h2>
                    <img className="photo" src={photo} alt="self portrait" />
                    <a href="#projects_container" id="home_btn">Check Out My Work</a>    
                </div>
                
            </div>
        )
    }
}

export default Home