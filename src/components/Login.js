import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    render(){
        return(
            <div>
            Login
            <Link to='/fitness/dashboard'>Login</Link>
            <Link to='/fitness/'>Cancel</Link>
            </div>
        )
    }
}

export default Login;