import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { data } from './LineData';
import { weightData } from './WeightData';
import { macroData } from './MacroData';

import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

import CalendarHeatMap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class CardGrid extends React.Component{
    

    renderColumns = ()=>{
        return(
            <div>
                <Container>
                    <Row className="justify-content-md-center">


                        <Col className='singleCards' lg={7}>
                            <div className='cardTitleGroup'>
                                 <p className='cardTitle'>Strength Progression</p>  
                                <div className='cardEditIcon'>  
                                    <Link to='/fitness/edit/lift'><FiPlus /></Link>
                                </div>
                            </div>
                            <div>
                                <Line
                                    height={280}
                                   
                                    data={data}
                                    options={{ maintainAspectRatio: false }}   
                                    />
                             </div>
                           
                            </Col>



                        <Col className='singleCards' lg={4}>
                            <div className='cardTitleGroup'>
                                 <p className='cardTitle'>Macros</p>  
                                <div className='cardEditIcon'>  
                                    <Link to='/fitness/edit/lift'><FiPlus /></Link>
                                </div>
                            </div>
                            <div>
                            <Doughnut 
                                height={250}
                                data={macroData}
                                options={{ maintainAspectRatio: false}}
                            />
                            </div>
                        </Col>




                    </Row>
                    <Row className="justify-content-md-center">

                        <Col className='singleCards' lg={4}>
                           
                        <div className='cardTitleGroup'>
                                 <p className='cardTitle'>Day Tracker</p>  
                                <div className='cardEditIcon'>  
                                <Link 
                                    to={{
                                        pathname: '/fitness/edit/lift/data',
                                        name: {
                                            name: 'Did you gym today?'
                                        }
                                    }}><FiPlus /></Link>   
                                </div>
                            </div>
                           
                            <CalendarHeatMap 
                                endDate={new Date}
                                values={[
                                    { date: '2019-05-5' },
                                    { date: '2019-05-4' },
                                    { date: '2019-05-6' },
                                    { date: '2019-06-5' },
                                    { date: '2019-06-6' },
                                    { date: '2019-06-4' },
                                    { date: '2019-05-9' },
                                    { date: '2019-09-10' },
                                    { date: '2019-05-11' },
                                    { date: '2019-07-4' },
                                    { date: '2019-07-56' },
                                    { date: '2019-07-4' },
                                    { date: '2019-07-11' }]}
                                numDays= {100}
                            />
                        </Col>



                        <Col className='singleCards' lg={7}>
                             
                        <div className='cardTitleGroup'>
                                 <p className='cardTitle'>Body Weight</p>  
                                <div className='cardEditIcon'>  
                                <Link 
                                to={{
                                    pathname: '/fitness/edit/lift/data',
                                    name: {
                                        name: 'Weight'
                                    }
                                }}><FiPlus /></Link> 
                                </div>
                            </div> 
                             
                            <div>
                            <Line 
                                height={280}
                                data={weightData}
                                options={{ maintainAspectRatio: false}}
                            />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    
    
    render(){
        return(
            <div className='cardGrid'>
                {this.renderColumns()}
            </div>
        )
    }
}

export default CardGrid;