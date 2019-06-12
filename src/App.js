import React from 'react';

import css from './css/main.css'

import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import {Route,Switch,Redirect,Router} from 'react-router-dom';
import Chat from "./components/chat/chat";
import Login from "./components/login";


function App() {

    const user = {};

   




   





  return (
   <div>
       <Switch>
           <Route path="/login"  exact  render={(props)=><Login   {...props} />} />
           <Route path="/chatman"  exact render={(props)=><Chat    {...props} />} />

           <Redirect exact from="/" to="/login"/>
       </Switch>
   </div>
  );
}

export default App;
