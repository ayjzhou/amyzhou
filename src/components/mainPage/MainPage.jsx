import React from 'react';
import './MainPage.css'
import me from '../../assets/img/me.jpg';
import {Animated} from "react-animated-css";
import AboutMeModal from './popUpMedia/AboutMeModal';
import ExperienceModal from './popUpMedia/ExperienceModal';



import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons,
} from "@material/react-card";
import IconButton from "@material/react-icon-button";
import MaterialIcon from "@material/react-icon-button";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import particlesParams from './particle'
import Particles from 'react-particles-js';
import MyNavBar from '../navbar/MyNavBar';
import LandingBody from "../landingbody/LandingBody";
import MyCard from "../mycard/MyCard";
import {Col} from "react-bootstrap";





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
            <div className="main-page-wrapper">
                <div className="landing">
                    <Particles
                        params={particlesParams} />
                    <MyNavBar/>
                    <LandingBody/>
                </div>
                <div className="cards-wrapper">
                    {/*<Col lg={6} sm={6} md={6} className="my-card">*/}
                        <MyCard title="BB 1" text="I am cute"/>
                    {/*</Col>*/}
                    {/*<Col lg={6} sm={6} md={6} className="my-card">*/}
                        <MyCard title="BB 2"/>
                    {/*</Col>*/}
                </div>
            </div>

        )
    }
}

export default MainPage;