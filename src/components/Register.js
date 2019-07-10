import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component{
    render(){
        return(
            <div>
            Register
            <Link to='/fitness/dashboard'>Register</Link>
            <Link to='/fitness/'>Cancel</Link>
            </div>
        )
    }
}

export default Register;