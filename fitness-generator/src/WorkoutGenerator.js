import { FirebaseError } from "firebase/app";
import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, AuthContext, getWorkout } from './config/firebase';

let generated = false;

const WorkoutGenerator = () => {
    const { user } = useContext(AuthContext); 
    const [days, setDays] = useState("");
    const [intensity, setIntensity] = useState("");
    const [equipment, setEquipment] = useState("");
    const [leg, setLegs] = useState([]);
    const [chest, setChest] = useState([]);
    const [back, setBack] = useState([]);
    const [core, setCore] = useState([]);
    const [arms, setArms] = useState([]);
    let [generated, setGenerated] = useState(false);
    const body = [
        'Legs',
        'Back',
        'Chest',
        'Core',
        'Arms'
    ];
    const upperBody = [
        'Chest',
        'Arms',
        'Arms',
        'Arms',
        'Back',
        'Core'
    ];

    const lowerBody = [
        'Legs',
        'Legs',
        'Legs',
        'Legs',
        'Core'
    ]
    const num = [ "A", "B", "C", "D"];
    const navigate = useNavigate();

    
    //Console.log("Days = " + days);
    if (days == 3 && !generated) {
        for (let i = 0; i < body.length; i++) {
            getWorkout(body[i], intensity, equipment)
                .then((event) => {
                    console.log('Read succeeded!');
                    console.log(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                    switch (body[i]) {
                        case 'Legs':
                            setLegs(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                            console.log('Legs succeeded! ' + leg);
                            break;
                        case 'Back':
                            setBack(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                            console.log('Back succeeded! ' + back);
                            break;
                        case 'Chest':
                            setChest(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                            console.log("Chest event" + event);
                            console.log("chest: " + event[(Math.floor(Math.random() * Object.keys(event).length))] + '.');
                            console.log('Chest succeeded! ' + chest);
                            break;
                        case 'Core':
                            setCore(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                            console.log('Core succeeded! ' + core);
                            break;
                        case 'Arms':
                            setArms(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                            console.log('Arms succeeded! ' + arms);
                            break;
                        default:
                            console.log("Default activated somehow")
                            break;
                    }
                    //setLegs(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                })
        }
        setGenerated(true);
    } else if (days == 5 && !generated) {
        for (let i = 0; i < lowerBody.length; i++) {
            getWorkout(lowerBody[i], intensity, equipment)
                .then((event) => {
                    console.log('Read succeeded!');
                    console.log(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                    setLegs(arr => [...arr, event[(Math.floor(Math.random() * Object.keys(event).length))]]);
                })
        }
        for (let i = 0; i < upperBody.length; i++) {
            getWorkout(upperBody[i], intensity, equipment)
                .then((event) => {
                    console.log('Read succeeded!');
                    console.log(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                    switch (upperBody[i]) {
                        case 'Back':
                            setBack(arr => [...arr, event[(Math.floor(Math.random() * Object.keys(event).length))]]);
                            console.log('Back succeeded! ' + back);
                            break;
                        case 'Chest':
                            setChest(arr => [...arr, event[(Math.floor(Math.random() * Object.keys(event).length))]]);
                            console.log("chest: " + event[(Math.floor(Math.random() * Object.keys(event).length))] + '.');
                            console.log('Chest succeeded! ' + chest);
                            break;
                        case 'Core':
                            setCore(arr => [...arr, event[(Math.floor(Math.random() * Object.keys(event).length))]]);
                            console.log('Core succeeded! ' + core);
                            break;
                        case 'Arms':
                            setArms(arr => [...arr, event[(Math.floor(Math.random() * Object.keys(event).length))]]);
                            console.log('Arms succeeded! ' + arms);
                            break;
                        default:
                            console.log("Default activated somehow")
                            break;
                    }
                })
        }
        setGenerated(true);
    }
    

    //function workoutGetter()
    
    return (
        <>
        {/*
        
        1. 3 or 5

        2. Easy Medium Hard 

        3. Equipment Available - Body Weight, Body Weight + DB, Gym (Full equipment)

        */
        }

        <button onClick={() => getUserInfo(user)
                        .then((event) => {
                        console.log('Read succeeded!');
                        console.log(event);
                        setEquipment(event.Equipment);
                        setIntensity(event.Intensity);
                        setDays(event.Days);
                        })}>Fetch</button>
        
        <h2>Equipment: {equipment.Barbells}</h2>
        <h2>Days: {days}</h2>
            <h2>Intensity: {intensity}</h2>


            <button onClick={() => {
                for (let i = 0; i < body.length; i++) {
                    getWorkout(body[i], intensity, equipment)
                        .then((event) => {
                            console.log('Read succeeded!');
                            console.log(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                            switch (body[i]) {
                                case 'Legs':
                                    setLegs(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                                    console.log('Legs succeeded! ' + leg);
                                    break;
                                case 'Back':
                                    setBack(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                                    console.log('Back succeeded! ' + back);
                                    break;
                                case 'Chest':
                                    setChest(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                                    console.log("Chest event" + event);
                                    console.log("chest: " + event[(Math.floor(Math.random() * Object.keys(event).length))] + '.');
                                    console.log('Chest succeeded! ' + chest);
                                    break;
                                case 'Core':
                                    setCore(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                                    console.log('Core succeeded! ' + core);
                                    break;
                                case 'Arms':
                                    setArms(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                                    console.log('Arms succeeded! ' + arms);
                                    break;
                                default:
                                    console.log("Default activated somehow")
                                    break;
                            }
                            //setLegs(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                        })
                }
            }}>Get full body Workout</button>


        <button onClick={() => getWorkout(body[1], intensity, equipment)
                        .then((event) => {
                        console.log('Back succeeded!');
                        console.log(event[(Math.floor(Math.random() *  Object.keys(event).length))]);
                        setBack(event[(Math.floor(Math.random() *  Object.keys(event).length))])
                        })}>Get Back</button>

            <button onClick={() => getWorkout(body[2], intensity, equipment)
                .then((event) => {
                    console.log('Chest succeeded 2!');
                    console.log(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                    setChest(event[(Math.floor(Math.random() * Object.keys(event).length))])
                })}>Get Chest</button>

        <button onClick={() => getWorkout(body[3], intensity, equipment)
                        .then((event) => {
                        console.log('Core succeeded!');
                        console.log(event[(Math.floor(Math.random() *  Object.keys(event).length))]);
                        setCore(event[(Math.floor(Math.random() *  Object.keys(event).length))])
                        })}>Get Core</button>

        <h2>Legs: {leg}</h2>
            <h2>Back: {back}</h2>
            <h2>Chest: {chest}</h2>
            <h2>Arms: {arms}</h2>
        <h2>Core: {core}</h2>

                    

        </>

    )
}
export default WorkoutGenerator;