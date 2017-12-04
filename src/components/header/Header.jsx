import React from 'react'
import './Header.css'

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            transitionalState:'0',
        }
    }

    getOpacity(){
        let hi = document.getElementById('header-text');
        let hiOpacity = window.getComputedStyle(hi ,null).getPropertyValue("opacity");

        if(hiOpacity === '0'){
            hi.classList.remove("fadingAnimation");
            hi.innerHTML = "MickelPickel Here";
            hi.classList.add("fadingAnimation");
            this.setState({transitionalState: '1'});
        }
    }

    render(){
        if(this.state.transitionalState ==='0'){
            setInterval(this.getOpacity, 100);
        }
        return(
            <div className="header">
                <div id="header-text" className="fadingAnimation" >
                    Hi!
                </div>
            </div>

        )


    }
}
export default Header