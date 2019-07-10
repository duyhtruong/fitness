import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component{
    render(){
        return(
            <div>
            Landing
            <Link to='/fitness/login'>Login</Link>
            <Link to='/fitness/register'>Register</Link>
            </div>
        )
    }
}

export default Landing;