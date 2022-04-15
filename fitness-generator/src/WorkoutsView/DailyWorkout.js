import React, { useState, useEffect, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import { doc, collection, getDocs } from "firebase/firestore"
import { db, AuthContext, getUserInfo, getWorkout, fetchVideos } from './../config/firebase'
import "./DailyWorkout.css"

const DailyWorkout = ({ leg, back, chest, arms, core }) => {
    /*const [legs, setLeg] = useState(null)
    const[vid, setVid] = useState(null)*/
    const [videos, setVideos] = useState(null);
    //const [loaded, setLoaded] = useState(true);
    
    
    /*const fetchVideo = async () =>{
        
        const querySnapshot = await getDocs(collection(db, "Videos"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            videosArray.push(doc.data())
        });*/
        //const docSnap = await getDocs(collection(db, "cities"));
        /*querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        }*/
        //const videosRef = collection(db, "Videos");
        /*const docRef = doc(db, "Videos");
        
        const docSnap = await getDoc(docRef);
        const result = docSnap.data();*/

        //console.log(videosRef.data())
        //setVideos(videosRef.data());

    /*const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());



         if(videosArray.length > 0){
            videosArray.map((video, name, url) => {
                console.log("INSIDE MAPPING")
                console.log(video)
                return (<h1>{url}</h1>)
            })
        }

    });*/
    /*const fetchVideo = async () => {
        
        const querySnapshot = await getDocs(collection(db, "Videos"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            videosArray.push(doc.data().name)
        });
        setVideos(videosArray)
    }*/



    useEffect(()=>{
            //setLeg(leg[(Math.floor(Math.random() * Object.keys(leg).length))])
            fetchVideos()
                .then((event) => {
                    console.log("EVENT")
                    console.log(event)
                    setVideos(event[0].url);
                    /*for (let i = 0; i < event.length; i++) {  
                        //if(leg[(Math.floor(Math.random() * Object.keys(leg).length))] == event[i].name){
                            setVideos(event[0].url);
                       // }
                    }*/
                })
            //setVideos(videosArray);
            //console.log(videos)
    }, [videos, setVideos])


    return (      
        <div className="DailyWorkout" style={{color: "black"}}>
            <Container className="Container">
            <Row className="Header">
                <Col>Body Part</Col>
                <Col>Excercise</Col>
                <Col>Sets</Col>
                <Col>Reps</Col>
                <Col>Tutorial</Col>
            </Row>
            {/* Legs Workout */}
            <div className="Content">
                <div className="Row">
                    <Row>
                        <Col className="Col">Legs</Col>
                        <Col className="Col">
                            {
                                leg[(Math.floor(Math.random() * Object.keys(leg).length))]
                            }
                        </Col>
                        <Col className="Col">3</Col>
                        <Col className="Col">10</Col>
                        <Col className="Col">
                        {videos
                            /*videos && videos.map(value => {
                                console.log("INSIDE MAPPING")
                                console.log(value)
                                return (
                                    <>
                                    <h1>
                                        {value}
                                    </h1>
                                </>
                                )
                            })*/
                        }   
                        </Col>
                    </Row>
                </div>
                {/* Back Workout */}
                <div className="Row">
                    <Row>
                        <Col>Back</Col>
                        <Col>{back[(Math.floor(Math.random() * Object.keys(back).length))]}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
                {/* Chest Workout */}
                <div className="Row">
                    <Row>
                        <Col>Chest</Col>
                        <Col>{chest[(Math.floor(Math.random() * Object.keys(chest).length))]}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
                {/* Arms Workout */}
                <div className="Row">
                    <Row>
                        <Col>Arms</Col>
                        <Col>{arms[(Math.floor(Math.random() * Object.keys(arms).length))]}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>{"HELLO"}</Col>
                    </Row>
                </div>
                {/* Core Workout */}
                <div className="Row">
                    <Row>
                        <Col>Core</Col>
                        <Col>{core[(Math.floor(Math.random() * Object.keys(core).length))]}</Col>
                        <Col>3</Col>
                        <Col>10</Col>
                        <Col>Video</Col>
                    </Row>
                </div>
            </div>
            </Container>
        </div>
        )
}

export default DailyWorkout;