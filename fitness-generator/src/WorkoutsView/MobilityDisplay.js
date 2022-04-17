import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import "./DailyWorkout.css"

const MobilityDisplay = ({ mobility }) => {

    const mobilityList = mobility.map((exercise) =>
        <div className = "Row">
            <Row>
                <Col className="Col">Mobility</Col>
                <Col className="Col"> {exercise} </Col>
                <Col className="Col">3</Col>
                <Col className="Col">10</Col>
                <Col className="Col">Video</Col>
            </Row>
        </div>
    );


    return (
        <div className="DailyWorkout" style={{ color: "black" }}>
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
                    {mobilityList}
                </div>
            </Container>
        </div>
    )
}

export default MobilityDisplay;