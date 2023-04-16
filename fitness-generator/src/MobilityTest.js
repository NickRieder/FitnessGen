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
        navigate('/workout-view');
    }


    //Each different form represents a different test the users must take. The radio buttons are pass fail and default to fail if not performed.
    return (
        <div className="mobilitytest" style={{ paddingTop: '50px', backgroundColor:'#B7D1E2' }} >
            <Container>
                <h1 style={{paddingBottom:'2rem'}}>Mobility Test</h1>

				<form style={{paddingBottom:'3rem'}}>
                <table style={{marginLeft:'auto', marginRight:'auto'}}>
                    <tr>
                        <th>Mobility</th>
                        <th>Video</th>
                        <th>Pass</th>
                        <th>Fail</th>
                    </tr>

                    <tr id="Posture">
					{/* <form id="Posture"  style={{fontSize:'20px', textAlign:'left'}}>  */}
						<td for="posture">Posture</td>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/dCsgXitfdls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
						<td><input class="form-check-input" type="radio" name="posture" id="posture1"/></td>
						<td><input class="form-check-input" type="radio" name="posture" id="posture2"/></td>
					{/* </form> */}
                    </tr>

                    {/* <br></br> */}

                    <tr id="Overhead Squat">
                    {/* <form id="Overhead Squat"  style={{fontSize:'20px', textAlign:'left'}}>  */}
						<td for="overheadSquat">Overhead Squat</td>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/8uvhPH3b2qY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
						<td><input class="form-check-input" type="radio" name="overheadSquat" id="overheadSquat1"/></td>
						<td><input class="form-check-input" type="radio" name="overheadSquat" id="overheadSquat2"/></td>
					{/* </form> */}
                    </tr>

                    <tr id="Squat">
                    {/* <form id="Squat"  style={{fontSize:'20px', textAlign:'left'}}>  */}
                    <td for="squat">Squat</td>
                    <td><iframe width="560" height="315" src="https://www.youtube.com/embed/1jOlzkrLz_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    <td><input class="form-check-input" type="radio" name="squat" id="squat1"/></td>
                    <td><input class="form-check-input" type="radio" name="squat" id="squat2"/></td>
					{/* </form> */}
                    </tr>

                    {/* <br></br> */}

                    <tr id="Hip">
                    {/* <form id="Hip"  style={{fontSize:'20px', textAlign:'left'}}>  */}
                    <td for="hip">Hip</td>
                    <td><iframe width="560" height="315" src="https://www.youtube.com/embed/syai-30jRgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    <td><input class="form-check-input" type="radio" name="hip" id="hip1"/></td>
                    <td><input class="form-check-input" type="radio" name="hip" id="hip2"/></td>
					{/* </form> */}
                    </tr>

                    {/* <br></br> */}

                    <tr id="Ankle">
                    {/* <form id="Ankle"  style={{fontSize:'20px', textAlign:'left'}}>  */}
                    <td for="ankle">Ankle</td>
                    <td><iframe width="560" height="315" src="https://www.youtube.com/embed/U7woPNLUT3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    <td><input class="form-check-input" type="radio" name="ankle" id="ankle1"/></td>
                    <td><input class="form-check-input" type="radio" name="posture" id="ankl2"/></td>
					{/* </form> */}
                    </tr>

                    {/* <br></br> */}

                    <tr id="Windmill">
                    {/* <form id="Windmill"  style={{fontSize:'20px', textAlign:'left'}}>  */}
                    <td for="windmill">Windmill</td>
                    <td><iframe title="Embeds Page" className="embed-responsive-item" src="https://youtube.com/embed/shorts/BiGHWMY1Ya8?feature=share" allowfullscreen></iframe></td>
                    <td><input class="form-check-input" type="radio" name="windmill" id="windmill1"/></td>
                    <td><input class="form-check-input" type="radio" name="windmill" id="windmill2"/></td>
					{/* </form> */}
                    </tr>

                    {/* <br></br> */}

                    <tr id="Lumbar Spine">
                    {/* <form id="Lumbar Spine"  style={{fontSize:'20px', textAlign:'left'}}>  */}
                    <td for="lumbarSpine">Lumbar Spine</td>
                    <td><iframe width="560" height="315" src="https://www.youtube.com/embed/4GBjhAcwh90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    <td><input class="form-check-input" type="radio" name="lumbarSpine" id="lumbarSpine1"/></td>
                    <td><input class="form-check-input" type="radio" name="lumbarSpine" id="lumbarSpine2"/></td>
					{/* </form> */}
                    </tr>

                    {/* <br></br> */}

                    <tr id="Wall">
                    {/* <form id="Wall"  style={{fontSize:'20px', textAlign:'left'}}>  */}
                    <td for="wall">Wall</td>
                    <td><iframe width="560" height="315" src="https://www.youtube.com/embed/kbzYML05Vac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    <td><input class="form-check-input" type="radio" name="wall" id="wall1"/></td>
                    <td><input class="form-check-input" type="radio" name="wall" id="wall2"/></td>
					{/* </form> */}
                    </tr>

                    {/* <br></br> */}

                    <tr id="Shoulder">
                    {/* <form id="Shoulder"  style={{fontSize:'20px', textAlign:'left'}}>  */}
                    <td for="shoulder">Shoulder</td>
                    <td><iframe width="560" height="315" src="https://www.youtube.com/embed/FrOKZLkJSeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    <td><input class="form-check-input" type="radio" name="shoulder" id="shoulder1"/></td>
                    <td><input class="form-check-input" type="radio" name="shoulder" id="shoulder2"/></td>
					{/* </form> */}
                    </tr>

                    {/* <br></br> */}

                    <tr id="Scapula">
                    {/* <form   style={{fontSize:'20px', textAlign:'left'}}>  */}
                    <td for="scapula">Scapula</td>
                    <td><iframe width="560" height="315" src="https://www.youtube.com/embed/vY90UK6ZEOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
                    <td><input class="form-check-input" type="radio" name="scapula" id="scapula1"/></td>
                    <td><input class="form-check-input" type="radio" name="scapula" id="scapula2"/></td>
					{/* </form> */}
                    </tr>
				
                </table>
				
				</form>

                <div className='d-flex justify-content-end me-2 mt-4 mb-4'>
                    <Button onClick={() => submitMobilityTest()}>Generate Plan</Button>
                </div>
				
            </Container>
        </div>
    )
}
export default MobilityTest;