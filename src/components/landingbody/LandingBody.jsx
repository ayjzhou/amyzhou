import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import './LandingBody.css'


import {Button, Nav, Container, Row, Col} from 'react-bootstrap';

class LandingBody extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className="landing-body">
                <Container>
                    <Col lg={12} sm={12} md={12}>
                        <h1>
                            Hi! I’m Amy.
                            I design stuff.
                        </h1>
                    </Col>
                </Container>
            </div>

        )
    }
}

export default LandingBody;