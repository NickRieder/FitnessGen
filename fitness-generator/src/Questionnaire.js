import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Container, Form } from 'react-bootstrap'
import background from "./images/fitness-rdl.jpg";
import {  AuthContext, setUserWorkoutData } from './config/firebase';
// import { MDBSelect } from 'mdb-react-ui-kit';

export default function Questionnaire() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  function FormLabel(label) {
    return (<Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px', maxWidth: '175px', textAlign: 'initial' }}> {label} </Form.Label>)
  }

  // QUESTION 1 PT1
  const [heightFT, setHeightFT] = useState(3);

  const heightFTOpts = [
    {label: "3ft", value: 3},
    {label: "4ft", value: 4},
    {label: "5ft", value: 5},    
    {label: "6ft", value: 6},
    {label: "7ft", value: 7}
  ]

  // QUESTION 1 PT 2  
  const [heightIN, setHeightIN] = useState(0);
  const heightINOpts = [
    {label: "0in", value: 0},
    {label: "1in", value: 1},
    {label: "2in", value: 2},
    {label: "3in", value: 3},
    {label: "4in", value: 4},
    {label: "5in", value: 5},
    {label: "6in", value: 6},
    {label: "7in", value: 7},
    {label: "8in", value: 8},
    {label: "9in", value: 9},
    {label: "10in", value: 10},
    {label: "11in", value: 11}
  ]

  // QUESTION 2
  const [weight, setWeight] = useState("120-130");
  const weightOpts = [
    {label:"weight120", value: "120-130"},
    {label:"weight130", value: "130-140"},
    {label:"weight140", value: "140-150"},
    {label:"weight150", value: "150-160"},
    {label:"weight160", value: "160-170"},
    {label:"weight170", value: "170-180"},
    {label:"weight190", value: "190-200"},
    {label:"weight200", value: "200-210"}
  ]
  
  // QUESTION 3
  const injuryOpts = {
    "None": "inj_none",
    "Neck": "inj_neck",
    "Shoulders": "inj_shoulders",
    "Wrists": "inj_wrists",
    "Hips":"inj_hips",
    "Knees":"inj_knees",
    "Ankles":"inj_ankles"
    // "Kettlebell": "KB"
  };

  const [injury, setInjury] = useState({
    "inj_none": false,
    "inj_neck": false,
    "inj_shoulders": false,
    "inj_wrists": false,
    "inj_knees": false,
    "inj_ankles": false
  });

  // QUESTION 4
  const [workoutDayNum, setWorkoutDayNum] = useState(3);
  const workoutDayNumOpts = [
  //   {label: "workoutDayNum1", value: 1},
  //   {label: "workoutDayNum2", value: 2},
    {label: "workoutDayNum3", value: 3},
  // {label: "workoutDayNum4", value: 4},
    {label: "workoutDayNum5", value: 5}
    // {label: "workoutDayNum6", value: 6},
    // {label: "workoutDayNum7", value: 7}
  ];

  // QUESTION 5
  const [intensityVal, setIntensityVal] = useState('Easy');
  const intensityOpts = [
    {name: 'Easy', value: 'Easy'},
    {name: 'Medium', value: 'Medium'},
    {name: 'Hard', value: 'Hard'},
  ]

  // ICON INFO BTN
  const iconPath1 = "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  const iconPath2 = "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"

  // QUESTION 6 
  const [radioVal, setRadioVal] = useState(1);
  const radioOpts = [
    {name: 'Yes', value: 1},
    {name: 'No', value: 2},
  ];

  // QUESTION 7
  const equipmentOpts = {
    "Dumbbell": "DB",
    "Barbell": "Barbell",
    "Resistance Band": "Band",
    "Machine": "Machine",
    // "Kettlebell": "KB"
  };
  const [equipment, setEquipment] = useState({
    "DB": false,
    "Barbell": false,
    "Band": false,
    "Machine": false,
    "BodyWeight": true,
    "Kettlebell": false
  });

  // FINAL SUBMIT
  function submitDBandNavAssessment() {
    // console.log(heightFT);
    // console.log(heightIN);
    // console.log(weight);
    // console.log(workoutDayNum);
    // console.log(intensityVal);

    const equipmentArray = [];
    console.log(Object.keys(equipment).reduce((p, k) => {
      if (equipment[k]) {
        p.push(k);
      }
      return p;
    }, equipmentArray));



    setUserWorkoutData(user, heightFT, heightIN, weight, workoutDayNum, intensityVal, equipmentArray);
      navigate('/assessment');
    }

  // function to handle when user select and disselect equipment
  function handleUserEquipment(currEquipment) {
    const newBoolEVal = !(equipment[currEquipment])
    // console.log(currEquipment);
    // console.log(equipment[currEquipment]); 
    // console.log(newBoolEVal);
    // console.log(equipment);
    setEquipment(prevState => ({
        ...prevState,
        [currEquipment]: newBoolEVal})
    );   
  }

  function handleUserInjury(currInjury) {
    const newBoolEVal = !(injury[currInjury])
    // console.log(currEquipment);
    // console.log(equipment[currEquipment]); 
    // console.log(newBoolEVal);
    // console.log(equipment);
    setInjury(prevState => ({
        ...prevState,
        [currInjury]: newBoolEVal})
    );   
  }

  // const handleHeightChange = (e) => {
  //     setHeightFT(e)
  //     console.log(heightFT)
  //   }

  return (   
    <div className='d-flex justify-content-center' style={{ background: `url(${background})` }}>
      <div id="Questionnaire" className="d-flex flex-column justify-content-center w-100" style={{ minHeight: '100vh', maxWidth: '600px'}}>

        <Container className='mt-5'>
          <Card style={ {maxWidth: '600px'} }>
            
            <div> <h2 className='d-flex justify-content-start ms-3 mb-5'> ABOUT YOURSELF </h2></div>
            
            <Card.Body className='justify-content-center'>  
              <Form onSubmit={submitDBandNavAssessment}>
                
                {/* QUESTION 1 */}
                {/* style={{ maxWidth: '400px' }} */}
                {/* d-flex puts question inline with answer box */}
                <Form.Group id='question1' className='d-flex w-100 mb-3'>

                  {/* QUESTION 1 TITLE */}
                  {/* justify-content-start shift question to left */}
                  {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Height </Form.Label> */}
                  {FormLabel("Height")}
                  
                  {/* FEET OPTIONS */}
                  <Form.Select className='ps-1' style={{ maxWidth: '150px', minHeight: '40px' }} onChange={(e) => setHeightFT(e.currentTarget.value)}> 
                    { heightFTOpts.map((currHeight, index) => 
                      <option 
                        key={index} 
                        value={currHeight.value}> {currHeight.value} FT </option>
                    )}
                  </Form.Select>
                  
                  {/* INCHES OPTIONS */}
                  {/* <Form.Control type='select' className='ps-1' style={{ maxWidth: '300px' }}/>  */} 
                  <Form.Select className='ps-1' style={{ maxWidth: '150px' }} onChange={(e) => setHeightIN(e.currentTarget.value)}> 
                    {heightINOpts.map((currHeight, index) => 
                      <option 
                        key={index} 
                        value={currHeight.value}> {currHeight.value} in </option>
                    )}
                  </Form.Select>
                </Form.Group>
            
                {/* WEIGHT OPTIONS */}
                <Form.Group id='question2' className='d-flex w-100 mb-3'>
                  {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Weight </Form.Label> */}
                  {/* <Form.Control className='ps-1' style={{ maxWidth: '300px' }}/>  */}
                  {FormLabel("Weight")}

                  <Form.Select className='ps-1' style={{ maxWidth: '300px', minHeight: '40px' }} onChange={(e) => setWeight(e.currentTarget.value)}> 
                    {weightOpts.map((currWeight, index) => 
                      <option 
                        key={index} 
                        value={currWeight.value}> {currWeight.value} lbs </option>
                    )}
                  </Form.Select>
                </Form.Group>

                {/* INJURIES OPTIONS */}
                <Form.Group id='question3' className='d-flex w-100 mb-3'>
                  {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Past Injuries </Form.Label> */}
                  {/* <Form.Control className='ps-1' style={{ maxWidth: '300px' }}/>  */}
                  {FormLabel("Past Injuries")}
                    <Form.Group className='justify-content-start' style={{ maxWidth: '300px', minHeight: '40px', textAlign: 'left' }}>
                    {Object.keys(injuryOpts).map((currInjury, index) =>{
                      // Some rules for selection
                      // When select None, cannot select others.
                      // let disabled = false;
                      // if (injuryOpts["None"]){
                      //   disabled = currInjury !== "None";
                      // }else{
                      //   disabled = true;
                      // }
                    return(
                    <Form.Check inline type='checkbox' label={currInjury} value={injury[currInjury]} className='' style={{ minWidth: '300px', minHeight: '25px' }} 
                      key={index}
                      checked={injury[injuryOpts[currInjury]]} 
                      onChange={() => handleUserInjury(injuryOpts[currInjury])}
                      // disabled={disabled}
                    />);
                    })}
                    </Form.Group>
                </Form.Group>

                {/* WORKOUT DAYS OPTION */}
                <Form.Group id='question4' className='d-flex w-100 mb-3'>
                  {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px', maxWidth: '175px', textAlign: 'initial' }}> Number of Workout Days </Form.Label> */}
                  {/* <Form.Control className='ps-1' style={{ maxWidth: '300px', maxHeight: '40px' }}/>  */}
                  {FormLabel("Number of Workout Days")}

                  <Form.Select className='ps-1' style={{ maxWidth: '300px', maxHeight: '40px' }} onChange={(e) => setWorkoutDayNum(e.currentTarget.value)}>
                    
                    {workoutDayNumOpts.map((currWorkoutDayNum, index) => 
                      <option 
                        key={index} 
                        value={currWorkoutDayNum.value}> {currWorkoutDayNum.value} </option>
                    )}
                  </Form.Select>
                </Form.Group>

                {/* WORKOUT INTENSITY OPTION*/}
                <Form.Group id='question5' className='d-flex w-100 mb-3'>
                  {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Workout Intensity </Form.Label> */}
                  {/* <Form.Control className='ps-1' style={{ maxWidth: '300px', minHeight: '40px' }}/>  */}
                  {FormLabel("Workout Intensity")}

                  <Form.Select className='ps-1' style={{ maxWidth: '300px', maxHeight: '40px' }} onChange={(e) => setIntensityVal(e.currentTarget.value)}>
                    {intensityOpts.map((currIntensity, index) => (
                      <option  
                        key={index}
                        value={currIntensity.value}
                        checked={intensityVal === currIntensity.value}> {currIntensity.name} </option>
                    ))}
                  </Form.Select>

                  {/* Information icon button */}
                  {/* <Button className="ms-2" style={{ minHeight: '40px' }} onClick={() => navigate('/intensityinfo', {state: {intensityVal: intensityVal}}) }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                        d<path d={iconPath1}></path>
                        <path d={iconPath2}></path>
                      </svg>
                  </Button> */}
                </Form.Group>

                {/* CARDIO OPTION */}
                <Form.Group id='question6' className='d-flex w-100 mb-3'>
                  {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Include Cardio? </Form.Label> */}
                  {FormLabel("Include Cardio?")}

                  <Form.Group className='d-inline-flex' style={{ maxWidth: '300px', minHeight: '40px', textAlign: 'left' }}>
                    {/* <Form.Check inline type='radio' label='Yes' value='' className='' style={{ minWidth: '150px', minHeight: '40px' }} />
                    <Form.Check inline type='radio' label='No' className='' style={{ minWidth: '150px', minHeight: '40px' }} /> */}

                    {radioOpts.map((currRadio, index) => (
                      <Form.Check inline className='' style={{ minWidth: '150px', minHeight: '40px' }} 
                        key={index}
                        type='radio' 
                        label={currRadio.name} 
                        value={currRadio.value}
                        // eslint-disable-next-line eqeqeq
                        checked={radioVal == currRadio.value}
                        onChange={(e) => setRadioVal(e.currentTarget.value)}
                      />
                    ))}
                  </Form.Group>
                </Form.Group>

                {/* EQUIPMENT OPTION */}
                <Form.Group id='question7' className='d-flex w-100 mb-3'>
                  {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Equipment Available </Form.Label> */}
                  {/* <Form.Control className='ps-1' style={{ maxWidth: '300px', minHeight: '40px' }}/>  */}
                  {FormLabel("Equipment Available")}

                  <Form.Group className='justify-content-start' style={{ maxWidth: '300px', minHeight: '40px', textAlign: 'left' }}>
                    {Object.keys(equipmentOpts).map((currEquipment, index) =>

                      <Form.Check inline type='checkbox' label={currEquipment} value={equipment[currEquipment]} className='' style={{ minWidth: '300px', minHeight: '40px' }} 
                        key={index}
                        checked={equipment[equipmentOpts[currEquipment]]} 
                        onChange={() => handleUserEquipment(equipmentOpts[currEquipment])}
                      />)}
                  </Form.Group>
                </Form.Group>
                <div className='d-flex justify-content-end me-2 mt-4'>

                  <Button type='submit'>Submit</Button>

                </div>
              </Form>

            </Card.Body>
          </Card>
        </Container>
        
        {/* <div className='d-flex justify-content-end me-2 mt-4'> */}
          {/* <Button onClick={() => submitDBandNavAssessment()}>Submit</Button> */}
          {/* <Button onClick={() => console.log(equipment)}>equ</Button> */}
        {/* </div> */}
    
      </div>
    </div>
  )
}
