import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext, setUserAssessmentData } from '.././config/firebase';
import { upperBodyScore, lowerBodyScore, coreScore } from '../data.js';
// import background from '../images/fitness-rdl.jpg';

const Assessment = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    function submitDBandNavWorkout() {
        const age = 30;
        const gender = 'M';
        const forms = document.getElementById("responses");
        for (var i = 0; i < forms.length; i++) {
            console.log(forms.elements[i].value);
        }

        const wallSit = forms.elements[0].value;
        const maxBench = forms.elements[1].value;
        const maxSquat = forms.elements[2].value;
        const pushUps = forms.elements[3].value;
        const crunches = forms.elements[4].value;

        const upper = upperBodyScore(pushUps, gender, age);
        const lower = lowerBodyScore(wallSit, gender, age);
        const core = coreScore(crunches, gender, age);
        var total = (upper + lower + core) / 3.0;


        setUserAssessmentData(user, wallSit, maxBench, maxSquat, pushUps, crunches, upper, lower, core, total);
        navigate('/workout');
    }

    return (
        <div>
            <Container>
                <h1>Assessment</h1>
                <p>Perform these quick tasks for a baseline understanding of your current fitness level. Enter 0 for any exercise you cannot perform.</p>
            <Form name = 'values' id = 'responses'>
                <Form.Group className="mb-3">
                    <Form.Label>Wall Sit Time</Form.Label>
                    <Form.Control type="number" placeholder="Enter time in seconds" />
                    <Form.Text className="text-muted">
                    In seconds.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Barbell Bench</Form.Label>
                    <Form.Control type="number" placeholder="Weight" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Squat</Form.Label>
                    <Form.Control type="number" placeholder="Weight" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Push Ups</Form.Label>
                    <Form.Control type="number" placeholder="Weight" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Plank Time</Form.Label>
                    <Form.Control type="number" placeholder="Enter time in seconds" />
                    <Form.Text className="text-muted">
                    Just click generate plan and we will find your ideal workout plan
                    </Form.Text>
                    </Form.Group>
                   
                </Form>
                <div className='d-flex justify-content-end me-2 mt-4'>
                    <Button onClick={() => submitDBandNavWorkout()}>Generate Plan</Button>
                    {/* <Button onClick={() => console.log(equipment)}>equ</Button> */}
                </div>
            </Container>
        </div>
    )
}
export default Assessment;