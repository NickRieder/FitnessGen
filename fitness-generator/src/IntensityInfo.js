import React from 'react'
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function IntensityInfo() {
  const navigate = useNavigate();
  const { state } = useLocation();

//   console.log(state);

  return (
    <>
        <div>
          <p> {state.intensityVal} </p>
        </div>
        <Button onClick={() => navigate('/questionnaire')}>Go Back</Button>
    </>
  )
}
