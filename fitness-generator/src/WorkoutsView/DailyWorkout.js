import React, { useState, useEffect, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import { doc, getDoc } from "firebase/firestore"
import { db, AuthContext, getUserInfo, getWorkout } from './../config/firebase'
import "./DailyWorkout.css"

const DailyWorkout = ({leg, back, chest, arms, core}) => {
    /*const [legs, setLeg] = useState(null)
    const[vid, setVid] = useState(null)*/

   /* const fetchVideo = async (workout) =>{
        
        const docRef = doc(db, "Videos", workout);
        const docSnap = await getDoc(docRef);
        const result = docSnap.data();
        return result;
        
    }*/

   /* useEffect(()=>{
        setLeg(leg[(Math.floor(Math.random() * Object.keys(leg).length))])
        fetchVideo(legs)
    
    })
  */

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
                        <Col className="Col">Legs</Col>
                        <Col className="Col">{leg[(Math.floor(Math.random() * Object.keys(leg).length))]}</Col>
                        <Col className="Col">3</Col>
                        <Col className="Col">10</Col>
                        <Col className="Col">{}</Col>
                    </Row>
                </div>
                {/* Back Workout */}
                <div className="Row">
                    <Row>
                        <Col>Back</Col>
                        <Col>{back[(Math.floor(Math.random() * Object.keys(back).length))]}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
                {/* Chest Workout */}
                <div className="Row">
                    <Row>
                        <Col>Chest</Col>
                        <Col>{chest[(Math.floor(Math.random() * Object.keys(chest).length))]}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
                {/* Arms Workout */}
                <div className="Row">
                    <Row>
                        <Col>Arms</Col>
                        <Col>{arms[(Math.floor(Math.random() * Object.keys(arms).length))]}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>{}</Col>
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

export default DailyWorkout;