import React from 'react';
import './MainPage.css'
import {Button} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import AboutMeModal from './popUpMedia/AboutMeModal';
import ExperienceModal from './popUpMedia/ExperienceModal';



class MainPage extends React.Component{
    constructor(props){
        super(props);
        // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            aboutMeModal: false,
            experienceModal: false,
            projectModal: false,

        };

        this.openAboutMeModal = this.openAboutMeModal.bind(this);
        this.openExperienceModal = this.openExperienceModal.bind(this);
        this.openProjectModal = this.openProjectModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        // this.afterOpenModal = this.afterOpenModal.bind(this);
        // this.closeModal = this.closeModal.bind(this);
    }
    openAboutMeModal() {
        this.setState({aboutMeModal: true});
    }

    openExperienceModal() {
        this.setState({experienceModal: true});
    }

    openProjectModal() {
        this.setState({projectModal: true});
    }

    closeModal() {
        this.setState({aboutMeModal: false});
        this.setState({experienceModal: false});
        this.setState({projectModal: false});
    }

    render() {
        return(
            <div className="MainPage">
                <Animated className="slideInDown topBar" >
                    <nav className="stroke">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#aboutMe-wrapper">About Me</a></li>
                            <li><a href="#experience-wrapper">Experience</a></li>
                            <li><a href="#project-wrapper">Project</a></li>
                            <li><a href="#contact-wrapper">Contact</a></li>
                        </ul>
                    </nav>
                </Animated>
            <Animated>
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
                            I am a second year Computer Engineering
                            student at University of Waterloo.
                            I code, I workout, I eat, I sleep, then I repeat.
                            <Button id="learnMore"  bsStyle="primary" onClick={this.openAboutMeModal}>Learn More</Button>
                            <AboutMeModal
                                open={this.state.aboutMeModal}
                                close={this.closeModal}
                                index={"0"}
                            />

                        </div>
                    </div>
                </div>

                <div id="experience-wrapper" className="wrapper">
                    <span id="section-experience-pic"></span>
                    <div className="section-profile-right">
                        <div className="section-profile-text">
                            <span className="section-header-text">Experience</span>
                            I interned at  <a href="https://www.ethoca.com" target="_blank" rel="noopener noreferrer">Ethoca</a> as a Software Developer in an Agile environment.
                            My daily tasks included using Java, AngularJS and Javascript.
                            <Button id="learnMore"  bsStyle="primary" onClick={this.openExperienceModal}>Learn More</Button>
                          <ExperienceModal
                                open={this.state.experienceModal}
                                close={this.closeModal}
                                index={"1"}
                          />
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
                            <Button id="learnMore"  bsStyle="primary" href="https://play.google.com/store/apps/details?id=com.pickoky.game&hl=en" target="_blank" rel="noopener noreferrer">Learn More</Button>
                        </div>
                    </div>
                </div>

                <div id="contact-wrapper">
                    <a className="contact-blocks" id="contact-github" href="https://github.com/JunKeH" target="_blank" rel="noopener noreferrer">
                    </a>
                    <a className="contact-blocks" id="contact-linkedin" href="https://www.linkedin.com/in/JunKeH/" target="_blank" rel="noopener noreferrer">
                    </a>

                <a className="contact-blocks" id="contact-instagram" href="https://www.instagram.com/mickelpickel_h" target="_blank" rel="noopener noreferrer">
                    </a>

                    <a className="contact-blocks" id="contact-resume" href="#" >
                    </a>
                </div>

            </Animated>
            </div>
        )
    }
}

export default MainPage;