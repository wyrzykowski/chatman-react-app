import React,{Component} from 'react';
import moment from 'moment';

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

                   this.props.username === window.username.toLowerCase().trim() ?
                        <div className="message me">
                            <p className={"username"}> {this.props.username}</p>
                            <p> {this.props.message}</p>
                            <p className="time-stamp">{moment(this.props.createdAt).format('HH:MM:ss')}</p>
                        </div>
                        :

                        <div className="message stranger">
                            <p className={"username"}> {this.props.username}</p>
                            <p> {this.props.message}</p>
                            <p className="time-stamp">{moment(this.props.createdAt).format('HH:MM:ss')}</p>
                        </div>


                }
              


            </div>

        );
    }
}

export default Message;