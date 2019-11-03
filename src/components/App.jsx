import React from 'react';
import Intro from './intro/Intro';
import MainPage from './mainPage/MainPage';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons,
} from "@material/react-card";
import '@material/react-card/index.scss';
import '@material/react-card/dist/card.css';
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
                        <h4>
                            Don't be a stranger. Let's connect! /*BB CAN U MAKE A CONTAINER FOR THIS */
                            <span className="hot">  ☕️</span>
                        </h4>
                            <div className="footer-icon">

                                <img src={email} width="40px" className="footer-icon-style"/>
                                <img src={linkedin} width="40px" className="footer-icon-style"/>
                                <img src={twitter} width="40px" className="footer-icon-style"/>
                                <img src={github} width="40px" className="footer-icon-style"/>
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

