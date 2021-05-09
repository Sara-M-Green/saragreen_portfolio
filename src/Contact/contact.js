import React, { Component } from 'react'
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div id="contact_container">
                    <h1 className="caps contact_header">Contact Me</h1>
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
            </ div>
        )
    }
}

export default Contact