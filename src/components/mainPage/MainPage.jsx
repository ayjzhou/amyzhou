import React from 'react';
import './MainPage.css'
import {Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import particlesParams from './particle'
import Particles from 'react-particles-js';
import MyNavBar from '../navbar/MyNavBar';
import LandingBody from "../landingbody/LandingBody";
import MyCard from "../mycard/MyCard";
import About from "../about/About";
import {
    Link
} from "react-router-dom";
import {Col} from "react-bootstrap";





class MainPage extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="main-page-wrapper">
                <MyNavBar show={true}/>
                <div className="landing" id="landing">
                    <Particles
                        params={particlesParams} />
                    <LandingBody/>
                </div>
                <div className="about-wrapper">
                    <About/>
                </div>
                <div className="cards-wrapper" id="projects">
                    {/*<Link to="/project_one">*/}
                    <a href="/project_one">
                        <MyCard title="BB 1" text="I am cute"/>
                    </a>
                    {/*</Link>*/}
                    <a href="/project_two">
                        <MyCard title="BB 2"/>
                    </a>
                </div>
            </div>

        )
    }
}

export default MainPage;