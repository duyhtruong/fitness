import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    render(){
        return(
            <div className='landingPage'>
                <p className='landingTitle'>Login</p>
                <div className='landingLinkGroup'>
                    <div className='linkPrimary'>
                        <Link
                            className='landingLinkColor' 
                            to='/fitness/dashboard'>Login</Link>
                    </div>
                    <div className='linkSecondary'>
                        <Link 
                            className='landingLinkColor'
                            to='/fitness/'>Cancel</Link>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Login;