import React from 'react';
import Modal from "react-modal"
import {Animated} from "react-animated-css";
import "./Modal.css";
import {Button} from 'react-bootstrap';


const style = {
    content : {
        top         : '50%',
        left        : '50%',
        right       : 'auto',
        bottom      : 'auto',
        marginRight : '-50%',
        transform   : 'translate(-50%, -50%)',
        width       : '60%',
        maxHeight   : '80%'
    }
};
Modal.setAppElement('#root');

class AboutMeModal extends React.Component{
    constructor(props){
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            aboutMePageState: 0
        }
    }
    closeModal(){
        this.props.close();
        let ele = document.getElementsByClassName("ReactModalPortal");
        ele[0].classList.add("animationFadeOut");
        setTimeout(() => {this.setState({aboutMePageState:0});ele[0].classList.remove("animationFadeOut")}
        , 210);
    }
    render(){
        return (
                <Modal
                    isOpen={this.props.open}
                    onRequestClose={this.closeModal}
                    style={style}
                    contentLabel="Modal"
                    closeTimeoutMS={200}
                    >

                    {this.state.aboutMePageState===0?
                    <div className="animationFadeIn">
                        <div className="modalHeader">About Me</div>
                        <hr/>
                        <div className="modalText">
                            My name is Michael, I am a second year Computer Engineering student.<br/>
                            I started coding when I was in grade 11 and instantly fell in love with it.
                            I have done a couple of side projects including a game called <a href="https://play.google.com/store/apps/details?id=com.pickoky.game&hl=en" target="_blank">Ballrathon</a> that is currently live on Google
                            Play Store.<br/><br/>
                            I also love to exercise my body. Nothing is better than getting
                            a good workout in after a whole day of sitting in lectures.
                        </div>
                    </div> : null}
                    {this.state.aboutMePageState===1?
                        <div className="animationFadeIn">
                            <div className="modalHeader">More About Me</div>
                            <hr/>
                            <div>
                                <div className="modalText">
                                    I am 5 foot 10 inches, at one point of my life I was 200lbs.<br/>
                                    Then I started working out. Now it became just a part of my life.<br/>
                                    I like bouldering, weight lifting and swimming.
                                    <br/>
                                    <br/>
                                    <span id="warning">Go to the next page to see my transformation. <br/>
                                        *Warning! I may NOT wear a shirt*</span>
                        </div>
                            </div>
                        </div>  : null }

                    {this.state.aboutMePageState===2?
                        <div className="animationFadeIn">
                            <div className="modalHeader">Transformation</div>
                            <hr/>
                            <div className="transformationContainer">
                                <div className="transformationBlock">
                                    <span className="myPics" id="meBefore"></span>
                                    <div className="transformationText">2016</div>

                                </div>
                                <div className="transformationBlock">
                                    <span className="myPics" id="meAfter"></span>
                                    <div className="transformationText">2017</div>
                                </div>
                            </div>
                            <div className="modalText">
                                From my ongoing journey, I have learned that there are no short cuts to losing weight and get fit, but there are 2 rules.
                                <ol>
                                    <li>Always eat at a caloric deficit, meaning you burn more calories
                                        than you consume (only if you are trying to lose weight).</li>
                                    <li>Workout! Being consistent is the key.</li>
                                </ol>
                                It was definitely not easy, but it was damn worth it!
                                You can do it too!
                            </div>

                        </div> : null }


                    {this.state.aboutMePageState<2? <Button id="navigation"  bsStyle="primary" onClick={() => this.setState({aboutMePageState:this.state.aboutMePageState+1})}> {">>"} </Button> : null }
                    {this.state.aboutMePageState>0? <Button id="navigation"  bsStyle="primary" onClick={() => this.setState({aboutMePageState:this.state.aboutMePageState-1})}> {"<<"}  </Button> : null }
                    <hr/>


                    <Button id="close" bsStyle="danger" onClick={this.closeModal}>close</Button>
                 </Modal>
        )
    }
}

export default AboutMeModal;