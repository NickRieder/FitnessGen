import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';

const Tutorials = () => {

    return ( 
        <div style={{marginTop:"5rem"}}>
            
            <Container fluid>
                <h1>Tutorials</h1>
                <Row style={{marginBottom:"8rem", marginTop:"2rem", backgroundColor: 'lightblue',
      color: 'white', padding: '4rem', borderRadius:'25px'}}>
                    <Col>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/tgC7zW9JRO4" allowfullscreen></iframe>
                        <h2>Ab Crunch Machine</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/XoMfOXZVR60" allowfullscreen></iframe>
                        <h2>Chest Press Machine</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/xUzTiOZzImE" allowfullscreen></iframe>
                        <h2>DB Read Delt Fly</h2>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom:"3rem", marginTop:"4rem", backgroundColor: 'lightblue',
      color: 'white', padding: '4rem', borderRadius:'25px'}}>
                    <Col>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/YUVal0R_KR0" allowfullscreen></iframe>
                        <h2>Standing Dumbell Row</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/sKKi10ia1Yg" allowfullscreen></iframe>
                        <h2>Supinating Dumbell Curl</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/FVBC0pnOs_M" allowfullscreen></iframe>
                        <h2>DB Romanian Deadlift</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    
        )

}

export default Tutorials
