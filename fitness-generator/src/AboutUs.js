import React from 'react'
import {aboutUsText1, aboutUsText2, aboutUsText3, workoutText} from './HomeText.js'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

export default function AboutUs() {
  return (
    <>
      <div className='text-center'>
        <div style={{padding: 30 }}>
          <h1 className="mb-5"> Who Are We</h1>
          <Carousel className='m-auto' style={{maxWidth: '900px'}} variant='dark'>
            <Carousel.Item interval={360000}>
              <div style={{height: '450px', width: '950px', backgroundColor: '#F1F2F3'}}></div>
              <Carousel.Caption className="h-100">
                <h3 className="mt-5" style={{color:'black'}}>{aboutUsText1}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={360000}>
              <div style={{height: '450px', width: '950px', backgroundColor: '#F1F2F3'}}></div>
              <Carousel.Caption className="h-100">
              <h3 className="mt-5" style={{color:'black'}}>{aboutUsText2}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={360000}>
              <div style={{height: '450px', width: '950px', backgroundColor: '#F1F2F3'}}></div>
              <Carousel.Caption className="h-100">
                <h3 className="mt-5" style={{color:'black'}}>{aboutUsText3} <br/><br/><br/><br/> -Danil Bagin</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className='text-center'>
        <div style={{padding: 30 }}>
          <h1 className="mb-5">About The Workouts</h1>
          <Carousel className='m-auto' style={{maxWidth: '900px'}} indicators='false' controls='false'>
            <Carousel.Item interval={360000}>
              <div style={{height: '550px', width: '950px', backgroundColor: '#F1F2F3'}}></div>
              <Carousel.Caption className="h-100">
                <h3 className="mt-5" style={{color:'black'}}>{workoutText}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* <div className="d-flex w-100 pt-5 ps-5 pe-5 pb-5" style={{backgroundColor: '#F1F2F3', minHeight: '100vh'}}>
            <div style={{minWidth: '500px', borderRight: '2px solid black'}}>
                <h2 className="pe-5"> Who Are We</h2>
                <h4 className="pe-5 text-start" style={{}}>{aboutUsText1} <br/><br/> {aboutUsText2} <br/><br/> {aboutUsText3} <br/><br/> </h4>
            </div>

            <div>
                <h2 className="ps-4 pe-5"> About the workouts </h2>
                <h4 className="ps-4 pe-5" style={{}}>{workoutText} <br/><br/> </h4>
            </div>  
      </div>*/}

      <div className="w-100">
        <Footer />
      </div>
    
    </>
  )
}
