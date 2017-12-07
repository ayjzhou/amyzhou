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
                            <li><a href="#aboutMe-wrapper">About Me</a></li>
                            <li><a href="#experience-wrapper">Experience</a></li>
                            <li><a href="#project-wrapper">Project</a></li>
                            <li><a href="#contact-wrapper">Contact</a></li>
                        </ul>
                    </nav>
                </Animated>
            <Animated className="fadeIn">
                <div className="greeting">
                    <div className="greeting-text">
                        <h1>Welcome!</h1>
                    </div>
                </div>
                <div id="aboutMe-wrapper" className="wrapper">
                    <h2 className="section-header-text"> About Me</h2>

                    <div id="section-profile-pic"></div>

                    <div className="section-profile-right">
                        <div className="section-profile-text">I'm currently a second year Computer Engineering
                            student at Waterloo.<br/>
                            I eat, I sleep, then I repeat.
                            <Button id="learnMore"  bsStyle="primary">Learn More</Button>
                        </div>
                    </div>
                </div>

                <div id="experience-wrapper" className="wrapper">
                    <h2 className="section-header-text">Experience</h2>
                    <span id="section-experience-pic"></span>
                    <div id className="section-profile-right">
                        <div className="section-profile-text">I interned at Ethoca as a Software Developer in an Agile environment.<br/>
                            My daily tasks include using Java, AngularJS and Git.<br/>
                            <Button id="learnMore"  bsStyle="primary">Learn More</Button>
                        </div>
                    </div>
                </div>

                <div id="project-wrapper" className="wrapper">
                    <h2 className="section-header-text"> Project</h2>
                    <span id="section-project-pic"></span>
                    <div className="section-profile-right">
                        <div className="section-profile-text">I love playing games... <br/>
                            Why not build my own?<br/>
                            Ballrathon is an Android game live on Google Play store.
                            <Button id="learnMore"  bsStyle="primary">Learn More</Button>
                        </div>
                    </div>
                </div>

                <div id="contact-wrapper">
                    <a className="contact-blocks" id="contact-github" href="https://github.com/MickelPickelH" target="_blank">
                    </a>
                    <a className="contact-blocks" id="contact-linkedin" href="https://www.linkedin.com/in/jun-ke-michael-huang/" target="_blank">

                    </a>
                    <a className="contact-blocks" id="contact-instagram" href="https://www.instagram.com/mickelpickel_h" target="_blank">


                    </a>
                </div>

            </Animated>
            </div>
        )
    }
}

export default MainPage;