import { Component } from "react";
import getHomepageMainText from "./text/HomepageText";
import '../stylesheets/Homepage.scss';
import Slider from './Slider';
import test1 from './images/test1.jpg';
import FadeInSection from "./FadeInSection";

class Homepage extends Component{
    constructor (props) {
        super(props)

    this.images = [
        test1,
        test1,
        test1
    ]
    }

    render() {
        return(
            <div className={"homepage-content"}> 
                <Slider slides={this.images} />

                <FadeInSection>
                    {getHomepageMainText()}
                </FadeInSection>
            </div>
        )
    }
}

export default Homepage;
