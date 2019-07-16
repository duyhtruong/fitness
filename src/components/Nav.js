import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaPowerOff } from 'react-icons/fa';

class Nav extends React.Component{
    render(){
        return(
            <div className='navGroup'>
                <div className='navLogoContainer'>
                <img className='navLogo' src={require('../assets/fitness_logo3.png')} />
                </div>
                <div>
                    <Link
                        className='navLinkColor'
                        to='/fitness/dashboard' 
                        >
                        <div className='navIcon'>
                            <FaHome />
                        </div>
                        Home
                        </Link>
                </div>
                <div>

                <Link
                    className='navLinkColor' 
                    to='/fitness'>
                                    <div className='navIcon'>
                    <FaPowerOff />
                </div>
                    Logout</Link>
                </div>
            </div>
        )
    }
}

export default Nav;