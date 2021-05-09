import React, { Component } from 'react'
import me from '../images/climb.jpg'
import './about.css'
import Navbar from '../Navbar/navbar'

class About extends Component {
    render() {
        return (
            <div id="about_container">
                <Navbar />
                    <h1 className="caps section_header1">About Me</h1>
                    <img className="portrait" src={me} alt="self-portrait" />
                    <div className="about_text">
                        <p>I am an adventure enthusiast who loves to code! I graduated from Florida State University with a Master of Science in Marketing degree and have since transitioned into the computer science industry. I enjoy the analytical nature of coding along with the ability to express creativity.</p>
                        <p>I have a background in customer service which has given me great interpersonal competence. I love working with people and pride myself on my communication skills. I am proficient with HTML, CSS JavaScript, React, Node and Express, and have relational database experience using SQL and PostgreSQL.</p> 
                        <p>I love to challenge myself both physically and mentally. Whether it's climbing to the top of a mountain or debugging at my desk, I have the endurance to conquer any test put in front of me. Outside of web development, my hobbies include mountain biking, rock climbing, hiking, skiing and taking my dog on walks. I’m constantly inspired by the world around me, and web development has given me the capability to turn my ideas into something real.</p>     
                    </div>
                    
            </ div>
        )
    }
}

export default About