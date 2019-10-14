import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import './About.css'
import cutebb from '../../assets/img/cutebb.png';

import {Image, Container, Row, Col} from 'react-bootstrap';

class About extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="about-body" id="about">
                <Container>
                    <Row>

                        <Col lg={5} md={12} className="about-image-container">
                            <Image src={cutebb} roundedCircle className="about-image"/>
                        </Col>
                        <Col lg={7} md={12} className="about-bio-container">
                            <span className="about-bio">
                                I'm a UX designer based in Amsterdam. I'm passionate about travel, collaboration and shaping new designers through my activities as a blogger, speaker and course author.
                            </span>
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}

export default About;