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
import Assessment from './Assessment';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="login" element={ <SignIn/> } />
            <Route path="assessment" element={ <Assessment/> } />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
