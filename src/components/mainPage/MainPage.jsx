import React from 'react';
import './MainPage.css'
import {Button} from 'react-bootstrap';
import {Animated} from "react-animated-css";

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            navBarState: 1,
            width: '0',
            height: '0'
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        let elem = document.getElementById("header");
        // elem.style.opacity = (1-window.scrollTop/elem.style.height);
    }

    render(){
        return(
            <div className="MainPage">
                <Animated className="slideInDown topBar" >
                    <nav class="stroke">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#aboutMe">About Me</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#project">Project</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </Animated>
            <Animated className="fadeIn">
                <div className="section">
                    <div className="section-text">
                        <h1>Welcome!</h1>
                    </div>
                </div>
                <div id="aboutMe" className="wrapper">
                    <h2 className="profile-about-me-text"> About Me</h2>
                    <div id="section-profile-pic">

                    </div>

                    <div className="section-profile-right">
                        <div className="section-profile-text">I'm currently a second year Computer Engineering
                            student at Waterloo.<br/>
                            I made this website because I got bored.
                            <Button id="learnMore"  bsStyle="primary">Learn More</Button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div id="experience" className="wrapper">
                    <h2 className="profile-about-me-text"> Project</h2>
                    <span id="section-project-pic"></span>
                    <div className="section-profile-right">
                        <div className="section-profile-text">I love playing games... <br/>
                            Why not build my own?<br/>
                            Ballrathon is an Android game live on Google Play store.<br/>
                            <Button id="learnMore"  bsStyle="primary">Learn More</Button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div id="project" className="wrapper">
                    <h2 className="profile-about-me-text"> Project</h2>
                    <span id="section-project-pic"></span>
                    <div className="section-profile-right">
                        <div className="section-profile-text">I love playing games... <br/>
                            Why not build my own?<br/>
                            Ballrathon is an Android game live on Google Play store.<br/>
                            <Button id="learnMore"  bsStyle="primary">Learn More</Button>
                        </div>
                    </div>
                </div>
            </Animated>
            </div>
        )
    }
}

export default MainPage;