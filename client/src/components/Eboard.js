import React from 'react';
import './Eboard.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileCard from './ProfileCard';

function Eboard() {
    return(
        <div className="eboard">
            <div className="eboard_header">
                <h1>The Executive Board</h1>
            </div>
            <div className="eboard_members">
                <Container>
                    <h1>Our Current Chapter Leadership</h1>
                    <h2 className="eboard-years">2020-2021</h2>
                    <Row>
                        <Col>
                            <ProfileCard
                            src="https://images.unsplash.com/photo-1538883855924-aa6be412f336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                            position="President"
                            name="Arnav Sharma"
                            major="Computer Science and DMS"
                            year="'22"
                            /> 
                        </Col>
                        <Col>
                            <ProfileCard
                            src="https://images.unsplash.com/photo-1538883855924-aa6be412f336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                            position="Vice President"
                            name="Jonathan Lai"
                            major="Computer Science and DMS"
                            year="'22"
                            linkedin="https://www.linkedin.com/in/jonathan-lai-a95370173/"
                            link="http://jonathan-lai.digitalscholar.rochester.edu/?fbclid=IwAR0qryJgCTyGgUySaWCsYOGvwLLfCRZrZaLtqBxmHIrpNHm_zj2eBZs6AmM"
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="https://images.unsplash.com/photo-1538883855924-aa6be412f336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                            position="Secretary"
                            name="Amy Nguyen"
                            major="Computer Science and DMS"
                            year="'22"
                            />  
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProfileCard
                            src="images/josh.jpg"
                            position="Publicity Chair"
                            name="Joshua Choi"
                            major="Computer Science and DMS"
                            year="'22"
                            linkedin="https://www.linkedin.com/in/joshuachoi54/"
                            link="https://joshua-choi.com/"
                            info="Hey, my name is Joshua Choi and I’m passionate about web design and front-end 
                            web development. In my free time, I enjoy photography, music, and petting my dog."
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="images/desmond.jpg"
                            position="Fundraising Chair"
                            name="Desmond Lai"
                            major="Computer Science"
                            year="'22"
                            linkedin="https://www.linkedin.com/in/desmond-lai-2891aa16b/"
                            link="https://desmond-lai.herokuapp.com/index.php"
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="https://images.unsplash.com/photo-1538883855924-aa6be412f336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                            position="Business Manager"
                            name="David Wang"
                            major="Computer Science and DMS"
                            year="'22"
                            />  
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProfileCard
                            src="https://images.unsplash.com/photo-1538883855924-aa6be412f336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                            position="First Year Representative"
                            name="Justin Kim"
                            major="Computer Science and DMS"
                            year="'22"
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="https://images.unsplash.com/photo-1538883855924-aa6be412f336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                            position="Event Coordinator"
                            name="Derek Guo"
                            major="Computer Science and DMS"
                            year="'22"
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="https://images.unsplash.com/photo-1538883855924-aa6be412f336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                            position="Community Outreach Chair"
                            name="Gabriella Gima"
                            major="Computer Science and DMS"
                            year="'22"
                            />  
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Eboard