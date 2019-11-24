import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import Typed from 'react-typed';

import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import MyNavBar from "../navbar/MyNavBar";
import "./projectPage.css";

class Text extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div style={{"margin-bottom":"3rem"}}>
                <Col lg={12} style={{padding: "0 10%"}}>
                    <h2>
                        {this.props.title}
                    </h2>
                    <p>
                        {this.props.content}
                    </p>
                </Col>
            </div>

        )
    }
}

export default Text;