'use client';

import '../public/css/ImageSlider.css';
import React,{useState} from "react";

const ImageSlider = () => {
    const images = [
        '/img/multiple-idp-support.png',
        '/img/jit-and-scim-provisioning.png'
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }
    
    return(
        <div className='slider-container'>
            <button className='prev' onClick={prevSlide}> &#10094; </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex+1}`} className='slider-image' />
            <button className='next' onClick={nextSlide}> &#10095; </button>
        </div>
    )
}

export default ImageSlider