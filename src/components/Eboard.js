import React from 'react';
import './Eboard.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Eboard() {
    return(
        <div class="eboard">
            <div class="eboard_header">
                <h1>The Executive Board</h1>
            </div>
            <div class="eboard_members">
                <Container>
                    <h1>Our Current Chapter Leadership</h1>
                    <Row>
                        <Col>Josh</Col>
                        <Col>Choi</Col>
                    </Row>
                    <Row>
                        <Col>Hello</Col>
                        <Col>World</Col>
                        <Col>Was good</Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Eboard