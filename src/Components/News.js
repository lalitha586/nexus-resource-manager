import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h1 className='news-title'>Library Resources</h1>
            <div className='news-data'>
                <div className='news-empty'></div>
                
                {/* Column 1: Library Collections */}
                <div>
                    <h1 className='news-subtitle'>Collections</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p><strong>Open Textbooks</strong></p>
                            <p>Curated digital textbooks for core curriculum and elective subjects.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p><strong>Research Papers</strong></p>
                            <p>Access to peer-reviewed articles, journals, and scholarly publications.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p><strong>Study Guides</strong></p>
                            <p>Comprehensive summaries and cheat sheets for exam preparation.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p><strong>Lecture Notes</strong></p>
                            <p>Detailed notes and transcripts categorized by academic level.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p><strong>Reference Works</strong></p>
                            <p>Digital dictionaries, encyclopedias, and academic reference maps.</p>
                        </div>
                    </div>
                </div>

                <div className='news-empty'></div>

                {/* Column 2: Subject Categories */}
                <div>
                    <h1 className='news-subtitle'>Categories</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p><strong>STEM Resources</strong></p>
                            <p>Materials for Science, Technology, Engineering, and Mathematics.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p><strong>Humanities & Arts</strong></p>
                            <p>Educational resources for History, Literature, and Philosophy.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p><strong>Social Sciences</strong></p>
                            <p>Content focused on Economics, Sociology, and Psychology.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p><strong>Professional Development</strong></p>
                            <p>Materials designed for teacher training and academic growth.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p><strong>Language Studies</strong></p>
                            <p>Tools and texts for multilingual learning and linguistics.</p>
                        </div>
                    </div>
                </div>
                
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News