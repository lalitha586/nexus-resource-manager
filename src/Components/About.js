import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About NEXUS LIBRARY</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        Our Resource Library is a dedicated digital platform designed 
                        to streamline how students and educators interact with knowledge. 
                        We believe that high-quality educational materials should be 
                        organized, searchable, and accessible to everyone, everywhere. 
                        Our mission is to empower the academic community.<br/>
                        <br/>
                        Our platform provides a comprehensive repository of textbooks, 
                        research papers, and study guides. It is specifically designed 
                        to be a searchable and user-friendly interface for both 
                        students and educators. By centralizing these resources, 
                        we aim to simplify the research process and boost academic 
                        performance across all disciplines for our growing community.<br/>
                        <br/>
                        Administrators can easily upload and organize resources to 
                        ensure the collection remains current and secure. Users are 
                        empowered to search, access, and download materials directly 
                        for offline study, while also providing valuable feedback 
                        to help us improve our library and educational mission.<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
