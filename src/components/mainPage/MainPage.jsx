import React from 'react';
import './MainPage.css'
import {Nav, NavItem, Button} from 'react-bootstrap';

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            navBarState: 1,
            width: '0',
            height: '0'
        }
    }

    handleSelected(key){
        this.setState({navBarState: key});
    }

    setImageHeight(){
        let viewportHeight = (window).height();
        let viewportWidth = (window).width();
        let elem = document.getElementById("section-profile-pic");
        elem.style.height = viewportHeight*0.45;
        elem.style.width = viewportWidth*0.45;
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        let elem = document.getElementById("section-profile-pic");
        elem.style.height = window.innerWidth*0.45;
        elem.style.width = window.innerWidth*0.45;
        console.log(window.innerWidth*0.45);
    }

    render(){
        return(
            <div className="MainPage">
                <div id="header">
                    <Button id="name">
                        Michael Huang
                    </Button>
                    <div id="navBar">
                        <Nav bsStyle="pills" activeKey={this.state.navBarState} onSelect={ (key) => this.handleSelected(key)} >
                            <NavItem  eventKey={1} href="/home">About Me</NavItem>
                            <NavItem eventKey={2} title="Item">Android Game</NavItem>
                            <NavItem eventKey={3} >Find Me</NavItem>
                        </Nav>
                    </div>
                </div>

                <div className="section">
                    <div className="section-text">
                        <h1>Welcome to JunKe Huang's Planet!</h1>
                        Wait... your name is Junk? No... It's Jun Ke...
                    </div>
                </div>
                <div className="profile-wrapper">
                    <h2 id="profile-about-me"> About Me</h2>
                    <div id="section-profile-pic">

                    </div>

                    <div className="section-profile-right">
                        <div className="section-profile-text">Hey! My name is Michael.<br/>
                            I am a second year Computer Engineering student.<br/>
                            I made this website because I got bored.
                            <Button id="learnMore"  bsStyle="primary">Learn More</Button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MainPage;