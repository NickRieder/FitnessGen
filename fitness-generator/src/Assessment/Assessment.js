import React, { useContext, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { db, AuthContext, setUserAssessmentData } from '.././config/firebase';
import { calculateIntensity, wallSitScore, benchScore, squatScore, pushUpScore, plankScore } from '../data.js';
import { doc, getDoc } from "firebase/firestore"
// import background from '../images/fitness-rdl.jpg';

const Assessment = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [wallSitNum, setWallSitNum] = useState(null);
    const [benchNum, setBenchNum] = useState(null);
    const [squatNum, setSquatNum] = useState(null);
    const [pushUpNum, setPushUpNum] = useState(null);
    const [plankNum, setPlankNum] = useState(null);
    const [wantsOldData, setWantsOldData] = useState(false);

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('M');
    const [weight, setWeight] = useState('');

  const fetchUserData = async () => {
    const userInfoRef = doc(db, `/Users/${user.uid}/WorkoutData/Data`);
    const docSnap = await getDoc(userInfoRef);

    const result = docSnap.data();
    setAge(result.Age);
    setGender(result.Sex);
    setWeight(result.Weight);

    const userInfoRef2 = doc(db, `/Users/${user.uid}/WorkoutData/AssessmentData`);
    const docSnap2 = await getDoc(userInfoRef2);

    const result2 = docSnap2.data();
    setWallSitNum(result2.WallSit);
    setBenchNum(result2.MaxBench);
    setSquatNum(result2.MaxSquat);
    setPushUpNum(result2.PushUps);
    setPlankNum(result2.PlankTime);

  }

  useEffect(() => {
    fetchUserData();
  }, [user])


    function submitDBandNavWorkout() {

        const forms = document.getElementById("responses");
        for (var i = 0; i < forms.length; i++) {
            console.log(forms.elements[i].value);
        }

        const wallSit = forms.elements[0].value;
        const maxBench = forms.elements[1].value;
        const maxSquat = forms.elements[2].value;
        const pushUps = forms.elements[3].value;
        const plank = forms.elements[4].value;

        

        if (!wallSit || !maxBench || !maxSquat || !pushUps || !plank) {
            alert('Please fill in all the values before generating a plan');
            return;
        }
        /*
        const upper = upperBodyScore(pushUps, gender);
        const lower = lowerBodyScore(wallSit, gender);
        const core = coreScore(plank);
        var total = (upper + lower + core) / 3.0;
        */
        var intensity = calculateIntensity(gender, age, weight, wallSit, maxBench, maxSquat, pushUps, plank);

        setUserAssessmentData(user, wallSit, maxBench, maxSquat, pushUps, plank, intensity);
        navigate('/mobilitytest');
    }

    return (
        <div>
            <Container>
                <h1>Assessment</h1>
                <p>Perform these quick tasks for a baseline understanding of your current fitness level. Enter 0 for any exercise you cannot perform.</p>
                <div className='justify-content-center me-2 mt-2 mb-2'>
                  <Button onClick={() => {setWantsOldData(true); }}>Display Previous Data</Button>
                  {wantsOldData && (
                    <div>
                      <div>
                        Wall Sit: {wallSitNum} <br />
                        Bench: {benchNum} <br />
                        Squat: {squatNum} <br />
                        Push Ups: {pushUpNum} <br />
                        Plank Time: {plankNum} <br />
                      </div>
                      <Button onClick={() => setWantsOldData(false)}>
                        Hide Previous Data
                      </Button>
                    </div>
                  )}
                </div>
            <Form name = 'values' id = 'responses'>
                <Form.Group className="mb-3">
                    <Form.Label>Wall Sit Time</Form.Label>
                    <Form.Control type="number" min="0" placeholder="Enter time in seconds" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Barbell Bench</Form.Label>
                    <Form.Control type="number" min="0" placeholder="Weight" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Squat</Form.Label>
                    <Form.Control type="number" min="0" placeholder="Weight" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Push Ups</Form.Label>
                    <Form.Control type="number" min="0" placeholder="Weight" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Plank Time</Form.Label>
                    <Form.Control type="number" min= "0" placeholder="Enter time in seconds" />
                    <Form.Text className="text-muted">
                    Just click generate plan and we will find your ideal workout plan
                    </Form.Text>
                    </Form.Group>
                   
                </Form>
                <div className='d-flex justify-content-end me-2 mt-4'>
                    <Button onClick={() => submitDBandNavWorkout()}>Submit</Button>
                    {/* <Button onClick={() => console.log(equipment)}>equ</Button> */}
                </div>
            </Container>
        </div>
    )
}
export default Assessment;