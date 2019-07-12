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


class CardGrid extends React.Component{
    

    renderColumns = ()=>{
        return(
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className='singleCards' lg={7}>
                            
                            <Line
                
                                data={data}
                                options={{ maintainAspectRatio: false }}   
                                />
                               
                            </Col>
                        <Col className='singleCards' lg={4}>
                            <Doughnut 
                               
                                data={macroData}
                                options={{ maintainAspectRatio: false}}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className='singleCards' lg={4}>
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
                            <Line 
                               
                                data={weightData}
                                options={{ maintainAspectRatio: false}}
                            />
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