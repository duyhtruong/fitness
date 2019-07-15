import React from 'react';
import { Link } from 'react-router-dom';

class EditLift extends React.Component{
    render(){
        return(
            <div className='editLiftPage'>
                <div>
                    <p className='editTitle'>
                        <Link 
                            to={{
                                pathname: '/fitness/edit/lift/data',
                                name: {
                                    name: 'Bench Press'
                                }
                            }}>Bench Press</Link>
                    </p>
                    <p className='editTitle'>
                    <Link 
                            to={{
                                pathname: '/fitness/edit/lift/data',
                                name: {
                                    name: 'Squat'
                                }
                            }}>Squat</Link>  
                    </p>
                    <p className='editTitle'>
                    <Link 
                            to={{
                                pathname: '/fitness/edit/lift/data',
                                name: {
                                    name: 'Deadlift'
                                }
                            }}>Deadlift</Link>
                    </p>
                </div>
            </div> 
        )
    }
}

export default EditLift;