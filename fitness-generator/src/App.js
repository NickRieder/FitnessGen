import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NavBar from './NavBar';
import Questionnaire from './Questionnaire';
import IntensityInfo from './IntensityInfo';
import Assessment from './Assessment/Assessment';
import Settings from './Settings/Settings';
import ForgotPassword from './ForgotPassword';
import WorkoutsView from './WorkoutsView/WorkoutsView'
import AboutUs from './AboutUs';
import MobilityTest from './MobilityTest';
import Tutorials from './Tutorial';

function App() {
  return (
    <>
    {/* you can replace App with text-center and get rid of App.css */}
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="login" element={ <SignIn/> } />
            <Route path="questionnaire" element={<Questionnaire />} />
            <Route path="intensityinfo" element={<IntensityInfo />} />
            <Route path="assessment" element={ <Assessment/> } />
            <Route path="settings" element={ <Settings/> } />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="aboutus" element={ <AboutUs /> } />
            <Route path="workout-view" element={<WorkoutsView />} />
            <Route path="mobilitytest" element={<MobilityTest />} />
            <Route path="tutorials" element={<Tutorials />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
