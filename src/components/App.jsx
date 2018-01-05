import React from 'react';
import Intro from './intro/Intro';
import MainPage from './mainPage/MainPage';


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
            <div>
                {this.state.transitionalState === 0 || this.state.transitionalState ===1?
                    <Intro transitionalState={this.state.transitionalState}
                           date={this.state.date}
                           changeTransitionalState={(text) => this.changeTransitionalState(text)}
                    />:
                    null
                }

                {this.state.transitionalState === 2? <MainPage/> : null}
            </div>
        )
    }
}

export default App