import React,{Component} from 'react';

class UserActive extends Component {
    
    render() {
        return (
            <div className="user-active">
                <p>{this.props.user} <i className="fas fa-user"></i></p>
            </div>
        );
    }
}

export default UserActive;