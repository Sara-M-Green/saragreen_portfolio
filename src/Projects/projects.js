import React, { Component } from 'react'
import './projects.css'
import quiz from '../images/quiz-app-screenshot.png'
import pownow from '../images/pownow-screenshot.png'
import turbotips from '../images/turbo-tips-screenshot.png'
import sierrasummits from '../images/sierra-summits-screenshot.png'

class Projects extends Component {
    render() {
        return (
            <div id="projects_container">
                    <h1 className="caps projects_header">Projects</h1>
                    
                    <a href="https://sierra-summits.vercel.app/"><h2 className="project_thumbnail">Sierra Summits</h2></a>
                    <img className="projects_screenshot" src={sierrasummits} />
                        <p className="project_desc">Blah blah blah I need to write what I learned and tech I used for this project blah blah blah</p>
                        <a href="" className="github">GitHub Repo</a>
                    <h2>Shelter Distilling Spirits Training</h2>
                    <img className="projects_screenshot" src={quiz} />
                        <p className="project_desc">A training quiz for Shelter Distilling's employees to test their knowledge on the spirits they will be selling.</p>
                    
                    <h2>Pow Now</h2>
                    <img className="projects_screenshot" src={pownow} />
                        <p className="project_desc">POW NOW is a web application that helps users pick the best ski resort for a spontaneous ski vacation by combining flight data with current snowfall at select ski resorts.</p>
                        <p className="project_desc">This project was built using HTML, CSS, JavaScript and JQuery. It is an example of my knowledge usings APIs and making GET requests.</p>
                    
                    <h2>Turbo Tips</h2>
                    <img className="projects_screenshot" src={turbotips} />
                        <p className="project_desc">A training quiz for Shelter Distilling's employees to test their knowledge on the spirits they will be selling.</p>
                        <p className="project_desc">This project was built using HTML, CSS, JavaScript and JQuery. It is an example of my knowledge of DOM traversal and manipulation.</p>

            </ div>
        )
    }
}

export default Projects