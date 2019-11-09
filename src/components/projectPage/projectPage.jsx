import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import Typed from 'react-typed';

import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import MyNavBar from "../navbar/MyNavBar";
import "./projectPage.css";
import cutebb from "../../assets/img/cutebb.png";
import Particles from "react-particles-js";
import particlesParams from "../mainPage/particle";
import Text from "./text";

class ProjectPage extends React.Component{
    constructor(props){
        super(props);
    }
    // componentDidMount() {
    //     window.scrollTo(0, 0)
    // }

    render() {
        return(
            <div>
                <div className="landing" style={{"text-align": "center"}}>
                    <Particles params={particlesParams}/>
                    <Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>
                        <Card.Img variant="top" src={cutebb} />
                    </Card>
                </div>

                <Text title="MOTIVATION" content="THIS IS MY MOTIVATIONTHIS IS MY MOTIVATIONTHIS IS MY MOTIVATION
                THIS IS MY MOTIVATIONTHIS IS MY MOTIVATIONTHIS IS MY MOTIVATIONTHIS IS MY MOTIVATION
                THIS IS MY MOTIVATIONTHIS IS MY MOTIVATIONTHIS IS MY MOTIVATION"/>
              


                <Text title="MOTIVATION2" content="THIS IS MY MOTIVATION2"/>
                <Text title="MOTIVATION3" content="THIS IS MY MOTIVATION3"/>

            </div>

        )
    }
}

export default ProjectPage;