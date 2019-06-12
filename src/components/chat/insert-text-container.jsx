import React,{Component} from 'react';
import InputText from "./input-text";
import {sendMessage,sendOnType} from "../../api";
class InsertTextContainer extends Component {
state={
    newMessage: "",
    buttonBlock:false
};

    onType=(value)=>{
       let newMessage=value.target.value;
       this.setState({newMessage});
    };
    
    sendMessageHandler=()=>{
        const message = this.state.newMessage;
        const data = this.state;
        sendMessage(message,()=>{
            this.setState({newMessage:"",buttonBlocked:true});
        })


       
    };

    onKeyPressed=(e)=> {
        if(window.username===undefined) window.username='undefined';
        sendOnType(()=>{
            console.log("send on type success")
        });

        console.log(e.key);
        if(e.key==='Enter'){
            this.sendMessageHandler();
        }
    }



    render() {
        return (
            <div className="insert-text-container-div"    onKeyDown={(e) => this.onKeyPressed(e)} >
                <div className="input-text">
                <InputText text={this.state.newMessage} onType = {this.onType}/>
                </div>
                <button disabled={this.state.buttonBlock===true} className="send-button" onClick={this.sendMessageHandler}>
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        );
    }
}

export default InsertTextContainer;