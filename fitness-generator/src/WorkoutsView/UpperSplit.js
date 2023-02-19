import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import "./DailyWorkout.css"

const UpperSplit = ({ back, chest, biceps, tricep, shoulder, core }) => {

  
    return (      
        <div className="DailyWorkout" style={{color: "black"}}>
            <Container className="Container">
            <Row className="Header">
                <Col>Body Part</Col>
                <Col>Excercise</Col>
                <Col>Sets</Col>
                <Col>Reps</Col>
                <Col>Tutorial</Col>
            </Row>
            {/* Legs Workout */}
            <div className="Content">
                <div className="Row">
                    <Row>
                        <Col className="Col">Chest</Col>
                        <Col className="Col">{chest}</Col>
                        <Col className="Col">3</Col>
                        <Col className="Col">10</Col>
                        <Col className="Col">Video</Col>
                    </Row>
                </div>
                {/* Back Workout */}
                <div className="Row">
                    <Row>
                        <Col>Back</Col>
                        <Col>{back}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
                {/* Chest Workout */}
                <div className="Row">
                    <Row>
                        <Col>Biceps</Col>
                        <Col>{biceps}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
                {/* Arms Workout */}
                <div className="Row">
                    <Row>
                        <Col>Triceps</Col>
                        <Col>{tricep}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
                {/* Arms Workout */}
                <div className="Row">
                    <Row>
                        <Col>Shoulders</Col>
                        <Col>{shoulder}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
                {/* Core Workout */}
                <div className="Row">
                    <Row>
                        <Col>Core</Col>
                        <Col>{core}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
            </div>
            </Container>
        </div>
        )
}

export default UpperSplit;