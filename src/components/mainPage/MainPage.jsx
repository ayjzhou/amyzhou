import React from 'react';
import './MainPage.css'
import {Button} from 'react-bootstrap';
import {Animated} from "react-animated-css";

class MainPage extends React.Component{
    constructor(props){
        super(props);
        // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            popUps: {
                aboutMePopUp: 0,

            }
        }
    }

    // componentDidMount() {
    //     this.updateWindowDimensions();
    //     window.addEventListener('resize', this.updateWindowDimensions);
    // }
    //
    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.updateWindowDimensions);
    // }
    //
    // updateWindowDimensions() {
    //     //this.setState({ width: window.innerWidth, height: window.innerHeight });
    //     let elem = document.getElementById("greeting");
    // }

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
                <div id="greeting">
                    <div className="greeting-text">
                        Welcome!
                    </div>
                </div>
                <div id="aboutMe-wrapper" className="wrapper">


                    <div id="section-profile-pic"></div>

                    <div className="section-profile-right">
                        <div className="section-profile-text">
                            <span className="section-header-text"> About Me</span>
                            I'm currently a second year Computer Engineering
                            student at Waterloo.
                            I eat, I sleep, then I repeat.
                            <Button id="learnMore"  bsStyle="primary">Learn More</Button>
                        </div>
                    </div>
                </div>

                <div id="experience-wrapper" className="wrapper">
                    <span id="section-experience-pic"></span>
                    <div id className="section-profile-right">
                        <div className="section-profile-text">
                            <span className="section-header-text">Experience</span>
                            I interned at Ethoca as a Software Developer in an Agile environment.
                            My daily tasks include using Java, AngularJS and Git.<br/>
                            <Button id="learnMore"  bsStyle="primary">Learn More</Button>
                        </div>
                    </div>
                </div>

                <div id="project-wrapper" className="wrapper">
                    <span id="section-project-pic"></span>
                    <div className="section-profile-right">
                        <div className="section-profile-text">
                            <span className="section-header-text"> Project</span>
                            I love playing games...
                            Why not build my own?
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