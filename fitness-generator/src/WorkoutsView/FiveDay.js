import React, { useState } from "react";
import { Container, Form, Card, Button } from 'react-bootstrap';
import UpperSplit from "./UpperSplit";
import LowerSplit from "./LowerSplit";
import MobilityDisplay from "./MobilityDisplay";

const FiveDay = ({leg, back, chest, core, shoulder, glutes, calves, biceps, tricep, hamstrings, mobility}) => { 
        
    const [dayTag, setDayTag] = useState("Day 1");
    const [lowerSplit, setLowerSplit] = useState(false);
    var hasMobility = false;
    if (mobility.length != 0) {
        hasMobility = true;
    }
            
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
                            <h3>Five Day Workout</h3>
                        </div> 

                        <div>
                            <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor:"gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => { setLowerSplit(false)
                                setDayTag("Day 1")}}> Day 1 </Button>  
                        </div>

                        <div>
                            <Button id="btn" className="navigate" style={{  border: "none", color: "black", borderColor:"gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => { setLowerSplit(true) 
                                setDayTag("Day 2")}}> Day 2 </Button>  
                        </div>

                        <div>
                            <Button id="btn" className="navigate" style={{  border: "none", color: "black", borderColor:"gray", minWidth: "300px", outline: "none", boxShadow: "none"  }} onClick={() => { setLowerSplit(false) 
                                setDayTag("Day 3")}}> Day 3 </Button>  
                        </div>

                        <div>
                            <Button id="btn" className="navigate" style={{  border: "none", color: "black", borderColor:"gray", minWidth: "300px", outline: "none", boxShadow: "none"  }} onClick={() => { setLowerSplit(true) 
                                setDayTag("Day 4")}}> Day 4 </Button>  
                        </div>

                        <div>
                            <Button id="btn" className="navigate" style={{  border: "none", color: "black", borderColor:"gray", minWidth: "300px", outline: "none", boxShadow: "none"  }} onClick={() => { setLowerSplit(false) 
                            setDayTag("Day 5")}}> Day 5 </Button>  
                        </div>
                        <div>
                            {hasMobility ? <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => {
                                setDayTag("Mobility")
                            }}> Mobility </Button> : ""}
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
                                {lowerSplit ? <LowerSplit leg={leg} hamstrings={hamstrings} glutes={glutes} calves={calves} core={core} mobility={mobility} /> : <UpperSplit back={back} chest={chest} biceps={biceps} tricep={tricep} shoulder={shoulder} core={core} mobility={mobility} />}
                                {hasMobility ? <MobilityDisplay mobility={mobility} />: ""}
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

export default FiveDay;