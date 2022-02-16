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
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
