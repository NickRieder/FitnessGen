import React, { useEffect, useState, useContext, useRef, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { db, AuthContext, updateUserData } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useCookies } from 'react-cookie';

export default function Settings() {

	
	//user context
	const { user } = useContext(AuthContext); 
	// const [userData, setUserData] = userdata; 

	//cookies and data
	const [cookies, setCookies] = useCookies(['user'])
	const [firstName, setFirstName] = useState(() => cookies.firstName);
	const [lastName, setLastName] = useState(() => cookies.lastName); 
	const [displayName, setDisplayName] = useState(() => cookies.displayName);
	const [email, setEmail] = useState(() => cookies.email);
	// const userEmail =  (user ? user.email : "")

	//disable btn boolean
	const [disableChangesBtn, setDisableChangesBtn] = useState(true); 

	//refs
	const emailRef = useRef(null)
	const firstNameRef = useRef(null)
	const lastNameRef = useRef(null)
	const displayNameRef = useRef(null)



	
	
	const AccountForm = useCallback(() => {
		
		//undo button function to reset form
		function disableUndoChangesBtn() {
			// console.log(email)
			// console.log(emailRef.current.value)
			// setEmail(cookies.email)
			setEmail(emailRef.current.value)
			setDisableChangesBtn(true)
			// consoupdateUserDatale.log(email)
		}

		//apply changes button to send new info to DB
		function disableApplyChangesBtn() {
			try {
				if (user!==null) {
					updateUserData(user, emailRef.current.value, firstNameRef.current.value, lastNameRef.current.value, displayNameRef.current.value);
					setCookies('email', emailRef.current.value, {path: '/', sameSite: 'none', secure: true})
					setCookies('firstName', firstNameRef.current.value, {path: '/', sameSite: 'none', secure: true})
					setCookies('lastName', lastNameRef.current.value, {path: '/', sameSite: 'none', secure: true})
					setCookies('displayName', displayNameRef.current.value, {path: '/', sameSite: 'none', secure: true});
				} else {
					console.log('user is null')
				}
			} catch(e) {
				console.log(e)
			}
	
			setDisableChangesBtn(true)
		} 

    	return (                      
      		<Form>
				
      		{/* Email Address Form*/}
          		<Form.Group id="email">
              		<Form.Label className="d-flex justify-content-start">E-mail</Form.Label>
					<Form.Control 
					ref={emailRef}
					name="email"
					defaultValue={email || ""}
					onChange={event => setDisableChangesBtn(false)}
					type="text" 
					placeholder="Enter E-mail"/>
				</Form.Group>
				{/* <p>{email}</p> */}
			{/* Display Name Form*/}
				<Form.Group id="displayName">
              		<Form.Label className="d-flex justify-content-start">Display Name</Form.Label>
			  		<Form.Control 
						name="displayName"
						ref={displayNameRef}
						defaultValue={displayName || ""}
						onChange={event => setDisableChangesBtn(false)}
						type="text" 
						placeholder="Enter Display Name" 
						/>
          		</Form.Group>

      		{/* Firstname Form*/}
          		<Form.Group id="firstName">
              		<Form.Label className="d-flex justify-content-start">First Name</Form.Label>
			  		<Form.Control 
						name="firstname"
						ref={firstNameRef}
						defaultValue={firstName || ""}
						onChange={event => setDisableChangesBtn(false)}
						type="text" 
						placeholder="Enter First Name" 
						/>
          		</Form.Group>

      		{/* Lastname Form*/}
          	<Form.Group id="lastName">
				<Form.Label className="d-flex justify-content-start">Last Name</Form.Label>
				<Form.Control 
						name="lastname"
						ref={lastNameRef}
						defaultValue={lastName || ""}
						onChange={event => setDisableChangesBtn(false)}
						type="text" 
						placeholder="Enter Last Name" 
						/>
			</Form.Group>

     		{/* Age Form */}
			<Form.Group className="" id="Age">
				<Form.Label className="d-flex justify-content-start">Age</Form.Label>
				<Form.Control 
						name="age"
						defaultValue={""}
						onChange={event => setDisableChangesBtn(false)}
						type="text" 
						placeholder="Enter Age" 
						/>
			</Form.Group>

			{/* Gender Form */}
			<Form.Group className="" id="Gender">
				<Form.Label className="d-flex justify-content-start">Gender</Form.Label>
				<Form.Control 
						name="gender"
						value={""}
						onChange={event => setDisableChangesBtn(false)}
						type="text" 
						placeholder="Enter Gender" 
						/>
			</Form.Group>

         	<Form.Group >
				<Button className='mt-5' disabled={true} onClick={disableUndoChangesBtn}>Undo Changes</Button>
				<Button className='ms-5 mt-5' disabled={disableChangesBtn} onClick={disableApplyChangesBtn}>Apply Changes</Button>
			</Form.Group>
      </Form>)
  	}, [disableChangesBtn, email, firstName, lastName, displayName])

//   const PreferencesForm = () => {
//     return (      
//       <>
//         <h3 className='text-start mb-4'> Intensity </h3>
//         <Form>
//         {/* Email Address Form*/}
//             <Form.Group id="Legs">
//                 <Form.Label className="d-flex justify-content-start">Legs</Form.Label>
//             </Form.Group>

//         {/* Password Form*/}
//             <Form.Group id="Chest">
//                 <Form.Label className="d-flex justify-content-start">Chest</Form.Label>
//             </Form.Group>

//         {/* Password Confirmation Form */}
//             <Form.Group className="mb-5" id="Core">
//                 <Form.Label className="d-flex justify-content-start">Core</Form.Label>
//             </Form.Group>

//             <Form.Group>
//                 <h1>Test</h1>
//                 <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
//                 {/* <Button onClick={() => f()}>Sign Up</Button>    */}
//             </Form.Group>
//         </Form>
//       </>)
//   	}

	const PasswordForm = useCallback(() => {
    	return (                      
      		<Form>
      		{/* Email Address Form*/}
          		<Form.Group id="oldpassword">
              		<Form.Label className="d-flex justify-content-start">Enter Old Password</Form.Label>
			  		<Form.Control 
						name="oldpassword"
						value={""}
						onChange={event => setDisableChangesBtn(true)}
						type="password" 
						placeholder="Enter Old Password" 
						required/>
          		</Form.Group>

			{/* Email Address Form*/}
			<Form.Group id="newPassword">
              		<Form.Label className="d-flex justify-content-start">Enter New Password</Form.Label>
			  		<Form.Control 
						name="newPassword"
						value={""}
						onChange={event => setDisableChangesBtn(true)}
						type="password" 
						placeholder="Enter New Password" 
						required/>
          		</Form.Group>

			{/* Email Address Form*/}
			<Form.Group id="newPassword2">
              		<Form.Label className="d-flex justify-content-start">Re-enter Old Password</Form.Label>
			  		<Form.Control 
						name="newPassword2"
						value={""}
						onChange={event => setDisableChangesBtn(true)}
						type="password" 
						placeholder="Re-enter Old Password" 
						required/>
          		</Form.Group>

				<Form.Group>
					<Button className='mt-5' type='submit' disabled='false'>Undo Changes</Button>
              		<Button className='ms-5 mt-5' type='submit' disabled={disableChangesBtn}>Apply Changes</Button>  
          		</Form.Group>
      </Form>)
	}, [disableChangesBtn])

  const [settingsTag, setSettingTag] = useState(() => "Account");
  const [SettingsForm, setSettingForm] = useState(() => AccountForm);


  useEffect(() => {
    if (settingsTag === "Account") {
      setSettingForm(AccountForm);
    } else if (settingsTag === "Password") {
		setSettingForm(PasswordForm);
	} 
  }, [settingsTag, AccountForm, PasswordForm, firstName]);

  return (
    <>

      <Container style={{ paddingTop: "20px", maxWidth: "1300px"}}>
        <Card className="w-100" style={{ maxWidth: "1200px", boxSizing: "content-box"}}>
          <Card.Body className="p-0" style={{ }}>
            
            {/* Left side menu to change setting page */}
            <div className="d-inline-flex">
              <Container className="d-flex justify-content-start p-0">
                <Form>
                  <div> 
                    <h3> Settings </h3>
                  </div> 

                  <div>
                    <Button style={{ backgroundColor:"gray", borderColor:"gray", borderRadius: "0em", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => setSettingTag("Account")}> Account </Button>  
                  </div>

                  {/* <div>
                    <Button style={{ backgroundColor:"gray", borderColor:"gray", borderRadius: "0em", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => setSettingTag("Preferences")}> Preferences </Button>  
                  </div> */}

				  <div>
                    <Button style={{ backgroundColor:"gray", borderColor:"gray", borderRadius: "0em", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => setSettingTag("Password")}> Password </Button>  
                  </div>

                </Form>  
              </Container>
            </div>

            {/* right side menu to change setting page */}
            <div className="d-inline-flex w-100 h-100" style={{ maxWidth:"900px"}}>
              <Container className="d-inline-flex align-items-center p-0" style={{ minHeight:"150px"}}>
                <Card className="w-100" style={{ minHeight:"75vh"}}>
                  <Card.Body>
                    <h2 className="fst-italic d-flex justify-content-start mb-4"> {settingsTag} </h2>   
                    <div> {SettingsForm} </div>
                  </Card.Body>
                </Card>
              </Container>
            </div>
          
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
