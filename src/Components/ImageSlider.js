import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1194399/pexels-photo-1194399.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Read, Learn, Grow</h3>
                        <p>Find materials for every age and interest.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/6214937/pexels-photo-6214937.jpeg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>A World of Knowledge Awaits</h3>
                        <p>Access books, journals, and digital resources.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/28839153/pexels-photo-28839153.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Discover Your Next Favorite Book</h3>
                        <p>Browse stories that spark imagination.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
