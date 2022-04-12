import { FirebaseError } from "firebase/app";
import React, {useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, AuthContext, getWorkout, sendWorkoutDay } from './config/firebase';

let generated = false;

const WorkoutGenerator = () => {
    const { user } = useContext(AuthContext); 
    const [days, setDays] = useState("");
    const [intensity, setIntensity] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [equipment, setEquipment] = useState([]);
    const [leg, setLegs] = useState("");
    const [chest, setChest] = useState([]);
    const [back, setBack] = useState([]);
    const [core, setCore] = useState([]);
    const [arms, setArms] = useState([]);
    let [generated, setGenerated] = useState(false);
    const dailyWorkout = [];

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

    useEffect(() => {
            getUserInfo(user).then((event) => {
                setEquipment(event.Equipment);
                setDifficulty(event.Intensity);
                setDays(event.Days);
                console.log(equipment)
        })
    }, [equipment, setEquipment]);

    const getUserInfoAndWorkout = () => {
            generateWorkouts()
    }


    //Console.log("Days = " + days);
    function generateWorkouts() {
    if (days == 3 && !generated) {
        for (let j = 0; j < 1; j++) {
            for (let i = 0; i < body.length; i++) {
                getWorkout(body[i], difficulty, equipment[(Math.floor(Math.random() * Object.keys(equipment).length))])
                    .then((event) => {
                        //console.log(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                        //console.log('Event Read succeeded!');
                        //console.log(event[(Math.floor(Math.random() * Object.keys(event).length))]);

                        switch (body[i]) {
                            case 'Legs':
                                const legs = event[(Math.floor(Math.random() * Object.keys(event).length))];
                                console.log(legs[0])
                                dailyWorkout.push(legs[0])
                            
                                setLegs(legs)
                               // setLegs(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                                break;
                            case 'Back':
                                const backs = event[(Math.floor(Math.random() * Object.keys(event).length))];
                                //console.log(backs)
                                dailyWorkout.push(backs[0])
                                setBack(backs)
                                //setBack(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                                //console.log(back);
                                break;
                            case 'Chest':
                                setChest(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                                
                                /* console.log("Chest event" + event);
                                console.log("chest: " + event[(Math.floor(Math.random() * Object.keys(event).length))] + '.');
                                */
                                console.log('Chest succeeded! ' + chest);
                                break;
                            case 'Core':
                               // console.log('Core TEST! ');
                                setCore(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                               
                               // console.log('Core succeeded! ' + core);
                                break;
                            case 'Arms':
                                setArms(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                                
                               // console.log('Arms succeeded! ' + arms);
                                break;
                            default:
                               // console.log("Default activated somehow")
                                break;
                        }
                        //setLegs(event[(Math.floor(Math.random() * Object.keys(event).length))]);
                        
                    })
            }
        } 
        setGenerated(true)
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

       <button onClick={() => getUserInfoAndWorkout(user)
                        .then((event) => {
                        //console.log('Read succeeded!');
                        //console.log(event);
                        setEquipment(event.Equipment);
                        setIntensity(event.Intensity);
                        setDays(event.Days);
                        })}>Fetch</button>

        <button onClick={() => { generateWorkouts()
                                sendWorkoutDay(user, dailyWorkout);
                                }}>Generate Workout</button>
        
        <h2>Legs: {leg}</h2>
        <h2>Back: {back}</h2>
        <h2>Chest: {chest}</h2>
        <h2>Arms: {arms}</h2>
        <h2>Core: {core}</h2>

                    

        </>

    )
}
export default WorkoutGenerator;