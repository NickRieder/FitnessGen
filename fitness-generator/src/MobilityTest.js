import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext, setUserMobilityData } from './config/firebase';

/* 
 * Mobility test for users that want to add mobility exercises to their daily workout.
 */
const MobilityTest = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    //Adds the failed workouts to an array and returns that array 
    function decideMobility(posture, overheadSquat, squat, hip, ankle, windmill, lumbarSpine, wall, shoulder, scapula) {
        var mobilityWorkouts = [];
        if (posture == false) {
            mobilityWorkouts.push("Posture");
        } if (overheadSquat == false) {
            mobilityWorkouts.push("Overhead Squat");
        } if (squat == false) {
            mobilityWorkouts.push("Squat");
        } if (hip == false) {
            mobilityWorkouts.push("Hip");
        } if (ankle == false) {
            mobilityWorkouts.push("Ankle");
        } if (windmill == false) {
            mobilityWorkouts.push("Windmill");
        } if (lumbarSpine == false) {
            mobilityWorkouts.push("Lumbar Spine");
        } if (wall == false) {
            mobilityWorkouts.push("Wall");
        } if (shoulder == false) {
            mobilityWorkouts.push("Shoulder");
        } if (scapula == false) {
            mobilityWorkouts.push("Scapula");
        }
        return mobilityWorkouts;
    }

    //determines the results input by the user then sends the workout list to the database
    function submitMobilityTest() {

        const posture = document.getElementById("posture1").checked;
        const overheadSquat = document.getElementById("overheadSquat1").checked;
        const squat = document.getElementById("squat1").checked;
        const hip = document.getElementById("hip1").checked;
        const ankle = document.getElementById("ankle1").checked;
        const windmill = document.getElementById("windmill1").checked;
        const lumbarSpine = document.getElementById("lumbarSpine1").checked;
        const wall = document.getElementById("wall1").checked;
        const shoulder = document.getElementById("shoulder1").checked;
        const scapula = document.getElementById("scapula1").checked;

        const workouts = decideMobility(posture, overheadSquat, squat, hip, ankle, windmill, lumbarSpine, wall, shoulder, scapula);

        setUserMobilityData(user, posture, overheadSquat, squat, hip, ankle, windmill, lumbarSpine, wall, shoulder, scapula, workouts);
        navigate('/');
    }


    //Each different form represents a different test the users must take. The radio buttons are pass fail and default to fail if not performed.
    return (
        <div>
            <Container>
                <h1>Mobility Test</h1>
                <p>Perform these quick tasks for a baseline understanding of your current mobility level. Click the hyperlink to see each tutorial video. Select pass if you meet all the requirements in the video.</p>
                <form id="Posture" style={{ textAlign: 'left' }}>
                    <a href="https://www.youtube.com/watch?v=dCsgXitfdls">Posture Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="posture" id="posture1"/>
                            <label class="form-check-label" for="posture1">
                                Pass
                            </label>
                     </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="posture" id="posture2"/>
                            <label class="form-check-label" for="posture2">
                                Fail
                            </label>
                    </div>
                    <br/>
                </form>

                <form id="Overhead Squat" style={{ textAlign: 'left' }}>
                    <a href="https://www.youtube.com/watch?v=8uvhPH3b2qY">Overhead Squat Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="overheadSquat" id="overheadSquat1" />
                        <label class="form-check-label" for="overheadSquat1">
                            Pass
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="overheadSquat" id="overheadSquat2" />
                        <label class="form-check-label" for="overheadSquat2">
                            Fail
                        </label>
                    </div>
                    <br />
                </form>

                <form id="Squat" style={{ textAlign: 'left' }}>
                    <a href="https://www.youtube.com/watch?v=1jOlzkrLz_w">Squat Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="squat" id="squat1" />
                        <label class="form-check-label" for="squat1">
                            Pass
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="squat" id="squat2" />
                        <label class="form-check-label" for="squat2">
                            Fail
                        </label>
                    </div>
                    <br/>
                </form>

                <form id="Hip" style={{ textAlign: 'left' }}>
                    <a href="https://www.youtube.com/watch?v=syai-30jRgE">Hip Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="hip" id="hip1" />
                        <label class="form-check-label" for="hip1">
                            Pass
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="hip" id="hip2" />
                        <label class="form-check-label" for="hip2">
                            Fail
                        </label>
                    </div>
                    <br />
                </form>

                <form id="Ankle" style={{ textAlign: 'left' }}>
                    <a href="https://www.youtube.com/watch?v=U7woPNLUT3Q">Ankle Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="ankle" id="ankle1" />
                        <label class="form-check-label" for="ankle1">
                            Pass
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="ankle" id="ankle2" />
                        <label class="form-check-label" for="ankle2">
                            Fail
                        </label>
                    </div>
                    <br />
                </form>

                <form id="Windmill" style={{ textAlign: 'left' }}>
                    <a href="https://youtube.com/shorts/BiGHWMY1Ya8?feature=share">Windmill Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="windmill" id="windmill1" />
                        <label class="form-check-label" for="windmill1">
                            Pass
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="windmill" id="windmill2" />
                        <label class="form-check-label" for="windmill2">
                            Fail
                        </label>
                    </div>
                    <br />
                </form>
                <form id="Lumbar Spine" style={{ textAlign: 'left' }}>
                    <a href="https://www.youtube.com/watch?v=4GBjhAcwh90">Lumbar Spine Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="lumbarSpine" id="lumbarSpine1" />
                        <label class="form-check-label" for="lumbarSpine1">
                            Pass
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="lumbarSpine" id="limbarSpine2" />
                        <label class="form-check-label" for="lumbarSpine2">
                            Fail
                        </label>
                    </div>
                    <br />
                </form>

                <form id="Wall" style={{ textAlign: 'left' }}>
                    <a href="https://www.youtube.com/watch?v=kbzYML05Vac">Wall Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="wall" id="wall1" />
                        <label class="form-check-label" for="wall1">
                            Pass
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="wall" id="wall2" />
                        <label class="form-check-label" for="wall2">
                            Fail
                        </label>
                    </div>
                    <br />
                </form>

                <form id="Shoulder" style={{ textAlign: 'left' }}>
                    <a href="https://www.youtube.com/watch?v=FrOKZLkJSeo">Shoulder Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="shoulder" id="shoulder1" />
                        <label class="form-check-label" for="shoulder1">
                            Pass
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="shoulder" id="shoulder2" />
                        <label class="form-check-label" for="shoulder2">
                            Fail
                        </label>
                    </div>
                    <br />
                </form>

                <form id="Scapula" style={{ textAlign: 'left' }}>
                    <a href="https://www.youtube.com/watch?v=vY90UK6ZEOg">Scapula Test</a>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="scapula" id="scapula1" />
                        <label class="form-check-label" for="scapula1">
                            Pass
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="scapula" id="scapula2" />
                        <label class="form-check-label" for="scapula2">
                            Fail
                        </label>
                    </div>
                    <br />
                </form>

                    

                
                <div className='d-flex justify-content-end me-2 mt-4'>
                    <Button onClick={() => submitMobilityTest()}>Complete</Button>
                </div>
            </Container>
        </div>
    )
}
export default MobilityTest;