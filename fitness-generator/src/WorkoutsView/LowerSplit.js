import React, { useState, useEffect, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import { getWorkout, getUserInfo, AuthContext } from './../config/firebase'
import "./DailyWorkout.css"

const LowerSplit = ({leg, hamstrings, calves, glutes, core}) => {

  
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
            
            <div className="Content">
                {/* Legs Workout */}
                <div className="Row">
                    <Row>
                        <Col className="Col">Legs</Col>
                        <Col className="Col">{leg[(Math.floor(Math.random() * Object.keys(leg).length))]}</Col>
                        <Col className="Col">3</Col>
                        <Col className="Col">10</Col>
                        <Col className="Col">Video</Col>
                    </Row>
                </div>
                {/* Legs Workout */}
                <div className="Row">
                    <Row>
                        <Col className="Col">Hamstrings</Col>
                        <Col className="Col">{hamstrings[(Math.floor(Math.random() * Object.keys(hamstrings).length))]}</Col>
                        <Col className="Col">3</Col>
                        <Col className="Col">10</Col>
                        <Col className="Col">Video</Col>
                    </Row>
                </div>
                {/* Legs Workout */}
                <div className="Row">
                    <Row>
                        <Col className="Col">Glutes</Col>
                        <Col className="Col">{glutes[(Math.floor(Math.random() * Object.keys(glutes).length))]}</Col>
                        <Col className="Col">3</Col>
                        <Col className="Col">10</Col>
                        <Col className="Col">Video</Col>
                    </Row>
                </div>
                {/* Legs Workout */}
                <div className="Row">
                    <Row>
                        <Col className="Col">Calves</Col>
                        <Col className="Col">{calves[(Math.floor(Math.random() * Object.keys(calves).length))]}</Col>
                        <Col className="Col">3</Col>
                        <Col className="Col">10</Col>
                        <Col className="Col">Video</Col>
                    </Row>
                </div>
                {/* Core Workout */}
                <div className="Row">
                    <Row>
                        <Col>Core</Col>
                        <Col>{core[(Math.floor(Math.random() * Object.keys(core).length))]}</Col>
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

export default LowerSplit;