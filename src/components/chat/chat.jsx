import React,{Component} from 'react';
import TopBar from "./top-bar";
import Conversation from "./conversation";
import InsertTextContainer from "./insert-text-container";
import UsersList from "./users-list";

class Chat extends Component {

    
    render() {

        return (
            <div className="App">
                <div className="container-grid">
                    <div className="top-bar">
                        <TopBar/>
                    </div>
                    <div className="conversation" >
                        <Conversation  socket={this.props.socket}/>
                    </div>
                    <div className="insert-text-container">
                        <InsertTextContainer socket={this.props.socket}/>
                    </div>
                    <div className="users-list">
                        <UsersList/>
                    </div>

                </div>
            </div>
        );
    }
}

export default Chat;