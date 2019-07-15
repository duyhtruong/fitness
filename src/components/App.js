import React from 'react';
import '../index.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';
import Nav from './Nav';
import EditLift from './EditLift';
import EditLiftData from './EditLiftData';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route path='/fitness' exact component={Landing}/>
                <Route path='/fitness/login' exact component={Login}/>
                <Route path='/fitness/register' exact component={Register}/>
                <Route path='/fitness/dashboard' exact component={Dashboard}/>
                <Route path='/fitness/edit/lift' exact component={EditLift}/>
                <Route path='/fitness/edit/lift/data' exact component={EditLiftData}/>
            </BrowserRouter>
        )
    }
}

export default App;