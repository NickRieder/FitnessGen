import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
return (
	<div className='border w-100' style={{backgroundColor:'#F8F9FA'}}>
        <Container className='mt-2 w-100 px-0'>
            <Row className="mb-3">
        
            <Col className="d-flex text-center">
                
                <div className="w-100">
                    <i className="">
                        <span style={{ marginLeft: "10px" }}>
                        <a href='aboutus' style={{textDecoration: 'none', color:'black'}}>About Us </a>
                        </span>
                    </i>
                </div>
                
                <div className="w-100">
                    <i className="">
                        <span style={{ marginLeft: "10px" }}>
                        Contact Us
                        </span>
                    </i>
                </div>

                <div className="w-100">
                    <i className="">
                        <span style={{ marginLeft: "10px" }}>
                        Social Media
                        </span>
                    </i>
                </div>
            </Col>
            </Row>
        </Container>
	</div>
);
};
export default Footer;
