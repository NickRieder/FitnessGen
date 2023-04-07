import React, { useState } from "react";
import { Container, Form, Card, Button } from 'react-bootstrap';
import UpperSplit from "./UpperSplit";
import LowerSplit from "./LowerSplit";
import MobilityDisplay from "./MobilityDisplay";
import { deleteWorkoutInDatabase, saveWorkoutInDatabase } from "../config/firebase/index";
import Footer from '../Footer';

const FiveDay = ({ user, quads, back, chest, core, shoulder, glutes, calves, biceps, tricep, hamstrings, mobility }) => {

  const [dayTag, setDayTag] = useState("Day 1");
  const [lowerSplit, setLowerSplit] = useState(false);
  const [upperSplit, setUpperSplit] = useState(true);
  const [dayNum, setDayNum] = useState(0);
  var hasMobility = false;
  if (mobility.length != 0) {
    hasMobility = true;
  }
  const [isMobility, setIsMobility] = useState(false)
  const beginDeleteWorkout = () => {
    if (window.confirm("Are you sure you want to generate a new workout? Your saved workout will be lost and you will have to save a new one!")) {
      deleteWorkoutInDatabase(user);
      window.location.reload(true);
    } else {
      console.log("User did not delete workout in database");
    }
  }

  return (
    <>
      <Container style={{ paddingTop: "20px", maxWidth: "1300px", borderColor: "none", marginBottom:'2rem'}}>
        <Card className="w-100" style={{ maxWidth: "1200px", boxSizing: "content-box", backgroundColor: "#395a80" }}>
          <Card.Body className="p-0" style={{}}>

            {/* Left side menu to change workout page */}
            <div className="d-inline-flex">
              <Container className="d-flex justify-content-start p-0" >
                <Form>
                  <div>
                    <h3>Five Day Workout</h3>
                  </div>

                  <div>
                    <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => {
                      setLowerSplit(false)
                      setDayTag("Day 1"); setIsMobility(false); setUpperSplit(true); setDayNum(0);
                    }}> Day 1 </Button>
                  </div>

                  <div>
                    <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => {
                      setLowerSplit(true)
                      setDayTag("Day 2"); setIsMobility(false); setUpperSplit(false); setDayNum(0);
                    }}> Day 2 </Button>
                  </div>

                  <div>
                    <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => {
                      setLowerSplit(false)
                      setDayTag("Day 3"); setIsMobility(false); setUpperSplit(true); setDayNum(1);
                    }}> Day 3 </Button>
                  </div>

                  <div>
                    <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => {
                      setLowerSplit(true)
                      setDayTag("Day 4"); setIsMobility(false); setUpperSplit(false); setDayNum(1);
                    }}> Day 4 </Button>
                  </div>

                  <div>
                    <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => {
                      setLowerSplit(false)
                      setDayTag("Day 5"); setIsMobility(false); setUpperSplit(true); setDayNum(2);
                    }}> Day 5 </Button>
                  </div>
                  <div>
                    {hasMobility ? <Button id="btn" className="navigate" style={{ border: "none", color: "black", borderColor: "gray", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => {
                      setDayTag("Mobility"); setIsMobility(true); setUpperSplit(false); setLowerSplit(false);
                    }}> Mobility </Button> : ""}
                  </div>
                  <div>
                    <Button size="lg" style={{ backgroundColor: '#B7D1E2', borderColor: '#323334', color: '#323334', borderRadius: '24px', marginTop: "300px", marginBottom: "30px", minWidth: "250px" }} onClick={() => saveWorkoutInDatabase(user, [quads, back, chest, core, hamstrings, glutes, calves, biceps, tricep, shoulder])}>Save Workout</Button>
                  </div>
                  <div>
                    <Button size="lg" style={{ backgroundColor: '#B7D1E2', borderColor: '#323334', color: '#323334', borderRadius: '24px', bottom: '100px', minWidth: "250px", marginBottom:'2rem' }} onClick={() => { beginDeleteWorkout(); }}>Generate New Workout</Button>
                  </div>
                </Form>
              </Container>
            </div>

            {/* workout content - right side */}
            <div className="d-inline-flex w-100 h-100" style={{ maxWidth: "900px"}}>
              <Container className="d-inline-flex align-items-center p-0" style={{ minHeight: "150px"}}>
                <Card className="w-100" style={{ minHeight: "75vh", border: "none"}}>
                  <Card.Body>
                    <h2 className="fst-italic d-flex justify-content-start mb-4"> {dayTag} </h2>
                    <div>
                      {lowerSplit ? <LowerSplit quads={quads[dayNum]} hamstrings={hamstrings[dayNum]} glutes={glutes[dayNum]} calves={calves[dayNum]} core={core[dayNum]} /> : ""}
                      {upperSplit ? <UpperSplit back={back[dayNum]} chest={chest[dayNum]} biceps={biceps[dayNum]} tricep={tricep[dayNum]} shoulder={shoulder[dayNum]} core={core[dayNum]} /> : ""}
                      {isMobility ? <MobilityDisplay mobility={mobility} /> : ""}
                    </div>
                  </Card.Body>
                </Card>
              </Container>
            </div>

          </Card.Body>
        </Card>
      </Container>

      
        <Footer />
    </>
  )
}

export default FiveDay;