import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import './LandingBody.css'
import Typed from 'react-typed';

import {Button, Nav, Container, Row, Col} from 'react-bootstrap';

class LandingBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showCursor: true
        };
        this.titleRef = React.createRef();
        this.titleReftwo = React.createRef();

        this.toggleCursor = (ref, state) => {
            ref.current.rootElement.current.nextSibling.style.opacity = state;
        }
    }
    componentDidMount() {
        this.toggleCursor(this.titleReftwo, "0");
    }

    render() {
        return(
            <div className="landing-body">
                <div>
                    <br/>
                    <Typed
                        className="typed-text-name"
                        id="myshit"
                        strings={[
                            "Hi I am is Amy"]}
                        typeSpeed={30}
                        ref = {this.titleRef}
                        onComplete={() => this.toggleCursor(this.titleRef, "0")}>
                    </Typed>
                    <Typed
                        className="typed-text-description"
                        startDelay= {900}
                        strings={[
                            'I design stuff',
                            'This is my website',
                            "Browse around!"]}
                        typeSpeed={30}
                        backSpeed={30}
                        loop
                        ref ={this.titleReftwo}
                        preStringTyped={() => this.toggleCursor(this.titleReftwo, "1")}>
                    </Typed>
                </div>

            </div>

        )
    }
}

export default LandingBody;