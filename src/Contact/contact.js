import React, { Component } from 'react'
import './contact.css'
import linkedin from '../images/linkedin-logo.png'
import github from '../images/github-logo.png'

class Contact extends Component {
    render() {
        return (
            <div id="contact_container">
                    <h1 className="caps section_header">Contact Me</h1>
                    <p className="contact_text">Let's get in touch! Feel free to send me an email at <a className="email-link" href="mailto:smg105c@gmail.com">smg105c@gmail.com</a> or follow me on social media.</p>
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

                        <a href="https://www.linkedin.com/in/saragreen91/" target="blank" rel="noopener noreferrer"><img className="logo" src={linkedin} alt="LinkedIn logo" /></a>
                        <a href="https://github.com/Sara-M-Green" target="_blank" rel="noopener noreferrer"><img className="logo" src={github} alt="GitHub logo" /></a>
                    </div> 
            </ div>
        )
    }
}

export default Contact