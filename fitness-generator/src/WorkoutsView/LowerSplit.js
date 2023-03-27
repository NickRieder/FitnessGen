import React, { useState, useEffect, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import { getWorkout, getUserInfo, AuthContext } from './../config/firebase'
import "./DailyWorkout.css"

const LowerSplit = ({ quads, hamstrings, calves, glutes, core }) => {

  return (
    <div className="DailyWorkout" style={{ color: "black" }}>
      <Container className="Container">
        <Row className="Header">
          <Col>Body Part</Col>
          <Col>Exercise</Col>
          <Col>Sets</Col>
          <Col>Reps</Col>
          <Col>Tutorial</Col>
        </Row>

        <div className="Content">
          {/* Quads Workout */}
          <div className="Row">
            <Row>
              <Col className="Col">Quadriceps</Col>
              <Col className="Col">{quads}</Col>
              <Col className="Col">3</Col>
              <Col className="Col">10</Col>
              <Col className="Col">Video</Col>
            </Row>
          </div>
          {/* Legs Workout */}
          <div className="Row">
            <Row>
              <Col className="Col">Hamstrings</Col>
              <Col className="Col">{hamstrings}</Col>
              <Col className="Col">3</Col>
              <Col className="Col">10</Col>
              <Col className="Col">Video</Col>
            </Row>
          </div>
          {/* Legs Workout */}
          <div className="Row">
            <Row>
              <Col className="Col">Glutes</Col>
              <Col className="Col">{glutes}</Col>
              <Col className="Col">3</Col>
              <Col className="Col">10</Col>
              <Col className="Col">Video</Col>
            </Row>
          </div>
          {/* Legs Workout */}
          <div className="Row">
            <Row>
              <Col className="Col">Calves</Col>
              <Col className="Col">{calves}</Col>
              <Col className="Col">3</Col>
              <Col className="Col">10</Col>
              <Col className="Col">Video</Col>
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

export default LowerSplit;