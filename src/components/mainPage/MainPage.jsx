import React from 'react';
import './MainPage.css'
import {Button} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import AboutMeModal from './popUpMedia/AboutMeModal';
import ExperienceModal from './popUpMedia/ExperienceModal';
import ProjectModal from './popUpMedia/ProjectModal';



//
// const customStyles = {
//     content : {
//         top                   : '50%',
//         left                  : '50%',
//         right                 : 'auto',
//         bottom                : 'auto',
//         marginRight           : '-50%',
//         transform             : 'translate(-50%, -50%)'
//     }
// };

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
    // afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     this.subtitle.style.color = '#f00';
    // }
    //
    // closeModal() {
    //     this.setState({modalIsOpen: false});
    // }

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
                            I'm currently a second year Computer Engineering
                            student at University of Waterloo.<br/>
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
                            I interned at  <a href="https://www.ethoca.com" target="_blank">Ethoca</a> as a Software Developer in an Agile environment.
                            My daily tasks included using Java, AngularJS and Javascript. I have also
                            learned other interesting things on my spare time!
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
                            <Button id="learnMore"  bsStyle="primary" href="https://play.google.com/store/apps/details?id=com.pickoky.game&hl=en" target="_blank">Learn More</Button>
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
                    <a className="contact-blocks" id="contact-resume" href="#" >
                    </a>
                </div>

            </Animated>
            </div>
        )
    }
}

export default MainPage;