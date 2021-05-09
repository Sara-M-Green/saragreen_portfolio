import React, { Component } from 'react'
import './projects.css'
import quiz from '../images/quiz-app-screenshot.png'
import pownow from '../images/pow-now-screenshot.png'
import turbotips from '../images/turbo-tips-screenshot.png'
import sierrasummits from '../images/sierra-summits-screenshot.png'

class Projects extends Component {
    render() {
        return (
            <div id="projects_container">
                    <h1 className="caps projects_header">Projects</h1>
                    
                    {/* project 1 */}
                    <a href="https://sierra-summits.vercel.app/" target="blank"><h2 className="project_title">Sierra Summits</h2></a>
                    <a href="https://sierra-summits.vercel.app/" target="blank"><img className="projects_screenshot" src={sierrasummits} alt="Sierra Summits screenshot" /></a>
                        <p className="project_desc">Blah blah blah I need to write what I learned and tech I used for this project blah blah blah</p>
                        <a href="https://github.com/Sara-M-Green/sierra-summits-client" target="blank" className="github">GitHub Repo</a>
                    
                    {/* Project 2 */}
                    <a href="https://sara-m-green.github.io/ShelterDistillingSpiritQuiz/" target="blank"><h2 className="project_title">Shelter Distilling Spirits Training</h2></a>
                    <a href="https://sara-m-green.github.io/ShelterDistillingSpiritQuiz/" target="blank"><img className="projects_screenshot" src={quiz} alt="Shelter Spirit Quiz screenshot" /></a>
                        <p className="project_desc">A training quiz for Shelter Distilling's employees to test their knowledge on the spirits they will be selling.</p>
                        <a href="https://github.com/Sara-M-Green/ShelterDistillingSpiritQuiz" target="blank" className="github">GitHub Repo</a>

                    {/* Project 3 */}
                    <a href="https://sara-m-green.github.io/pow-now/" target="blank"><h2 className="project_title">Pow Now</h2></a>
                    <a href="https://sara-m-green.github.io/pow-now/" target="blank"><img className="projects_screenshot" src={pownow} alt="Pow Now screenshot" /></a>
                        <p className="project_desc">POW NOW is a web application that helps users pick the best ski resort for a spontaneous ski vacation by combining flight data with current snowfall at select ski resorts.</p>
                        <p className="project_desc">This project was built using HTML, CSS, JavaScript and JQuery. It is an example of my knowledge usings APIs and making GET requests.</p>
                        <a href="https://github.com/Sara-M-Green/pow-now" target="blank" className="github">GitHub Repo</a>

                    {/* Project 4 */}
                    <a href="https://turbotips.vercel.app/" target="blank"><h2 className="project_title">Turbo Tips</h2></a>
                    <a href="https://turbotips.vercel.app/" target="blank"><img className="projects_screenshot" src={turbotips} alt="Turbo Tips Screenshot" /></a>
                        <p className="project_desc">Tip out application for employees at Shelter Distilling which eliminates manual tip calculations and errors, stores tip data, and shows accumulated tip totals for each employee in a specified date range.</p>
                        <p className="project_desc">This project was built using HTML, CSS, JavaScript, React, Node, Express and PostgreSQL It is an example of my knowledge of RESTful APIs and relational databases.</p>
                        <a href="https://github.com/Sara-M-Green/shelter-tipout-client" target="blank" className="github">GitHub Repo</a>
            </ div>
        )
    }
}

export default Projects