import React, { useState, useEffect, useRef, Component } from 'react'
import "../stylesheets/Slider.scss"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Slider extends Component{
    constructor (props) {
        super(props)
        this.slides = this.props.slides;
    }

    render() {
        return(
            <div className="slider">
                <AliceCarousel
                autoPlayInterval={"5000"}
                autoPlay={false}
                fadeOutAnimation={true}
                infinite={true}
                disableButtonsControls={true}>
                    {this.slides.map((slide, i) => (
                    <img key={slide + i} src={slide} className={"slider-image"} />))}
                </AliceCarousel>
            </div>
        )
    }
}

export default Slider;
