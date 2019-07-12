import React from 'react';
import { Link } from 'react-router-dom';



class Landing extends React.Component{
    render(){
        return(
            <div className='landingPage'>
                
                <p className='landingTitle'>Fitness Tracker</p>
                
                <div className='landingLinkGroup'>
                    <div className= 'linkPrimary'>
                        <Link 
                            className='landingLinkColor' 
                            to='/fitness/login'>Login</Link>
                    </div>
                    <div className = 'linkSecondary'>
                    <Link 
                        className='landingLinkColor' 
                        to='/fitness/register'>Register</Link>
                    </div>
                </div>
         
            </div>
        )
    }
}

export default Landing;