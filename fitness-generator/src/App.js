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

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="login" element={ <SignIn/> } />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
