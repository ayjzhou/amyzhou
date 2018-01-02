import React from 'react';
import Modal from "react-modal"
import {Button} from 'react-bootstrap';
import "./Modal.css";

const style = {
    content : {
        top         : '50%',
        left        : '50%',
        right       : 'auto',
        bottom      : 'auto',
        marginRight : '-50%',
        transform   : 'translate(-50%, -50%)',
        maxHeight   : '90%'
    }
};

Modal.setAppElement('#root');

class ExperienceModal extends React.Component{
    constructor(props){
        super(props);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    afterOpenModal(){
        // references are now sync'd and can be accessed.
    }

    closeModal(){
        this.props.close();
        let ele = document.getElementsByClassName("ReactModalPortal");
        ele[1].classList.add("animationFadeOut");
        setTimeout(() =>  ele[1].classList.remove("animationFadeOut")
            , 210);
    }

    render(){
        return (
            <div>
                <Modal
                    isOpen={this.props.open}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={style}
                    contentLabel="Modal"
                    closeTimeoutMS={200}
                >
                    <div className="stack">
                        <div className="stackHeaderLeft modalHeader" >Stack</div>
                        <div className="stackHeaderRight modalHeader">Knowledge</div>
                        <hr/>
                    </div>

                    <div className="stack">
                        <span id="javaLogo" className="stackElement"></span>
                        <span className="threeStars stackElement "></span>
                    </div>
                    <hr/>

                    <div className="stack">
                        <span id="javaScriptLogo" className="stackElement"></span>
                        <span className="threeStars stackElement "></span>
                    </div>
                    <hr/>

                    <div className="stack">
                        <span id="angularJSLogo" className="stackElement"></span>
                        <span  className="threeStars stackElement "></span>
                    </div>
                    <hr/>

                    <div className="stack">
                        <span id="reactJsLogo" className="stackElement"></span>
                        <span className="twoStars stackElement "></span>
                    </div>
                    <hr/>

                    <div className="stack">
                        <span id="cplusplusLogo" className="stackElement"></span>
                        <span className="twoStars stackElement "></span>
                    </div>

                    <Button id="close" bsStyle="danger" onClick={this.closeModal}>close</Button>

                </Modal>
            </div>
        )
    }

}

export default ExperienceModal;