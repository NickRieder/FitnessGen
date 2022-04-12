import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import background from "./images/fitness-rdl.jpg";
import { AuthContext, getUserName } from './config/firebase'
import { useCookies } from "react-cookie";
//fonts
import lemonMilkFont from './Res/Fonts/LEMONMILK-Regular.otf'
// import { collection, addDoc } from 'firebase/firestore'
import Footer from './Footer';


const Home = () => {
    const navigate = useNavigate();

    const [cookies] = useCookies(['user'])

    const { user } = useContext(AuthContext); 
    // const [userData, setUserData] = userdata;
    const [firstName, setFirstName] = useState(() => cookies.firstName);
    const [lastName, setLastName] = useState(() => cookies.lastName); 
    const [displayName, setDisplayName] = useState(() => cookies.firstName + cookies.lastName);
    const [loading, setLoading] = useState(() => (user==null));

    // console.log(userData)
    // useEffect(() => {
    //     setLoading(false);
    // }, [user])

    const GuestHome = () => {
        return (
            <div className='w-100' style={{height: '100vh'}}>
                <div className="" style={{height: '675px', background: `url(${background})`, }}>
                    {/*<Image fluid src='./fitness-rdl.jpg'></Image>*/}
                    
                    <div className="pt-5 text-start ps-5 ms-5">
                        <h1 className="pt-5 mt-5" style={{fontSize:'80px', color:'white', font: `url(${lemonMilkFont})`}}>KaloRenics Functional <br/> Fitness Health </h1>
                        <h4  style={{color:'white'}}><br/>We use your past workout history and current metrics <br/><br/> to develop the ideal workout plan for you!</h4>
                        <Button className="mt-4" size="lg" style={{backgroundColor:'#B7D1E2', borderColor:'#323334', color:'#323334', borderRadius:'24px'}} onClick={() => navigate('/sign-up')}>Get Started</Button>
                    
                    
                    {/* <h1>Who we are.</h1>
                    <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
                    <Button onClick={() => navigate('/sign-up')}>Sign Up</Button> */}
                    </div>
                    

                    
                </div>
                
                {/* bg-dark */}
                <Container className="d-flex align-items-center mt-5 pb-3 rounded-10 position-relative rounded-2" style={{height: '500px', maxWidth:'700', backgroundColor: '#7A8989'}}>
                    <div className=" text-start" style={{marginLeft: '150px'}}>
                        {/* <Container className="p-5 mb-4 bg-light rounded-3"> */}
                        <h2> About Us</h2>
                        
                        <div className="" style={{width: '500px'}}>
                            <h4 className="" style={{}}>This is the the about us section where we will talk about the about us for 
                            the page and we are quite excited to start with everyone 
                            how we got started making this ite because the about us 
                            page will tell people whoever visits this site in the 
                            future how the developers were to create aan about us page</h4>
                        </div>

                    </div>
                    {/* marginLeft: '150px' */}
                    <div className="w-100 text-center" style={{display: 'flex',  justifyContent:'end', alignItems:'end'}}> 
                        <div className="" style={{ marginRight:'150px',width: '250px', height: '250px', borderRadius:'50%', background: `url(${background})`}}> </div>
                    </div>
                </Container>

                    
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
                        <h1 className="pt-5 mt-5" style={{fontSize:'80px', color:'white', font: `url(${lemonMilkFont})`}}>Welcome, <br/> {`${firstName} ${lastName}`}</h1>
                        <h4  style={{color:'white'}}><br/>We use your past workout history and current metrics <br/><br/> to develop the ideal workout plan for you!</h4>
                        <Button className="mt-4" size="lg" style={{backgroundColor:'#B7D1E2', borderColor:'#323334', color:'#323334', borderRadius:'24px'}} onClick={() => navigate('/questionnaire')}>Start Questionnaire</Button>
                    
                    
                    {/* <h1>Who we are.</h1>
                    <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
                    <Button onClick={() => navigate('/sign-up')}>Sign Up</Button> */}
                    </div>
                    

                    
                </div>
                
                {/* bg-dark */}
                <Container className="d-flex align-items-center mt-5 pb-3 rounded-10 position-relative rounded-2" style={{height: '500px', maxWidth:'700', backgroundColor: '#7A8989'}}>
                    <div className=" text-start" style={{marginLeft: '150px'}}>
                        {/* <Container className="p-5 mb-4 bg-light rounded-3"> */}
                        <h2> About Us</h2>
                        
                        <div className="" style={{width: '500px'}}>
                            <h4 className="" style={{}}>This is the the about us section where we will talk about the about us for 
                            the page and we are quite excited to start with everyone 
                            how we got started making this ite because the about us 
                            page will tell people whoever visits this site in the 
                            future how the developers were to create aan about us page</h4>
                        </div>

                    </div>
                    {/* marginLeft: '150px' */}
                    <div className="w-100 text-center" style={{display: 'flex',  justifyContent:'end', alignItems:'end'}}> 
                        <div className="" style={{ marginRight:'150px',width: '250px', height: '250px', borderRadius:'50%', background: `url(${background})`}}> </div>
                    </div>
                </Container>

                    
                <div className="w-100">
                <Footer />

                </div>
            </div>
            )
    }

    const UserHome = () => { 
        // getUserNameData();

        return (
            <div className="mb-4" style={{height: '100vh', background: `url(${background})`, }}>
                {/*<Image fluid src='./fitness-rdl.jpg'></Image>*/}
                <div className="pt-5">
                    <Container className="p-5 mb-4 bg-dark rounded-3">
                    <h1 style={{color:'white'}}>Welcome {`${firstName} ${lastName}`}</h1>
                    <Button onClick={() => navigate('/questionnaire')}>Start Questionnaire</Button>
                    </Container>
                    <Container className="p-5 mb-4 bg-light rounded-3">
                    <h1>Who we are.</h1>
                    <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
                    <Button onClick={() => console.log(user)}>Assessment</Button>
                    <Button onClick={() => navigate('/workout-view')}>See Workouts</Button>
                    </Container>
                </div>
            </div>)
    }

    
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

    console.log(1);
    return ( 
    <>
        <HomePage/> 
    </>

    )
}
export default Home;