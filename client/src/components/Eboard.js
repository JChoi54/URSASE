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
                            src="images/arnav.jpg"
                            position="President"
                            name="Arnav Sharma"
                            major="Physics & Astronomy, Computer Science"
                            year="2022"
                            email="ashar34@u.rochester.edu"
                            linkedin="https://www.linkedin.com/in/arnav-sharma-b6b6771b9/"
                            info="Warm greetings from your chapter president! I am passionate about 
                            tech, sciences, and diversity & inclusion; my interest areas include 
                            human-computer interactions, geospatial technology, and scientific communications."
                            /> 
                        </Col>
                        <Col>
                            <ProfileCard
                            src="images/jonathan.jpg"
                            position="Vice President"
                            name="Jonathan Lai"
                            major="Computer Science"
                            year="2022"
                            email="mailto:jlai11@u.rochester.edu"
                            linkedin="https://www.linkedin.com/in/jonathan-lai-a95370173/"
                            link="http://jonathan-lai.digitalscholar.rochester.edu/?fbclid=IwAR0qryJgCTyGgUySaWCsYOGvwLLfCRZrZaLtqBxmHIrpNHm_zj2eBZs6AmM"
                            info="I'm currently a Junior at the University of Rochester pursuing a degree in Computer Science. I enjoy doing research and solving problems related to data science."
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="images/justin.jpg"
                            position="Secretary"
                            name="Justin Kim"
                            major="Computer Science, DMS"
                            year="2024"
                            email="mailto:jkim373@u.rochester.edu"
                            link="https://www.facebook.com/profile.php?id=100015164803787"
                            info="Hello! My name is Justin. I love playing tennis, piano, and games. 
                            Hope to get to know you all!"
                            />  
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProfileCard
                            src="images/christopher.jpg"
                            position="Business Manager"
                            name="Christopher Lu"
                            major="Biomedical Engineering"
                            year="2023"
                            email="mailto:clu33@u.rochester.edu"
                            linkedin="https://www.linkedin.com/in/christopher-lu-b510a6178"
                            link="https://www.facebook.com/Christopher829/"
                            info="Hey everyone, I hope to represent all of SASE from its e-board to its members well as 
                            I work towards my goal of becoming a biomedical engineer while also building connections, 
                            making an influence, and creating positive change! Feel free to reach out to me with anything!"
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="images/josh.jpg"
                            position="Publicity Chair"
                            name="Joshua Choi"
                            major="Computer Science, DMS"
                            year="2022"
                            email="mailto:jchoi84@u.rochester.edu"
                            linkedin="https://www.linkedin.com/in/joshuachoi54/"
                            link="https://joshua-choi.com/"
                            info="Hey, my name is Joshua Choi and I’m passionate about web design and front-end 
                            web development. In my free time, I enjoy photography, music, and petting my dog."
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="images/default.jpg"
                            position="Fundraising Chair"
                            name="David Wang"
                            major="placeholder"
                            year="2022"
                        
                            />  
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProfileCard
                            src="images/default.jpg"
                            position="Event Coordinator"
                            name="Derek Guo"
                            major="placeholder"
                            year="2022"
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="images/katie.jpg"
                            position="Community Outreach Chair"
                            name="Katie O'Leary"
                            major="Undecided"
                            year="2024"
                            email="mailto:koleary8@u.rochester.edu"
                            linkedin="https://www.linkedin.com/in/katie-o-leary-8506021ba/"
                            link="https://www.facebook.com/profile.php?id=100013449365394"
                            info="Hey guys! I'm Katie O, from CT. I'm excited to join SASE and continue our 
                            community outreach programs. I am especially passionate about getting more women and 
                            minorities in STEM!"
                            />  
                        </Col>
                        <Col>
                            <ProfileCard
                            src="images/neya.jpg"
                            position="Mentorship Chair"
                            name="Neya More"
                            major="Neuroscience"
                            year="2023"
                            email="mailto:nmore@u.rochester.edu"
                            linkedin="https://www.linkedin.com/in/neya-more-04b5659b"
                            link="https://www.instagram.com/neya.em/?hl=en"
                            info="Hi, I'm Neya! I am a second year at U of R, hoping to major 
                            n Neuroscience. I am very excited to help students find a supportive 
                            mentor in the SASE community."
                            />  
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Eboard