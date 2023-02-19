import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, AuthContext, getUserInfo, getWorkout } from './../config/firebase'
import ThreeDay from "./ThreeDay";
import FiveDay from "./FiveDay";
import { doc, getDoc } from "firebase/firestore"

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
       // setWorkoutPlan(result.WorkoutPlan);
        setDays(result.Days);
        setGenerated(true);
        
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

    const saveWorkoutData = async () => {
      if (days == 3) {

      } else if (days == 5) {

      } else {
        console.log("WorkoutsView.js/saveWorkoutData -> days was not 3 or 5");
      }
    }

    const loadWorkoutData = async () => {

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

                      //create array of exercises in order of days
                      const legArray = [event[firstLeg], event[secondLeg], event[thirdLeg]];
                      setLegs(legArray);

                      break;
                    case 'Back':

                      //pick three exercises from available exercises
                      let firstBack = Math.floor(Math.random() * Object.keys(event).length);
                      let secondBack = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdBack = Math.floor(Math.random() * Object.keys(event).length);

                      //create array of exercises in order of days
                      const backArray = [event[firstBack], event[secondBack], event[thirdBack]];
                      setBack(backArray);

                      break;
                    case 'Chest':

                      //pick three exercises from available exercises
                      let firstChest = Math.floor(Math.random() * Object.keys(event).length);
                      let secondChest = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdChest = Math.floor(Math.random() * Object.keys(event).length);

                      //create array of exercises in order of days
                      const chestArray = [event[firstChest], event[secondChest], event[thirdChest]];
                      setChest(chestArray);

                      break;
                    case 'Core':

                      //pick three exercises from available exercises
                      let firstCore = Math.floor(Math.random() * Object.keys(event).length);
                      let secondCore = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdCore = Math.floor(Math.random() * Object.keys(event).length);

                      //create array of exercises in order of days
                      const coreArray = [event[firstCore], event[secondCore], event[thirdCore]];
                      setCore(coreArray);

                      break;
                    case 'Arms':

                      //pick three exercises from available exercises
                      let firstArms = Math.floor(Math.random() * Object.keys(event).length);
                      let secondArms = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdArms = Math.floor(Math.random() * Object.keys(event).length);

                      //create array of exercises in order of days
                      const armsArray = [event[firstArms], event[secondArms], event[thirdArms]];
                      setArms(armsArray);

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

                    //create array of exercises in order of days
                    const legArray = [event[firstLeg], event[secondLeg]];
                    setLegs(legArray);

                    break;
                  case 'Hamstrings':

                    //pick two exercises from available exercises
                    let firstHamstring = Math.floor(Math.random() * Object.keys(event).length);
                    let secondHamstring = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const hamstringArray = [event[firstHamstring], event[secondHamstring]];
                    setHamstring(hamstringArray);

                    break;
                  case 'Glutes':

                    //pick two exercises from available exercises
                    let firstGlutes = Math.floor(Math.random() * Object.keys(event).length);
                    let secondGlutes = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const glutesArray = [event[firstGlutes], event[secondGlutes]];
                    setGlutes(glutesArray);

                    break;
                  case 'Calves':

                    //pick two exercises from available exercises
                    let firstCalves = Math.floor(Math.random() * Object.keys(event).length);
                    let secondCalves = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const calvesArray = [event[firstCalves], event[secondCalves]];
                    setCalves(calvesArray);

                    break;
                  case 'Core':

                    //pick three exercises from available exercises
                    let firstCore = Math.floor(Math.random() * Object.keys(event).length);
                    let secondCore = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const coreArray = [event[firstCore], event[secondCore]];
                    setCore(coreArray);

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

                    //create array of exercises in order of days
                    const backArray = [event[firstBack], event[secondBack], event[thirdBack]];
                    setBack(backArray);

                    break;
                  case 'Chest':

                    //pick three exercises from available exercises
                    let firstChest = Math.floor(Math.random() * Object.keys(event).length);
                    let secondChest = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdChest = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const chestArray = [event[firstChest], event[secondChest], event[thirdChest]];
                    setChest(chestArray);

                    break;
                  case 'Core':

                    //pick three exercises from available exercises
                    let firstCore = Math.floor(Math.random() * Object.keys(event).length);
                    let secondCore = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdCore = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const coreArray = [event[firstCore], event[secondCore], event[thirdCore]];
                    setCore(coreArray);

                    break;
                  case 'Biceps':

                    console.log("BICEPS");
                    console.log(event);
                    //pick three exercises from available exercises
                    let firstBiceps = Math.floor(Math.random() * Object.keys(event).length);
                    let secondBiceps = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdBiceps = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const bicepsArray = [event[firstBiceps], event[secondBiceps], event[thirdBiceps]];
                    setBicep(bicepsArray);

                    break;
                  case 'Triceps':

                    //pick three exercises from available exercises
                    let firstTriceps = Math.floor(Math.random() * Object.keys(event).length);
                    let secondTriceps = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdTriceps = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const tricepsArray = [event[firstTriceps], event[secondTriceps], event[thirdTriceps]];
                    setTricep(tricepsArray);

                    break;
                  case 'Shoulders':
                    //pick three exercises from available exercises
                    let firstShoulders = Math.floor(Math.random() * Object.keys(event).length);
                    let secondShoulders = Math.floor(Math.random() * Object.keys(event).length);
                    let thirdShoulders = Math.floor(Math.random() * Object.keys(event).length);

                    //create array of exercises in order of days
                    const shouldersArray = [event[firstShoulders], event[secondShoulders], event[thirdShoulders]];
                    setShoulder(shouldersArray);

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

        loadWorkoutData();

        /*if(generated) {
            if (days == 3 && !generatedWorkout) {
                for (let j = 0; j < 1; j++) {
                    for (let i = 0; i < body.length; i++) {
                        getWorkout(body[i], intensity, injuries, equipment, equipment[(Math.floor(Math.random() * Object.keys(equipment).length))])
                            .then((event) => {
                                console.log("EVENT")
                                console.log(event)
                               
        
                                switch (body[i]) {
                                    case 'Legs':
                                        const legs = event;
                                        console.log("LEGS TEST")
                                        setLegs(legs)
                                        break;
                                    case 'Back':
                                        const backs = event;
                                        setBack(backs)
                                        break;
                                    case 'Chest':
                                        setChest(event);          
                                        break;
                                    case 'Core':
                                        setCore(event);
                                        break;
                                    case 'Arms':
                                        setArms(event);
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
                        getWorkout(lowerBody[i], intensity, equipment[(Math.floor(Math.random() * Object.keys(equipment).length))])
                            .then((event) => {
                                switch (lowerBody[i]) {
                                    case 'Legs':
                                        setLegs(event);
                                        break;
                                    case 'Hamstrings':
                                        setHamstring(event);
                                        break;
                                    case 'Glutes':
                                        setGlutes(event);
                                        break;
                                    case 'Calves':
                                        setCalves(event);
                                        break;
                                    case 'Core':
                                        setCore(event);
                                        break;
                                    default:
                                        console.log("Default activated somehow")
                                        break;
                                }
                            })
                    }
                    for (let i = 0; i < upperBody.length; i++) {
                        getWorkout(upperBody[i], intensity, equipment[(Math.floor(Math.random() * Object.keys(equipment).length))])
                            .then((event) => {
                                switch (upperBody[i]) {
                                    case 'Back':
                                        setBack(event);
                                        break;
                                    case 'Chest':
                                        setChest(event);
                                        break;
                                    case 'Core':
                                        //setCore(arr => [...arr, event[(Math.floor(Math.random() * Object.keys(event).length))]]);
                                        setCore(event);
                                        break;
                                    case 'Biceps':
                                        setBicep(event)
                                        break;
                                    case 'Triceps':
                                        setTricep(event)
                                        break;
                                    case 'Shoulders':
                                        setShoulder(event)
                                        break;
                                    default:
                                        console.log("Default activated somehow")
                                        break;
                                }
                            })
                    }
                    setGeneratedWorkout(true);
            }  

        }*/
    }, [equipment, setEquipment, days, setDays, intensity, setIntensity]);


    return ( 
    <>
            <div className="workout_view">
                {isThreeDay ? <ThreeDay leg={leg} back={back} chest={chest} arms={arms} core={core} mobility={mobilityWorkout} /> : ""}
                {isFiveDay ? <FiveDay leg={leg} hamstrings={hamstrings} glutes={glutes} calves={calves} back={back} chest={chest} biceps={biceps} tricep={tricep} shoulder={shoulder} core={core} mobility={mobilityWorkout} /> : ""}
        </div>
    </>
    )
}
export default WorkoutsView;