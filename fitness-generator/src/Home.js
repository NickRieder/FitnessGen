import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import background from "./images/fitness-rdl.jpg";
import { AuthContext } from './config/firebase'
import { useCookies } from "react-cookie";
//fonts, text
import lemonMilkFont from './Res/Fonts/LEMONMILK-Regular.otf'
import {mockMissionStatementText1, mockMissionStatementText2, mockMissionStatementText3, quote1, quote2, shortWorkoutText} from './HomeText.js'

// import { collection, addDoc } from 'firebase/firestore'
import Footer from './Footer';
//animation
import { useSpring, animated, config } from 'react-spring'



const Home = () => {
    const navigate = useNavigate();

    const [cookies] = useCookies(['user'])

    const { user } = useContext(AuthContext); 
    // const [userData, setUserData] = userdata;
    const [firstName] = useState(() => cookies.firstName);
    const [lastName] = useState(() => cookies.lastName); 
    // const [displayName] = useState(() => cookies.firstName + cookies.lastName);
    const [loading, setLoading] = useState(() => (user==null));

    // console.log(userData)
    // useEffect(() => {
    //     setLoading(false);
    // }, [user])

    const [flip, set] = useState(false)
    const props1 = useSpring({ 
        to: { opacity: 0.5, color:'white', textSize:'50px' }, 
        from: { opacity: 1, color:'white', textSize:'50px' }, 
        reset: true,
        // reverse: flip,
        delay: 500,
        config: {duration: 15000},
        onRest: () => set(!flip),
    })

    const props2 = useSpring({ 
        to: { opacity: 0.5, color:'white', textSize:'50px' }, 
        from: { opacity: 1, color:'white', textSize:'50px' }, 
        reset: true,
        // reverse: flip,
        delay: 500,
        config: {duration: 15000},
        onRest: () => set(!flip),
    })


    const GuestHome = () => {
        return (
            <div className='w-100' style={{height: '100vh'}}>
                <div className="" style={{height: '675px', background: `url(${background})`, }}>
                    {/*<Image fluid src='./fitness-rdl.jpg'></Image>*/}
                    
                    <div className="pt-5 text-start ps-5 ms-5">
                        <h1 className="text-start pt-5 mt-5" style={{fontSize:'80px', color:'white', font: `url(${lemonMilkFont})`}}>KaloRenics Functional <br/> Fitness Health </h1>
                        {/* Want to know what it feels like to have your own free personal trainer?  */}
                        {/* <h4  style={{color:'white'}}><br/>We use your past workout history and current metrics <br/><br/> to develop the ideal workout plan for you!</h4> */}
                        <div>
                            {flip ? <animated.h4 style={props1}><br/>Want to know what it feels like <br/><br/> to have your own free personal trainer?</animated.h4>
                            : 
                            <animated.h4 style={props2}><br/>We use your past workout history and current metrics <br/><br/> to develop the ideal workout plan for you!</animated.h4>
                            } 
                        </div>
                        <Button className="mt-4" size="lg" style={{backgroundColor:'#B7D1E2', borderColor:'#323334', color:'#323334', borderRadius:'24px'}} onClick={() => navigate('/sign-up')}>Get Started</Button>
                    
                    
                    {/* <h1>Who we are.</h1>
                    <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
                    <Button onClick={() => navigate('/sign-up')}>Sign Up</Button> */}
                    </div>
                </div>

                <div className="w-100 pt-5 ps-5 pe-5" style={{backgroundColor: '#F1F2F3'}}>
                    <div className="w-75 m-auto pb-3" style={{borderStyle: ''}}>
                        <h1 className="text-center pt-5 ps-4 pe-5 pb-2 fw-bold"> Mission Statement </h1>
                        <h2 className="text-center ps-4 pe-5 lh-base" style={{maxWidth: '1050px'}}> {mockMissionStatementText2} <br/><br/> </h2>                    
                    </div>
                </div>

                <div style={{backgroundColor: '#F1F2F3'}}>
                    <Container className="d-flex align-items-center pt-3 pb-3 rounded-10 position-relative rounded-2" style={{minHeight: '500px', maxWidth:'700', backgroundColor: '#7A8989'}}>
                            <div className="h-100" style={{marginLeft: '100px', maxWidth: '600px'}}>
                                {/* <Container className="p-5 mb-4 bg-light rounded-3"> */}
                                <div className="pt-5 position absolute" style={{width: ''}}>
                                    <h2 className=''>About Our Workouts</h2>
                                </div>

                                <div className="text-end pt-4" style={{minHeight: '350px', wordWrap: 'break-word', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                    <h3 className="text-start" style={{}}> {shortWorkoutText} </h3>
                                    <Button className="mt-3" size="lg" style={{backgroundColor:'#B7D1E2', borderColor:'#323334', color:'#323334', borderRadius:'24px'}} onClick={() => navigate('/aboutus')}>Learn More</Button>
                                </div>

                            </div>
                            {/* marginLeft: '150px' */}
                            <div className="w-100 text-center me-5 pe-5" style={{display: 'flex',  justifyContent:'end', alignItems:'end'}}> 
                                <div className="me-5" style={{width: '350px', height: '350px', borderRadius:'50%', background: `url(${background})`}}> </div>
                            </div>
                    </Container>

                </div>

                <div className='pt-5 pb-3' style={{backgroundColor: '#F1F2F3'}}>
                    <div className="w-75 m-auto"  >
                        <div className='text-center' style={{minHeight: '30vh'}}> 
                            <h2 className="ps-5 pe-5 fst-italic"><br/>{quote1} </h2>
                            <h2 className="text-end pe-5"> {quote2}</h2>
                        </div>
                    </div>
                </div>

                    
                <div className="w-100">
                    <Footer />
                </div>
            </div>
            )
    }

    const MockUserHome = () => {
        return (
            <div className='w-100' style={{height: '100vh'}}>
                <div className="" style={{height: '675px', background: `url(${background})`, }}>
                    {/*<Image fluid src='./fitness-rdl.jpg'></Image>*/}
                    
                    <div className="pt-5 text-start ps-5 ms-5">
                        <h1 className="text-start pt-5 mt-5" style={{fontSize:'80px', color:'white', font: `url(${lemonMilkFont})`}}>Welcome, <br/> {`${firstName} ${lastName}`}</h1>
                        {/* Want to know what it feels like to have your own free personal trainer?  */}
                        {/* <h4  style={{color:'white'}}><br/>We use your past workout history and current metrics <br/><br/> to develop the ideal workout plan for you!</h4> */}
                        <div>
                            {flip ? <animated.h4 style={props1}><br/>Want to know what it feels like <br/><br/> to have your own free personal trainer?</animated.h4>
                            : 
                            <animated.h4 style={props2}><br/>We use your past workout history and current metrics <br/><br/> to develop the ideal workout plan for you!</animated.h4>
                            } 
                        </div>
                        <Button className="mt-4" size="lg" style={{backgroundColor:'#B7D1E2', borderColor:'#323334', color:'#323334', borderRadius:'24px'}} onClick={() => navigate('/sign-up')}>Get Started</Button>
                    
                    
                    {/* <h1>Who we are.</h1>
                    <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
                    <Button onClick={() => navigate('/sign-up')}>Sign Up</Button> */}
                    </div>
                </div>

                <div className="w-100 pt-5 ps-5 pe-5" style={{backgroundColor: '#F1F2F3'}}>
                    <div className="w-75 m-auto pb-3" style={{borderStyle: ''}}>
                        <h1 className="text-center pt-5 ps-4 pe-5 pb-2 fw-bold"> Mission Statement </h1>
                        <h2 className="text-center ps-4 pe-5 lh-base" style={{maxWidth: '1050px'}}> {mockMissionStatementText2} <br/><br/> </h2>                    
                    </div>
                </div>

                <div style={{backgroundColor: '#F1F2F3'}}>
                    <Container className="d-flex align-items-center pt-3 pb-3 rounded-10 position-relative rounded-2" style={{minHeight: '500px', maxWidth:'700', backgroundColor: '#7A8989'}}>
                            <div className="h-100" style={{marginLeft: '100px', maxWidth: '600px'}}>
                                {/* <Container className="p-5 mb-4 bg-light rounded-3"> */}
                                <div className="pt-5 position absolute" style={{width: ''}}>
                                    <h2 className=''>About Our Workouts</h2>
                                </div>

                                <div className="text-end pt-4" style={{minHeight: '350px', wordWrap: 'break-word', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                    <h3 className="text-start" style={{}}> {shortWorkoutText} </h3>
                                    <Button className="mt-3" size="lg" style={{backgroundColor:'#B7D1E2', borderColor:'#323334', color:'#323334', borderRadius:'24px'}} onClick={() => navigate('/aboutus')}>Learn More</Button>
                                </div>

                            </div>
                            {/* marginLeft: '150px' */}
                            <div className="w-100 text-center me-5 pe-5" style={{display: 'flex',  justifyContent:'end', alignItems:'end'}}> 
                                <div className="me-5" style={{width: '350px', height: '350px', borderRadius:'50%', background: `url(${background})`}}> </div>
                            </div>
                    </Container>

                </div>

                <div className='pt-5 pb-3' style={{backgroundColor: '#F1F2F3'}}>
                    <div className="w-75 m-auto"  >
                        <div className='text-center' style={{minHeight: '30vh'}}> 
                            <h2 className="ps-5 pe-5 fst-italic"><br/>{quote1} </h2>
                            <h2 className="text-end pe-5"> {quote2}</h2>
                        </div>
                    </div>
                </div>

                    
                <div className="w-100">
                    <Footer />
                </div>
            </div>
            )
    }

    // const UserHome = () => { 
    //     // getUserNameData();

    //     return (
    //         <div className="mb-4" style={{height: '100vh', background: `url(${background})`, }}>
    //             {/*<Image fluid src='./fitness-rdl.jpg'></Image>*/}
    //             <div className="pt-5">
    //                 <Container className="p-5 mb-4 bg-dark rounded-3">
    //                 <h1 style={{color:'white'}}>Welcome {`${firstName} ${lastName}`}</h1>
    //                 <Button onClick={() => navigate('/questionnaire')}>Start Questionnaire</Button>
    //                 </Container>
    //                 <Container className="p-5 mb-4 bg-light rounded-3">
    //                 <h1>Who we are.</h1>
    //                 <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
    //                 <Button onClick={() => console.log(user)}>Assessment</Button>
    //                 <Button onClick={() => navigate('/workout-view')}>See Workouts</Button>
    //                 </Container>
    //             </div>
    //         </div>)
    // }

    
    const HomePage = () => {
        if (loading) {
            setLoading(() => user!=null)
            return (<div> Loading... </div>)
        } else {
            if(user) {
                return <MockUserHome/>
            } else {
                return <GuestHome />
            }
        }
    }

    // useEffect(() => {
    //     HomePage()
    //     return () => {
    //         HomePage()
    //     };
    // }, [user]);

    console.log(1);
    return ( 
    <>
        <HomePage/> 
    </>

    )
}
export default Home;