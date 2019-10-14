import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';

import './MyNavBar.css';

import {Button, Nav, Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

class MyNavBar extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className="top-nav-bar">
                <Container>
                    <Row>
                        <Col >
                            <Nav className="justify-content-end " activeKey="/home">
                                <Nav.Item>
                                    <Link to="/" className="top-nav-bar-button">Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/about" className="top-nav-bar-button">About</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/contact" className="top-nav-bar-button">Contact</Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default MyNavBar;