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




class App extends React.Component {
    constructor(props){
        super (props);
        this.changeTransitionalState = this.changeTransitionalState.bind(this);
        this.state = {
            transitionalState: 0,
            date : new Date(),
        }
    }

    changeTransitionalState(state){
        this.setState({transitionalState: state});
    }

    render() {

        return(

            <MainPage/>
        )
    }
}

export default App