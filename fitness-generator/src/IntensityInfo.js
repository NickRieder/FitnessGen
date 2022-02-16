import React from 'react'
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function IntensityInfo() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { intensityVal } = state;

//   console.log(state);

  return (
    <>
        <div> {state.intensityVal} </div>
        <Button onClick={() => navigate('/questionnaire')}>Sumbit</Button>
    </>
  )
}
