import React from 'react';
import { Link } from 'react-router-dom';


class EditLiftData extends React.Component{
    
    
    renderEditLiftData = () =>{
        return(
            <div>
                <p className='editTitle'>{this.props.location.name.name}</p>
                <div className='editLiftData'>
                    <div >Calendar</div>
                    <div >Weight</div>
                </div>
            </div>
        )
    }
    

    renderEditLiftDataButton = () =>{
        return(
            <div className='landingLinkGroup'>
            <div className='linkPrimary'>
                <Link
                    className='landingLinkColor' 
                    to='/fitness/dashboard'>Submit</Link>
            </div>
            <div className='linkSecondary'>
                <Link 
                    className='landingLinkColor'
                    to='/fitness/dashboard'>Cancel</Link>
            </div>
            </div>
            )
    
    }

    render(){
        return(
            <div className='editLiftPage'>
                {this.renderEditLiftData()}
                {this.renderEditLiftDataButton()}
            </div>
        )
    }
}

export default EditLiftData;