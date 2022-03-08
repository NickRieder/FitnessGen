import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom";
// import background from '../images/fitness-rdl.jpg';

const Assessment = () => {
    // const navigate = useNavigate();
    return (
        <div>
            <Container>
                <h1>Assessment</h1>
                <p>Perform these quick tasks for a baseline understanding of your current fitness level. Enter 0 for any exercise you cannot perform.</p>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Wall Sit Time</Form.Label>
                    <Form.Control type="number" placeholder="Enter time" />
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
                    <Form.Label>Max Crunches</Form.Label>
                    <Form.Control type="number" placeholder="Enter number" />
                    <Form.Text className="text-muted">
                    Just click generate plan and we will find your ideal workout plan
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Generate Plan
                </Button>
            </Form>
            </Container>
        </div>
    )
}
export default Assessment;