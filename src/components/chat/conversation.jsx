import React,{Component} from 'react';
import Message from "./message";

import {receiveMessage,getType} from "./../../api";
class Conversation extends Component {
    state={
        messages:[],
        typingUsers:[]
    };

    clearAllType(){
        let oldState = this.state;
        const newMessages = this.state.messages.filter(el=>{
            return el.type!=="info";
        });
        oldState.messages=newMessages;
        this.setState({oldState});
    }

    clearType=(user)=>{
        let oldState = this.state;
        const newMessages = this.state.messages.filter(el=>{
            return el.username!==user.username || el.type!=="info";
        });
        oldState.messages=newMessages;
        this.setState({oldState});
    };

    constructor(props){
        super(props);
        receiveMessage((message)=>{
            this.clearAllType();
            message = {...message,author: "stranger",type:'message'};
            const oldMessages = this.state.messages;
            oldMessages.push(message);
            this.setState({message:oldMessages});
        });

        getType((typingUsername)=>{

            const sameUser = this.state.messages.find((el)=>{
                return el.username===typingUsername.username && el.type==="info";
            });

            if(typingUsername.username!==window.username && sameUser === undefined){

                let message = {author: "stranger",type:'info',username:typingUsername.username};
                const oldMessages = this.state.messages;
                oldMessages.push(message);
                this.setState({message:oldMessages});

                setTimeout(()=>{
                    this.clearType(typingUsername);
                },1500)

            }




        })

    }

    componentDidMount () {
        this.scrollToBottom()
    }
    componentDidUpdate () {
        this.scrollToBottom()
    }


    scrollToBottom=()=> {
        if(this.state.messages.length>0){
            const scrollHeight = this.messageList.scrollHeight;
            const height = this.messageList.clientHeight;
            const maxScrollTop = scrollHeight - height;
            this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }

    }




    render() {
        console.log("MESSAGE TAB",this.state.messages)

        return (
            <div  ref={(div) => {
                this.messageList = div;
            }} className={"scroll"}>


                {

                    this.state.messages.map((message,index) => {
                        console.log(message);
                        return(
                        <div>
                            <Message type={message.type}  message={message.text} username={message.username} author={message.author}  createdAt={message.createdAt} key={message.createdAt}/>

                        </div>
                        )
                    })
                }

                

            </div>
        );
    }
}

export default Conversation;