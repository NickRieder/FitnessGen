import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DailyWorkout from "./DailyWorkout";
import "./Style.css"

 const ThreeDay = ({ leg, back, chest, arms, core }) => {
       
       useEffect(()=>{
        
        console.log("THREE DAY")
        
    }, []);

        
        const [dayTag, setDayTag] = useState("Day 1");

        return (
            <>
            <Container style={{ paddingTop: "20px", maxWidth: "1300px", borderColor:"none"}}>
                <Card className="w-100" style={{ maxWidth: "1200px", boxSizing: "content-box" , backgroundColor: "#395a80" }}>
                <Card.Body className="p-0" style={{ }}>
                    
                    {/* Left side menu to change workout page */}
                    <div className="d-inline-flex">
                    <Container className="d-flex justify-content-start p-0" >
                        <Form>
                        <div> 
                            <h3 style={{color:'white'}}>Three Day Workout</h3>
                        </div> 

                        <div>
                            <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor:"gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => setDayTag("Day 1")}> Day 1 </Button>  
                        </div>

                        <div>
                            <Button id="btn" className="navigate" style={{  border: "none", color: "black", borderColor:"gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => setDayTag("Day 2")}> Day 2 </Button>  
                        </div>

                        <div>
                            <Button id="btn" className="navigate" style={{  border: "none", color: "black", borderColor:"gray", minWidth: "300px", outline: "none", boxShadow: "none"  }} onClick={() => setDayTag("Day 3")}> Day 3 </Button>  
                        </div>
                        </Form>  
                    </Container>
                    </div>

                    {/* workout content - right side */}
                    <div className="d-inline-flex w-100 h-100" style={{ maxWidth:"900px"}}>
                    <Container className="d-inline-flex align-items-center p-0" style={{ minHeight:"150px"}}>
                        <Card className="w-100" style={{ minHeight:"75vh", border:"none"}}>
                        <Card.Body>
                            <h2 className="fst-italic d-flex justify-content-start mb-4"> {dayTag} </h2>   
                            <div>
                                <DailyWorkout leg={leg} back={back} chest={chest} arms={arms} core={core} />
                            </div>
                        </Card.Body>
                        </Card>
                    </Container>
                    </div>
                
                </Card.Body>
                </Card>
            </Container>
            </>
            )
    }
export default ThreeDay;