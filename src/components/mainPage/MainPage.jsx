import React from 'react';
import './MainPage.css'
import {Nav, NavItem, Button} from 'react-bootstrap';

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navBarState: 1,
        }
    }

    handleSelected(key){
        this.setState({navBarState: key});
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
                            <NavItem eventKey={1} href="/home">About Me</NavItem>
                            <NavItem eventKey={2} title="Item">Android Game</NavItem>
                            <NavItem eventKey={3} >Find Me</NavItem>
                        </Nav>
                    </div>
                </div>

                <div className="section">
                    <div className="section-text">
                        Wait... your name is Junk? No... It's JunKe...
                    </div>
                </div>
                <div className="profile-wrapper">
                    <div className="section-profile-pic">
                    </div>

                    <div className="section-profile-right">
                        <div className="section-profile-text">some text asdf
                            asdas
                            asdja
                            asdl
                            asdas
                            asdasldfj;alsjdf;lasjdf;lasjdf;la</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MainPage;