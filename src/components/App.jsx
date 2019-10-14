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
import MyNavBar from './navbar/MyNavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import shiba from '../assets/img/favicon.gif';


class App extends React.Component {
    constructor(props){
        super (props);
    }

    changeTransitionalState(state){
        this.setState({transitionalState: state});
    }

    render() {

        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>

                <Router>
                    <div>
                        <MyNavBar/>

                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/about">
                                <div>
                                    <h1>about</h1>
                                </div>
                            </Route>
                            <Route path="/contact">
                                <div>
                                    <h1>contact</h1>
                                </div>

                            </Route>
                            <Route path="/">
                                <MainPage/>
                            </Route>
                        </Switch>
                    </div>
                </Router>

                <footer className="my-footer">
                    <p>Coded with lots of coffee and lots of love</p>
                    <img src={shiba} width="50px"/>
                </footer>
            </div>
        )
    }
}

export default App