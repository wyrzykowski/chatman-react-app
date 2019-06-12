import React,{Component} from 'react';
import Message from "./message";
import Typing from 'react-typing-animation';
import {receiveMessage,getType} from "./../../api";
class Conversation extends Component {
    state={
        messages:[],
        typingUsers:[]
    };


    clearType=(user)=>{
        let oldState = this.state;
        const newTypingUsers = this.state.typingUsers.filter(el=>{
            return el.username!==user.username;
        });
        oldState.typingUsers=newTypingUsers;
        this.setState({oldState});
    };
    
    constructor(props){
        super(props);
        receiveMessage((message)=>{
            message = {...message,author: "stranger"};
            const oldMessages = this.state.messages;
            oldMessages.push(message);
            this.setState({message:oldMessages});
        });

        getType((typingUsername)=>{

            const sameUser = this.state.typingUsers.find((el)=>{
                return el.username===typingUsername.username;
            });

            if(typingUsername.username!==window.username && sameUser === undefined){
                let oldState = this.state;
                oldState.typingUsers.push(typingUsername);
                this.setState({oldState});
                setTimeout(()=>{
                    this.clearType(typingUsername);
                },2500)

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

        return (
            <div  ref={(div) => {
                this.messageList = div;
            }} className={"scroll"}>

<div>
                {
                    this.state.messages.map((message) => {
                        return  <Message  message={message.text} username={message.username} author={message.author}  createdAt={message.createdAt} key={message.createdAt}/>
                    })
                }
</div>
                <div className="is-typing message">
                    {
                        this.state.typingUsers.map(el=>{
                            return <Typing>
                                <span>{el.username} is typing...</span>
                            </Typing>
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Conversation;