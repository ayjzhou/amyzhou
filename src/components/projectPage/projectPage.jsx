import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import Typed from 'react-typed';

import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import MyNavBar from "../navbar/MyNavBar";
import "./projectPage.css";
import cutebb from "../../assets/img/cutebb.png";

class ProjectPage extends React.Component{
    constructor(props){
        super(props);
    }
    // componentDidMount() {
    //     window.scrollTo(0, 0)
    // }

    render() {
        return(

            <div className="landing">
                <Card style={{display: 'inline-block', height: '50vh'}}>
                    <Card.Img variant="top" src={cutebb} />
                </Card>

            </div>

        )
    }
}

export default ProjectPage;