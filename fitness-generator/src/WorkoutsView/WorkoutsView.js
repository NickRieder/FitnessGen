import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, AuthContext, getUserInfo, getWorkout } from './../config/firebase'
import ThreeDay from "./ThreeDay";
import FiveDay from "./FiveDay";
import { doc, getDoc } from "firebase/firestore"
import { saveWorkoutInDatabase } from "../config/firebase/index";

const WorkoutsView = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); 
    const [isFiveDay, setIsFiveDay] = useState(false);
    const [isThreeDay, setIsThreeDay] = useState(false);
    const [days, setDays] = useState(null);
    const [equipment, setEquipment] = useState(null);
    const [intensity, setIntensity] = useState(null);
    const [injuries, setInjuries] = useState(null);
    const [leg, setLegs] = useState("");
    const [back, setBack] = useState("");
    const [chest, setChest] = useState("");
    const [arms, setArms] = useState("");
    const [core, setCore] = useState("");
    const [biceps, setBicep] = useState("");
    const [tricep, setTricep] = useState("");
    const [shoulder, setShoulder] = useState("");
    const [hamstrings, setHamstring] = useState("");
    const [glutes, setGlutes] = useState("");
    const [calves, setCalves] = useState("");
    const [generated, setGenerated] = useState(false);
    const [generatedWorkout, setGeneratedWorkout] = useState(false);
    const [mobilityWorkout, setMobilityWorkout] = useState("");
    const [hasMobility, setHasMobility] = useState(false);
    const [workoutPlan, setWorkoutPlan] = useState(null);
    const [hasDatabaseWorkout, setHasDatabaseWorkout] = useState(false);
    
    
    const body = [
        'Legs',
        'Back',
        'Chest',
        'Core',
        'Arms'
    ];

    const upperBody = [
        'Chest',
        'Biceps',
        'Triceps',
        'Shoulders',
        'Back',
        'Core'
    ];

    const lowerBody = [
        'Legs',
        'Hamstrings',
        'Glutes',
        'Calves',
        'Core'
    ];

    const fetchUserData = async () =>{
        
        const userInfoRef = doc(db, `/Users/${user.uid}/WorkoutData/Data`);
        const docSnap = await getDoc(userInfoRef);
        
        const result = docSnap.data();
        setEquipment(result.Equipment);
        setIntensity(result.Intensity);
        setInjuries(result.Injuries);
        setDays(result.Days);
        setGenerated(true);

        const userInfoRef2 = doc(db, `/Users/${user.uid}/WorkoutData/Workout`);
        const docSnap2 = await getDoc(userInfoRef2);
        const result2 = docSnap2.data();
        setWorkoutPlan(result2.WorkoutPlan);
    }

    useEffect(() => {
            fetchUserData();
            if(days == 5){
                setIsFiveDay(true);
            }
            if(days == 3){
                setIsThreeDay(true);
            }
    }, [generated, setGenerated, workoutPlan, setWorkoutPlan, user])

    const fetchUserMobilityData = async () => {

        const userInfoRef2 = doc(db, `/Users/${user.uid}/WorkoutData/MobilityData`);
        const docSnap2 = await getDoc(userInfoRef2);

        const result2 = docSnap2.data();
        console.log("Mobility result" + result2.Workouts);
        const mobilityResult = result2.Workouts;
        console.log(mobilityResult);
        setMobilityWorkout(mobilityResult);
        setHasMobility(true);
    }

    const loadWorkoutData = async () => {
      if (workoutPlan != null) { //if user has workout plan
        setHasDatabaseWorkout(true);
        setLegs(workoutPlan[0]);
        setBack(workoutPlan[1]);
        setChest(workoutPlan[2]);
        setCore(workoutPlan[3]);

        if (days == 3) { //if workout days is 3
          setArms(workoutPlan[4]);
        } else if (days == 5) { //if workout days is 5
          setHamstring(workoutPlan[4]);
          setGlutes(workoutPlan[5]);
          setCalves(workoutPlan[6]);
          setBicep(workoutPlan[7]);
          setTricep(workoutPlan[8]);
          setShoulder(workoutPlan[9]);
        } else {
          console.log("WorkoutsView.js/loadWorkoutData -> days was not 3 or 5");
        }
      }
    }

    const loadNewWorkout = async () => {

      if (generated) {
        if (days == 3 && !generatedWorkout) {
          for (let j = 0; j < 1; j++) {
            for (let i = 0; i < body.length; i++) {
              getWorkout(body[i], intensity, injuries, equipment, equipment[(Math.floor(Math.random() * Object.keys(equipment).length))])
                .then((event) => {
                  console.log("EVENT")
                  console.log(event)

                  switch (body[i]) {
                    case 'Legs':

                      //pick three exercises from available exercises
                      let firstLeg = Math.floor(Math.random() * Object.keys(event).length);
                      let secondLeg = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdLeg = Math.floor(Math.random() * Object.keys(event).length);

                      //create object of exercises in order of days
                      const legObject = { "0": event[firstLeg], "1": event[secondLeg], "2": event[thirdLeg] };
                      setLegs(legObject);

                      break;
                    case 'Back':

                      //pick three exercises from available exercises
                      let firstBack = Math.floor(Math.random() * Object.keys(event).length);
                      let secondBack = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdBack = Math.floor(Math.random() * Object.keys(event).length);

                      //create object of exercises in order of days
                      const backObject = { "0": event[firstBack], "1": event[secondBack], "2": event[thirdBack] };
                      setBack(backObject);

                      break;
                    case 'Chest':

                      //pick three exercises from available exercises
                      let firstChest = Math.floor(Math.random() * Object.keys(event).length);
                      let secondChest = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdChest = Math.floor(Math.random() * Object.keys(event).length);

                      //create object of exercises in order of days
                      const chestObject = { "0": event[firstChest], "1": event[secondChest], "2": event[thirdChest] };
                      setChest(chestObject);

                      break;
                    case 'Core':

                      //pick three exercises from available exercises
                      let firstCore = Math.floor(Math.random() * Object.keys(event).length);
                      let secondCore = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdCore = Math.floor(Math.random() * Object.keys(event).length);

                      //create object of exercises in order of days
                      const coreObject = { "0": event[firstCore], "1": event[secondCore], "2": event[thirdCore] };
                      setCore(coreObject);
                      
                      break;
                    case 'Arms':

                      //pick three exercises from available exercises
                      let firstArms = Math.floor(Math.random() * Object.keys(event).length);
                      let secondArms = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdArms = Math.floor(Math.random() * Object.keys(event).length);

                      //create object of exercises in order of days
                      const armsObject = { "0": event[firstArms], "1": event[secondArms], "2": event[thirdArms] };
                      setArms(armsObject);

                      break;
                    default:
                      console.log("Default activated somehow")
                      break;
                  }
                })
            }
          }
          setGeneratedWorkout(true)
        } else if (days == 5 && !generatedWorkout) {
          console.log("FIVE DAY")
          for (let i = 0; i < lowerBody.length; i++) {
            getWorkout(lowerBody[i], intensity, injuries, equipment, equipment[(Math.floor(Math.random() * Object.keys(equipment).length))])
              .then((event) => {
                switch (lowerBody[i]) {
                  case 'Legs':

                    //pick two exercises from available exercises
                    let firstLeg = Math.floor(Math.random() * Object.keys(event).length);
                    let secondLeg = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const legObject = { "0": event[firstLeg], "1": event[secondLeg]};
                    setLegs(legObject);;

                    break;
                  case 'Hamstrings':

                    //pick two exercises from available exercises
                    let firstHamstring = Math.floor(Math.random() * Object.keys(event).length);
                    let secondHamstring = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const hamstringObject = { "0": event[firstHamstring], "1": event[secondHamstring] };
                    setHamstring(hamstringObject);

                    break;
                  case 'Glutes':

                    //pick two exercises from available exercises
                    let firstGlutes = Math.floor(Math.random() * Object.keys(event).length);
                    let secondGlutes = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const glutesObject = { "0": event[firstGlutes], "1": event[secondGlutes] };
                    setGlutes(glutesObject);

                    break;
                  case 'Calves':

                    //pick two exercises from available exercises
                    let firstCalves = Math.floor(Math.random() * Object.keys(event).length);
                    let secondCalves = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const calvesObject = { "0": event[firstCalves], "1": event[secondCalves] }
                    setCalves(calvesObject);

                    break;
                  case 'Core':

                    //pick three exercises from available exercises
                    let firstCore = Math.floor(Math.random() * Object.keys(event).length);
                    let secondCore = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const coreObject = { "0": event[firstCore], "1": event[secondCore]};
                    setCore(coreObject);

                    break;
                  default:
                    console.log("Default activated somehow")
                    break;
                }
              })
          }
          for (let i = 0; i < upperBody.length; i++) {
            getWorkout(upperBody[i], intensity, injuries, equipment, equipment[(Math.floor(Math.random() * Object.keys(equipment).length))])
              .then((event) => {
                switch (upperBody[i]) {
                  case 'Back':

                    //pick three exercises from available exercises
                    let firstBack = Math.floor(Math.random() * Object.keys(event).length);
                    let secondBack = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdBack = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const backObject = { "0": event[firstBack], "1": event[secondBack], "2": event[thirdBack] };
                    setBack(backObject);

                    break;
                  case 'Chest':

                    //pick three exercises from available exercises
                    let firstChest = Math.floor(Math.random() * Object.keys(event).length);
                    let secondChest = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdChest = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const chestObject = { "0": event[firstChest], "1": event[secondChest], "2": event[thirdChest] };
                    setChest(chestObject);

                    break;
                  case 'Core':

                    //pick three exercises from available exercises
                    let firstCore = Math.floor(Math.random() * Object.keys(event).length);
                    let secondCore = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdCore = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const coreObject = { "0": event[firstCore], "1": event[secondCore], "2": event[thirdCore] };
                    setCore(coreObject);

                    break;
                  case 'Biceps':

                    console.log("BICEPS");
                    console.log(event);
                    //pick three exercises from available exercises
                    let firstBiceps = Math.floor(Math.random() * Object.keys(event).length);
                    let secondBiceps = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdBiceps = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const bicepsObject = { "0": event[firstBiceps], "1": event[secondBiceps], "2": event[thirdBiceps] };
                    setBicep(bicepsObject);

                    break;
                  case 'Triceps':

                    //pick three exercises from available exercises
                    let firstTriceps = Math.floor(Math.random() * Object.keys(event).length);
                    let secondTriceps = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdTriceps = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const tricepsObject = { "0": event[firstTriceps], "1": event[secondTriceps], "2": event[thirdTriceps] };
                    setTricep(tricepsObject);

                    break;
                  case 'Shoulders':
                    //pick three exercises from available exercises
                    let firstShoulders = Math.floor(Math.random() * Object.keys(event).length);
                    let secondShoulders = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdShoulders = Math.floor(Math.random() * Object.keys(event).length);

                    //create object of exercises in order of days
                    const shouldersObject = { "0": event[firstShoulders], "1": event[secondShoulders], "2": event[thirdShoulders] };
                    setShoulder(shouldersObject);

                    break;
                  default:
                    console.log("Default activated somehow")
                    break;
                }
              })
          }
          setGeneratedWorkout(true);
        }
      }
    }

    useEffect(() => {
        fetchUserMobilityData();
        console.log('I fire once for mobility');
        console.log("Mobility workouts: " + mobilityWorkout);
        if (mobilityWorkout.length != 0 && hasMobility) {
            console.log(mobilityWorkout);
            setHasMobility(true);
        }
        console.log("Mobility: " + hasMobility);
    }, [hasMobility, setHasMobility, user])
    
    useEffect (() => {

      console.log("HasWorkoutData: " + hasDatabaseWorkout);
      loadWorkoutData();
      if (!hasDatabaseWorkout) {
        loadNewWorkout();
      }

    }, [equipment, setEquipment, days, setDays, intensity, setIntensity]);


    return ( 
    <>
            <div className="workout_view">
          {isThreeDay ? <ThreeDay user={user} leg={leg} back={back} chest={chest} arms={arms} core={core} mobility={mobilityWorkout} /> : ""}
          {isFiveDay ? <FiveDay user={user}  leg={leg} hamstrings={hamstrings} glutes={glutes} calves={calves} back={back} chest={chest} biceps={biceps} tricep={tricep} shoulder={shoulder} core={core} mobility={mobilityWorkout} /> : ""}
        </div>
    </>
    )
}
export default WorkoutsView;