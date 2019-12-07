import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import Typed from 'react-typed';

import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import MyNavBar from "../navbar/MyNavBar";
import "./projectPage.css";
import "./text.css";

class Text extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        console.log((this.props.children));
        return(
            <div style={{"marginBottom":"3rem"}}>
                <Col style={{padding: "0 0"}}>
                    <h4 style={{fontWeight:"bold"}}>
                        {this.props.header}
                    </h4>
                    <h3 style={{fontSize: "1rem", color:"#3943B7" +
                            ""}}>
                        {this.props.title}
                    </h3>
                    <p>
                        {this.props.content}
                        {this.props.children}
                    </p>
                </Col>
            </div>

        )
    }
}


export default Text;