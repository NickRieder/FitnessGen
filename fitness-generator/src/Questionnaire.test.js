import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import SignUp, { signInBtnText, continueGuestBtnText } from './SignUp'
import SignIn, { signUpBtnText } from './SignIn'
import Questionnaire from './Questionnaire'
import Home from './Home'
import Assessment from './Assessment/Assessment'
import IntensityInfo from './IntensityInfo'

// Mock Sign-up page component with BrowserRouter component to 
// use the useNavigate hook
const MockHome = () => {
    return (
        <BrowserRouter>
            <Home/>
        </BrowserRouter>)
}

const MockSignUp = () => {
    return (
        <BrowserRouter>
            <SignUp/>
        </BrowserRouter>)
}

const MockSignIn = () => {
    return (
        <BrowserRouter>
            <SignIn/>
        </BrowserRouter>)
}

const MockQuestionnaire = () => {
    return (
        <BrowserRouter>
            <Questionnaire/>      
        </BrowserRouter>)
}

const MockAssessment = () => {
    return (
        <BrowserRouter>
            <Assessment/>      
        </BrowserRouter>)
}

const MockInfoIntensity = () => {
    return (
        <BrowserRouter>
            <IntensityInfo/>      
        </BrowserRouter>)
}

// NAVIGATION
test('Submit button navigates to assessment page', () => { 
    render(<MockQuestionnaire/>)
    const submitBtn = screen.getByRole('button', {name: "Submit"});
    fireEvent.click(submitBtn);
    render(<MockAssessment/>)
    expect(screen.getByRole('heading', {name: "Assessment"})).toBeInTheDocument();
});

test('Svg button navigates to information intensity', () => { 
    render(<MockQuestionnaire/>)
    const infoIntensityBtns = screen.getAllByRole('button');
    fireEvent.click(infoIntensityBtns[0]);
    render(<MockInfoIntensity/>)
    expect(screen.getByRole('button', {name: "Go Back"})).toBeInTheDocument();
    // console.log(infoIntensityBtns);
});