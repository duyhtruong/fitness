import React from 'react';
import Nav from './Nav';
import CardGrid from './CardGrid';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Dashboard extends React.Component{
    render(){
        return(
            <div> 
                <Row className='dashboardBody'>
                    <Col sm={2} className='leftNavColumn'><Nav /></Col>
                    <Col sm={10} className='rightDashboardColumn'><CardGrid /></Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;