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
                <h1 className="caps section_header">My Projects</h1>
                <div className="thumbnail_container">


                    {/* project 1 - Sierra Summits */}
                    <div className="flex_item">
                        <a className="project_link" href="https://sierra-summits.vercel.app/" target="blank" rel="noopener noreferrer"><h2 className="project_title">Sierra Summits</h2></a>
                        <a href="https://sierra-summits.vercel.app/" target="blank" rel="noopener noreferrer"><img className="projects_screenshot" src={sierrasummits} alt="Sierra Summits screenshot" /></a>
                            <p className="project_desc">Sierra Summits is a web application designed for peak baggers of the Sierra Nevada Mountain range. This app allows users to find and filter peaks based on mileage, elevation gain, and/or class.</p>
                            <p>Sierra Summits is a full-stack project using React, Node and PostgreSQL. It displays my knowledge of RESTful APIs using CRUD operations and relational databases.</p>
                            <a href="https://github.com/Sara-M-Green/sierra-summits-client" target="blank" rel="noopener noreferrer" className="github">GitHub Repo</a>
                    </div>

                    {/* Project 2 - Spirit Quiz */}
                    <div className="flex_item">
                        <a className="project_link" href="https://sara-m-green.github.io/ShelterDistillingSpiritQuiz/" target="blank" rel="noopener noreferrer"><h2 className="project_title">Shelter Distilling Spirits Quiz</h2></a>
                        <a href="https://sara-m-green.github.io/ShelterDistillingSpiritQuiz/" target="blank" rel="noopener noreferrer"><img className="projects_screenshot" src={quiz} alt="Shelter Spirit Quiz screenshot" /></a>
                            <p className="project_desc">This project is a functional training quiz for Shelter Distilling's employees to test their knowledge on the spirits they will be selling.</p>
                            <p className="project_desc">Shelter Distilling Spirit Quiz is a front-end development project built using HTML, CSS, JavaScript and JQuery. It displays of my knowledge of responsive mobile-first design, DOM traversal and manipulation.</p>
                            <a href="https://github.com/Sara-M-Green/ShelterDistillingSpiritQuiz" target="blank" rel="noopener noreferrer" className="github">GitHub Repo</a>
                    </div>


                    {/* Project 3 - Pow Now*/}
                    <div className="flex_item">
                        <a className="project_link" href="https://sara-m-green.github.io/pow-now/" target="blank" rel="noopener noreferrer"><h2 className="project_title">Pow Now</h2></a>
                        <a href="https://sara-m-green.github.io/pow-now/" target="blank" rel="noopener noreferrer"><img className="projects_screenshot" src={pownow} alt="Pow Now screenshot" /></a>
                            <p className="project_desc">POW NOW is a web application that helps users pick the best ski resort for a spontaneous ski vacation by combining flight price data with current snowfall at select ski resorts.</p>
                            <p className="project_desc">This project was built using HTML, CSS, JavaScript and JQuery. It displays my ability to make GET requests to multiple third party API usings APIs and display the combination of data in a useful way for the user.</p>
                            <a href="https://github.com/Sara-M-Green/pow-now" target="blank" rel="noopener noreferrer" className="github">GitHub Repo</a>
                    </div>

                    {/* Project 4 */}

                    <div className="flex_item">
                        <a className="project_link" href="https://turbotips.vercel.app/" target="blank" rel="noopener noreferrer"><h2 className="project_title">Turbo Tips</h2></a>
                        <a href="https://turbotips.vercel.app/" target="blank" rel="noopener noreferrer"><img className="projects_screenshot" src={turbotips} alt="Turbo Tips Screenshot" /></a>
                            <p className="project_desc">Turbo Tips is a bartender tip out application for employees at Shelter Distilling. It eliminates manual tip calculations and errors, stores tip data, and shows accumulated tip totals for each employee in a specified date range.</p>
                            <p className="project_desc">This is a full-stack project built with React, Node, Express and PostgreSQL. This project displays my React skills using reusable components with props, state and event handling functions. Turbo tips uses a relational database, and CRUD operations for a RESTful API.</p>
                            <a href="https://github.com/Sara-M-Green/shelter-tipout-client" target="blank" rel="noopener noreferrer" className="github">GitHub Repo</a>
                    </div>
                
                </div>
            </ div>
        )
    }
}

export default Projects