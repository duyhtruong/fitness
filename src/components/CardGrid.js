import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class CardGrid extends React.Component{
    
    renderColumns = ()=>{
        return(
            <div>
                <Container>
                    <Row>
                        <Col className='singleCards' sm={5}>one</Col>
                        <Col className='singleCards' sm={5}>two</Col>
                    </Row>
                    <Row>
                        <Col className='singleCards' sm={5}>three</Col>
                        <Col className='singleCards' sm={5}>four</Col>
                    </Row>
                </Container>
            </div>
        )
    }
    
    
    render(){
        return(
            <div>
                {this.renderColumns()}
            </div>
        )
    }
}

export default CardGrid;