import React,{Component} from 'react';
import moment from 'moment';
import Typing from 'react-typing-animation';

class Message extends Component {
    componentWillMount() {
        if( window.username=== undefined){
            window.username="undefined";

        }
    }



    render() {
        return (
            <div>
                {


                    this.props.type === "message" ?

                        this.props.username === window.username.toLowerCase().trim() ?
                            <div className="message me">
                                <p className={"username"}> {this.props.username}</p>
                                <p> {this.props.message}</p>
                                <p className="time-stamp">(delivered) {moment(this.props.createdAt).format('HH:MM:ss')}</p>
                            </div>

                            :

                            <div className="message stranger">
                                <p className={"username"}> {this.props.username}</p>
                                <p> {this.props.message}</p>
                                <p className="time-stamp">{moment(this.props.createdAt).format('HH:MM:ss')}</p>
                                <p></p>
                            </div>
                        :
                        <div className="is-typing message">
                            {/*{this.props.username +"i s typing..."}*/}
                            <Typing >
                            <span>{this.props.username} is typing...</span>
                            </Typing>


                        </div>
                }




                

            </div>

        );
    }
}

export default Message;