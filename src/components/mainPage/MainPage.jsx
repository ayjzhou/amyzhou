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
        console.log(this.state.aboutMeModal);
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


                {/*<Modal*/}
                    {/*isOpen={this.state.modalIsOpen}*/}
                    {/*onAfterOpen={this.afterOpenModal}*/}
                    {/*onRequestClose={this.closeModal}*/}
                    {/*style={customStyles}*/}
                    {/*contentLabel="Example Modal"*/}
                {/*>*/}

                    {/*<h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>*/}
                    {/*<button onClick={this.closeModal}>close</button>*/}
                    {/*<div>I am a modal</div>*/}
                    {/*<form>*/}
                        {/*<input />*/}
                        {/*<button>tab navigation</button>*/}
                        {/*<button>stays</button>*/}
                        {/*<button>inside</button>*/}
                        {/*<button>the modal</button>*/}
                    {/*</form>*/}
                {/*</Modal>*/}


                <div id="aboutMe-wrapper" className="wrapper">

                    <div id="section-profile-pic"></div>

                    <div className="section-profile-right">
                        <div className="section-profile-text">
                            <span className="section-header-text"> About Me</span>
                            I'm currently a second year Computer Engineering
                            student at Waterloo.<br/>
                            I eat, I sleep, then I repeat.
                            <Button id="learnMore"  bsStyle="primary" onClick={this.openAboutMeModal}>Learn More</Button>
                            {this.state.aboutMeModal ? <AboutMeModal
                                open={this.state.aboutMeModal}
                                close={this.closeModal}
                            /> : null}

                        </div>
                    </div>
                </div>

                <div id="experience-wrapper" className="wrapper">
                    <span id="section-experience-pic"></span>
                    <div className="section-profile-right">
                        <div className="section-profile-text">
                            <span className="section-header-text">Experience</span>
                            I interned at Ethoca as a Software Developer in an Agile environment.
                            My daily tasks include using Java, AngularJS and Javascript.<br/>
                            <Button id="learnMore"  bsStyle="primary" onClick={this.openExperienceModal}>Learn More</Button>
                            {this.state.experienceModal ? <ExperienceModal
                                open={this.state.experienceModal}
                                close={this.closeModal}
                            />: null}
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
                            <Button id="learnMore"  bsStyle="primary" onClick={this.openProjectModal}>Learn More</Button>
                            <ProjectModal
                                open={this.state.projectModal}
                                close={this.closeModal}
                            />
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