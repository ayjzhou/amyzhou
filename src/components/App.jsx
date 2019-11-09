import React from 'react';
import Intro from './intro/Intro';
import MainPage from './mainPage/MainPage';

import '@material/react-card/index.scss';
import '@material/react-card/dist/card.css';
import {Card} from 'react-bootstrap';
import './App.css';
import shiba from '../assets/img/favicon.gif';
import email from '../assets/img/email.png';
import linkedin from '../assets/img/linkedin.png';
import twitter from '../assets/img/twitter.png';
import github from '../assets/img/github.png';
import MyNavBar from './navbar/MyNavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProjectPage from "./projectPage/projectPage";


class App extends React.Component {
    constructor(props){
        super (props);
    }

    changeTransitionalState(state){
        this.setState({transitionalState: state});
    }

    render() {

        return(
            <Router>
                <div>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
                    <Switch>
                        <Route path="/project_one">
                            <MyNavBar show={false}/>
                            <ProjectPage/>
                        </Route>
                        <Route path="/project-two">
                            <Users />
                        </Route>
                        <Route path="/">
                            <MainPage/>
                        </Route>
                    </Switch>

                    <footer className="my-footer" id="contact">
                        <div className={"my-contacts"}>
                            <div className="footer-icon">
                                <a target="_blank" href="mailto:ayjzhou@gmail.com" className="footer-icon-anchor">
                                    <Card.Img src={email}  className="footer-icon-img" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/amyyjzhou/" className="footer-icon-anchor">
                                    <Card.Img src={linkedin}  className="footer-icon-img"/>
                                </a>
                                {/*<a target="_blank" className="footer-icon-anchor">*/}
                                {/*    <Card.Img src={twitter}  className="footer-icon-img"/>*/}
                                {/*</a>*/}
                                <a target="_blank" href="https://github.com/ayjzhou" className="footer-icon-anchor">
                                    <Card.Img src={github} className="footer-icon-img"/>
                                </a>
                            </div>
                        </div>

                        <p>Coded with lots of coffee and lots of love.</p>
                        <img src={shiba} width="50px"/>
                    </footer>
                </div>
            </Router>
        )
    }
}
function About() {
    return <h2>Home</h2>;
}

function Users() {
    return <h2>About</h2>;
}


export default App;

