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
                      const legs = event;
                      let firstEx = Math.floor(Math.random() * Object.keys(event).length);
                      let secondEx = Math.floor(Math.random() * Object.keys(event).length);
                      let thirdEx = Math.floor(Math.random() * Object.keys(event).length);
                      const legArray = [event[firstEx], event[secondEx], event[thirdEx]];

                      setLegs(legArray);
                      //setLegs(legs)
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