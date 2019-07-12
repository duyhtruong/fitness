import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div className='navGroup'>
                <div className='navTitle'>
                    <p>Dashboard</p>
                </div>
                <div>
                <Link
                    className='navLinkColor' 
                    to='/fitness'>Logout</Link>
                </div>
            </div>
        )
    }
}

export default Nav;