import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DailyWorkout from "./DailyWorkout";
import MobilityDisplay from "./MobilityDisplay";
import "./Style.css"
import { saveWorkoutInDatabase, deleteWorkoutInDatabase } from "../config/firebase/index";

 const ThreeDay = ({user, leg, back, chest, arms, core, mobility}) => {
       
       useEffect(()=>{
        
         console.log("THREE DAY")
        
    }, []);

     var hasMobility = false;
     if (mobility.length != 0) {
         hasMobility = true;
     }
      const [isMobility, setIsMobility] = useState(false);
      const [dayNum, setDayNum] = useState(0);
      const beginDeleteWorkout = () => {
        if (window.confirm("Are you sure you want to generate a new workout? Your saved workout will be lost and you will have to save a new one!")) {
          deleteWorkoutInDatabase(user);
          window.location.reload(true);
        } else {
          console.log("User did not delete workout in database");
        }
      }

        
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
                          <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => { setDayTag("Day 1"); setDayNum(0); setIsMobility(false); } }> Day 1 </Button>
                        </div>

                        <div>
                          <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => { setDayTag("Day 2"); setDayNum(1); setIsMobility(false); }}> Day 2 </Button>
                        </div>

                        <div>
                          <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => { setDayTag("Day 3"); setDayNum(2); setIsMobility(false); }}> Day 3 </Button>
                        </div>
                        <div>
                            {hasMobility ? <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => {
                                setDayTag("Mobility"); setIsMobility(true);
                            }}> Mobility </Button> : ""}
                        </div>
                        <div>
                          <Button size="lg" style={{ backgroundColor: '#B7D1E2', borderColor: '#323334', color: '#323334', borderRadius: '24px', marginTop: "350px", marginBottom: "30px", minWidth: "250px" }} onClick={() => saveWorkoutInDatabase(user, [leg, back, chest, core, arms])}>Save Workout</Button>
                        </div>
                        <div>
                          <Button size="lg" style={{ backgroundColor: '#B7D1E2', borderColor: '#323334', color: '#323334', borderRadius: '24px', bottom: '100px', minWidth: "250px" }} onClick={() => {beginDeleteWorkout();}}>Generate New Workout</Button>
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
                                {isMobility ? <MobilityDisplay mobility={mobility} /> : <DailyWorkout leg={leg[dayNum]} back={back[dayNum]} chest={chest[dayNum]} arms={arms[dayNum]} core={core[dayNum]} mobility={mobility} />}
                                {/* hasMobility ? <MobilityDisplay mobility={mobility} /> : ""*/}
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