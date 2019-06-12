import React,{Component} from 'react';
import css from './../css/login.css'
import {logIn} from './../api';
class Login extends Component {
    state={
        name:"",
        room:""
    };
    
    handleSubmit=()=>{
        const loginData = this.state;
            logIn(loginData,(validated)=>{
          if(validated){
              window.username=loginData.name;
              this.props.history.push("/chatman")
          }
          else{
              alert(`user with name ${this.state.name} already exist!`)
              this.props.history.push("/")
          }
      });

    };


    render() {

        return (
            <div className={"login-form-body"}>
                <div className={"login-form-container"}>
                    <h1 className={"login-form-h1"}>Chatman </h1>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <h5>User Name</h5>
                        <input type="text"  value={this.state.name} onChange={el=>{
                            const data = {...this.state};
                            this.setState({...data, name:el.target.value})
                        }} className="form-control"  placeholder="Enter name"/>
                        <br/>
                        <h5>Room name</h5>
                        <input type="text" className="form-control" placeholder="Enter room name"   value={this.state.room} onChange={el=>{
                            const data = {...this.state};
                            this.setState({...data, room:el.target.value});
                        }}/>
                        <br/>
                            <button type="submit" className="btn btn-primary login-form-button">Go</button>

                    </form>
                </div>
            </div>
        );
    }
}

export default Login;