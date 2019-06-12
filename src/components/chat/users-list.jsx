import React,{Component} from 'react';
import UserActive from "./user-active";
import {getUsersList} from "../../api";

class UsersList extends Component {
    state={
    users:[]
    }
    constructor(props){
        super(props);
        getUsersList((users)=>{
            this.setState({users})
        })
    }

    render() {
        return (
            <div>
                <div className="room-active">
                    <p>{this.state.users[0]? this.state.users[0].room : " "}    <i className="fas fa-lightbulb"></i></p>

                </div>
                {
                    this.state.users.map((el)=>{
                        console.log(el);
                        return(<div> <UserActive user={el.username}/>

                            </div>
                        )
                    })
                }

                
                
            </div>
        );
    }
}

export default UsersList;