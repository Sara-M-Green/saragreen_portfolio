import React, { Component } from 'react'
import './contact.css'
import linkedin from '../images/linkedin-logo.png'
import github from '../images/github-logo.png'

class Contact extends Component {
    render() {
        return (
            <div id="contact_container">
                    <h1 className="caps section_header">Contact Me</h1>
                    <div className="email-form">
                            <form action="https://formspree.io/f/xrgoeoyp" method="POST">
                                <label htmlFor="name">Name:</label>
                                <input id="name" type="text" name="name" required />
                                
                                <label htmlFor="email">Email:</label>
                                <input id="email" type="text" name="_replyto" required />
                                
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" required></textarea>
                                
                                <button type="submit">SEND</button>
                            </form>
                    </div>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/saragreen91/" target="blank"><img className="logo" src={linkedin} alt="LinkedIn logo" /></a>
                        <a href="https://github.com/Sara-M-Green" target="_blank"><img className="logo" src={github} alt="GitHub logo" /></a>
                    </div> 
            </ div>
        )
    }
}

export default Contact