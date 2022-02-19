import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Container, Form } from 'react-bootstrap'
import background from "./images/fitness-rdl.jpg";

export default function Questionnaire() {
  const navigate = useNavigate();

  function FormLabel(label) {
    return (<Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px', maxWidth: '175px', textAlign: 'initial' }}> {label} </Form.Label>)
  }

  // QUESTION 5


  // ICON INFO BTN
  const [intensityVal, setIntensityVal] = useState('Easy');

  const intensityOpts = [
    {name: 'Easy', value: 'Easy'},
    {name: 'Medium', value: 'Medium'},
    {name: 'Hard', value: 'Hard'},
  ]

  const iconPath1 = "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  const iconPath2 = "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"

  // QUESTION 6 
  const [radioVal, setRadioVal] = useState(1);

  const radioOpts = [
    {name: 'Yes', value: 1},
    {name: 'No', value: 2},
  ]

  // QUESTION 7
  function CheckboxQ7(label) {
    return (<Form.Check inline type='checkbox' label={label} className='' style={{ minWidth: '300px', minHeight: '40px' }} />)
  }

  return (   
    <div className='d-flex justify-content-center' style={{ background: `url(${background})` }}>
      <div id="Questionnaire" className="d-flex flex-column justify-content-center w-100" style={{ minHeight: '100vh', maxWidth: '600px'}}>


        <Container className='mt-5'>
          <Card style={ {maxWidth: '600px'} }>
            
            <div> <h2 className='d-flex justify-content-start ms-3 mb-5'> ABOUT YOURSELF </h2></div>
            
            <Card.Body className='justify-content-center'>  
              
              {/* QUESTION 1 */}
              {/* style={{ maxWidth: '400px' }} */}
              {/* d-flex puts question inline with answer box */}
              <Form.Group id='question1' className='d-flex w-100 mb-3'>

                {/* QUESTION 1 TITLE */}
                {/* justify-content-start shift question to left */}
                {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Height </Form.Label> */}
                {FormLabel("Height")}
                
                {/* FEET OPTIONS */}
                <Form.Select className='ps-1' style={{ maxWidth: '150px', minHeight: '40px' }}> 
                  <option value="FT3">3ft</option>
                  <option value="FT4">4ft</option>
                  <option value="FT5">in</option>
                  <option value="FT6">6ft</option>
                  <option value="FT7">7ft</option>
                </Form.Select>
                
                {/* INCHES OPTIONS */}
                {/* <Form.Control type='select' className='ps-1' style={{ maxWidth: '300px' }}/>  */} 
                <Form.Select className='ps-1' style={{ maxWidth: '150px' }}> 
                  <option value="IN1">1in</option>
                  <option value="IN2">2in</option>
                  <option value="IN3">3in</option>
                  <option value="IN4">4in</option>
                  <option value="IN5">5in</option>
                  <option value="IN6">6in</option>
                  <option value="IN7">7in</option>
                  <option value="IN8">8in</option>
                  <option value="IN9">9in</option>
                  <option value="IN10">10in</option>
                  <option value="IN11">11in</option>
                </Form.Select>
              </Form.Group>
          
              <Form.Group id='question2' className='d-flex w-100 mb-3'>
                {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Weight </Form.Label> */}
                {/* <Form.Control className='ps-1' style={{ maxWidth: '300px' }}/>  */}
                {FormLabel("Weight")}

                <Form.Select className='ps-1' style={{ maxWidth: '300px', minHeight: '40px' }}> 
                  <option value="weight120">120-130 lbs</option>
                  <option value="weight130">130-140 lbs</option>
                  <option value="weight140">140-150 lbs</option>
                  <option value="weight150">150-160 lbs</option>
                  <option value="weight160">160-170 lbs</option>
                  <option value="weight170">170-180 lbs</option>
                  <option value="weight180">180-190 lbs</option>
                  <option value="weight190">190-200 lbs</option>
                  <option value="weight200">200-210 lbs</option>
                </Form.Select>
              </Form.Group>

              <Form.Group id='question3' className='d-flex w-100 mb-3'>
                {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Past Injuries </Form.Label> */}
                {/* <Form.Control className='ps-1' style={{ maxWidth: '300px' }}/>  */}
                {FormLabel("Past Injuries")}

                <Form.Select className='ps-1' style={{ maxWidth: '300px', minHeight: '40px' }}> 
                  <option value="injuryPF">Plantar fasciitis</option>
                  <option value="injuryTE">Tennis elbow</option>
                  <option value="injurySS">Shin splints</option>
                  <option value="injuryRCT">Rotator cuff tendonitis</option>
             </Form.Select>
              </Form.Group>

              <Form.Group id='question4' className='d-flex w-100 mb-3'>
                {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px', maxWidth: '175px', textAlign: 'initial' }}> Number of Workout Days </Form.Label> */}
                {/* <Form.Control className='ps-1' style={{ maxWidth: '300px', maxHeight: '40px' }}/>  */}
                {FormLabel("Number of Workout Days")}

                <Form.Select className='ps-1' style={{ maxWidth: '300px', maxHeight: '40px' }}>
                  <option value="workoutDayNum1">1</option>
                  <option value="workoutDayNum2">2</option>
                  <option value="workoutDayNum3">3</option>
                  <option value="workoutDayNum4">4</option>
                  <option value="workoutDayNum5">5</option>
                  <option value="workoutDayNum6">6</option>
                  <option value="workoutDayNum7">7</option>
                </Form.Select>
              </Form.Group>

              <Form.Group id='question5' className='d-flex w-100 mb-3'>
                {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Workout Intensity </Form.Label> */}
                {/* <Form.Control className='ps-1' style={{ maxWidth: '300px', minHeight: '40px' }}/>  */}
                {FormLabel("Workout Intensity")}

                <Form.Select className='ps-1' style={{ maxWidth: '300px', maxHeight: '40px' }}>
                  {intensityOpts.map((currIntensity, index) => (
                    <option  
                      key={index}
                      value={currIntensity.value}
                      checked={intensityVal == currIntensity.value}
                      onClick={(e) => setIntensityVal(e.currentTarget.value)}
                      onChange={(e) => setIntensityVal(e.currentTarget.name)}
                    > {currIntensity.name} </option>
                  ))}
                </Form.Select>

                {/* Information icon button */}
                <Button className="ms-2" style={{ minHeight: '40px' }} onClick={() => navigate('/intensityinfo', {state: {intensityVal: intensityVal}}) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                      <path d={iconPath1}></path>
                      <path d={iconPath2}></path>
                    </svg>
                </Button>
              </Form.Group>

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
                      checked={radioVal == currRadio.value}
                      onClick={(e) => setRadioVal(e.currentTarget.value)}
                      onChange={(e) => setRadioVal(e.currentTarget.value)}
                    />
                  ))}
                </Form.Group>
              </Form.Group>

              <Form.Group id='question7' className='d-flex w-100 mb-3'>
                {/* <Form.Label className='d-flex justify-content-start' style={{ minWidth: '175px' }}> Equipment Available </Form.Label> */}
                {/* <Form.Control className='ps-1' style={{ maxWidth: '300px', minHeight: '40px' }}/>  */}
                {FormLabel("Equipment Available")}

                <Form.Group className='justify-content-start' style={{ maxWidth: '300px', minHeight: '40px', textAlign: 'left' }}>
                  {CheckboxQ7("Dumbbells")}
                  {CheckboxQ7("Barbells")}
                  {CheckboxQ7("Resistance Band")}
                  {CheckboxQ7("Rope")}
                  {CheckboxQ7("Kettlebell")}
                </Form.Group>
              </Form.Group>
            </Card.Body>
          </Card>
        </Container>
        
        <div className='d-flex justify-content-end me-2 mt-4'>
          <Button onClick={() => navigate('/assessment')}>Sumbit</Button>
        </div>
    
      </div>
    </div>
  )
}
