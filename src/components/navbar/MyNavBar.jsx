import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';

import './MyNavBar.css';

import {Button, Nav, Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'


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
                                    <AnchorLink href="#landing" className="top-nav-bar-button">Home</AnchorLink>
                                </Nav.Item>
                                <Nav.Item>
                                <AnchorLink href="#about" className="top-nav-bar-button">About</AnchorLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <AnchorLink href="#projects" className="top-nav-bar-button">Projects</AnchorLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <AnchorLink href="#contact" className="top-nav-bar-button">Contact</AnchorLink>
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