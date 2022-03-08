import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { render } from 'react-dom';

export default function Settings() {

  const AccountForm = () => {
    return (                      
      <Form>
      {/* Email Address Form*/}
          <Form.Group id="firstName">
              <Form.Label className="d-flex justify-content-start">First Name</Form.Label>
          </Form.Group>

      {/* Password Form*/}
          <Form.Group id="lastName">
              <Form.Label className="d-flex justify-content-start">Last Name</Form.Label>
          </Form.Group>

      {/* Password Confirmation Form */}
          <Form.Group className="" id="Age">
              <Form.Label className="d-flex justify-content-start">Age</Form.Label>
          </Form.Group>
      </Form>)
  }

  const PreferencesForm = () => {
    return (      
      <>
        <h3 className='text-start mb-4'> Intensity </h3>
        <Form>
        {/* Email Address Form*/}
            <Form.Group id="Legs">
                <Form.Label className="d-flex justify-content-start">Legs</Form.Label>
            </Form.Group>

        {/* Password Form*/}
            <Form.Group id="Chest">
                <Form.Label className="d-flex justify-content-start">Chest</Form.Label>
            </Form.Group>

        {/* Password Confirmation Form */}
            <Form.Group className="mb-5" id="Core">
                <Form.Label className="d-flex justify-content-start">Core</Form.Label>
            </Form.Group>
        </Form>
      </>)
  }

  const [settingsTag, setSettingTag] = useState(() => "Account");
  const [SettingsForm, setSettingForm] = useState(() => AccountForm);


  useEffect(() => {
    if (settingsTag === "Account") {
      setSettingForm(AccountForm);
    } else if (settingsTag === "Preferences") {
      setSettingForm(PreferencesForm);
    } 
  }, [settingsTag]);

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

                  <div>
                    <Button style={{ backgroundColor:"gray", borderColor:"gray", borderRadius: "0em", minWidth: "300px", outline: "none", boxShadow: "none" }} onClick={() => setSettingTag("Preferences")}> Preferences </Button>  
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
