import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';

import './MyNavBar.css';

import {Button, Nav, Container, Row, Col} from 'react-bootstrap';

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
                                    <Nav.Link href="/home" className="top-nav-bar-button">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" className="top-nav-bar-button">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" className="top-nav-bar-button">Link</Nav.Link>
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