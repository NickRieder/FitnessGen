import { FirebaseError } from "firebase/app";
import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, AuthContext, getWorkout } from './config/firebase';

const WorkoutGenerator = () => {
    const { user } = useContext(AuthContext); 
    const [days, setDays] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [equipment, setEquipment] = useState("");
    const [leg, setLegs] = useState([]);
    const [chest, setChest] = useState([]);
    const [back, setBack] = useState([]);
    const [core, setCore] = useState([]);
    const [arms, setArms] = useState([]);
    const body = [
        'Legs',
        'Back',
        'Chest',
        'Core',
        'Arms'
    ]
    const num = [ "A", "B", "C", "D"];
    const navigate = useNavigate();
    
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
                        setDifficulty(event.Difficulty);
                        setDays(event.Days);
                        })}>Fetch</button>
        
        <h2>Equipment: {equipment}</h2>
        <h2>Days: {days}</h2>
        <h2>Difficulty: {difficulty}</h2>

        <button onClick={() => getWorkout(body[0], difficulty, equipment)
                        .then((event) => {
                        console.log('Read succeeded!');
                        console.log(event[(Math.floor(Math.random() *  Object.keys(event).length))]);
                        setLegs(event[(Math.floor(Math.random() *  Object.keys(event).length))])
                        })}>Get Legs</button>


        <button onClick={() => getWorkout(body[1], difficulty, equipment)
                        .then((event) => {
                        console.log('Back succeeded!');
                        console.log(event[(Math.floor(Math.random() *  Object.keys(event).length))]);
                        setBack(event[(Math.floor(Math.random() *  Object.keys(event).length))])
                        })}>Get Back</button>

        <button onClick={() => getWorkout(body[3], difficulty, equipment)
                        .then((event) => {
                        console.log('Core succeeded!');
                        console.log(event[(Math.floor(Math.random() *  Object.keys(event).length))]);
                        setCore(event[(Math.floor(Math.random() *  Object.keys(event).length))])
                        })}>Get Core</button>

        <h2>Legs: {leg}</h2>
        <h2>Back: {back}</h2>
        <h2>Core: {core}</h2>

                    

        </>

    )
}
export default WorkoutGenerator;