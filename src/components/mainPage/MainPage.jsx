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
import {Col} from "react-bootstrap";





class MainPage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="main-page-wrapper">
                <div className="landing">
                    <Particles
                        params={particlesParams} />
                    <LandingBody/>
                </div>
                    <div className="cards-wrapper">
                        <MyCard title="BB 1" text="I am cute"/>
                        <MyCard title="BB 2"/>
                    </div>
            </div>

        )
    }
}

export default MainPage;