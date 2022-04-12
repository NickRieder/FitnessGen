import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { data } from "./src/data.js"

export default function WorkoutPlan() {
    const navigate = useNavigate();

    function FormLabel(label) {
        return (<Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px', maxWidth: '175px', textAlign: 'initial' }}> {label} </Form.Label>)
    }
    const intensity = "easy";
    const age = 30;
    const gender = "male";
    const pushups = 25;
    const plank = 45;
    const wallSit = 65;
    const sitUps = 40;


    //Options: Upper, Lower, Full
    const [day, setDay] = useState("Full");
    const lowerBody = data.lowerBody;
    const chest = data.chest;
    const triceps = data.triceps;
    const core = data.core;
    const shoulders = data.shoulders;
    const biceps = data.biceps;
    const equipment = { "DB", "BB"};


    //eliminate workouts that do not meet available equipment
    function decideAvailable(equipment) {
        if (equipment.length == 0) {
            if (lowerBody.equipment == "BW") {
                const lowerAvailable = 
            }
        }
    }
    //

}
