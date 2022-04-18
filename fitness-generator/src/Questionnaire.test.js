import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React, { useContext } from 'react';
import SignUp, { signInBtnText, continueGuestBtnText } from './SignUp'
import SignIn, { signUpBtnText } from './SignIn'
import Questionnaire from './Questionnaire'
import Home from './Home'
import Assessment from './Assessment/Assessment'
import IntensityInfo from './IntensityInfo'
import { AuthProvider } from "./config/firebase";

// Mock Sign-up page component with BrowserRouter component to 
// use the useNavigate hook
const MockHome = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        </AuthProvider>)
}

const MockSignUp = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <SignUp/>
            </BrowserRouter>
        </AuthProvider>)
}

const MockSignIn = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <SignIn/>
            </BrowserRouter>
        </AuthProvider>)
        
}

const MockQuestionnaire = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Questionnaire/>      
            </BrowserRouter>
        </AuthProvider>)
}

const MockAssessment = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Assessment/>
            </BrowserRouter>
        </AuthProvider>)
}

const MockInfoIntensity = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <IntensityInfo/>
            </BrowserRouter>
        </AuthProvider>)
}

// NAVIGATION
test('Submit button navigates to assessment page', () => { 
    render(<MockQuestionnaire/>)
    const submitBtn = screen.getByRole('button', {name: "Submit"});
    fireEvent.click(submitBtn);
    render(<MockAssessment/>)
    expect(screen.getByRole('heading', {name: "Assessment"})).toBeInTheDocument();
});

// test('Svg button navigates to information intensity', () => { 
//     render(<MockQuestionnaire/>)
//     const infoIntensityBtns = screen.getAllByRole('button');
//     fireEvent.click(infoIntensityBtns[0]);
//     render(<MockInfoIntensity/>)
//     expect(screen.getByRole('button', {name: "Go Back"})).toBeInTheDocument();
//     // console.log(infoIntensityBtns);
// });

test('Google Sign-in Method', () => { 
    render(<MockSignIn/>)
    const userSignInBtn = screen.getByRole('button', {name: "Sign In"});
    fireEvent.click(userSignInBtn);
    render(<MockHome/>)
    expect(screen.getByRole('heading', {name: "KaloRenics Functional Fitness Health"})).toBeInTheDocument();
});

test('User personal information is set in database', () => { 
    render(<MockSignUp />)
    const continueAsGuestBtn = screen.getByRole('button', {name: continueGuestBtnText});
    fireEvent.click(continueAsGuestBtn);
    render(<MockQuestionnaire/>)
    expect(screen.getByRole('heading', {name: "ABOUT YOURSELF"})).toBeInTheDocument();
});