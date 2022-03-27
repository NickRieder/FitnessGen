import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import SignUp, { signInBtnText, continueGuestBtnText } from './SignUp'
import SignIn, { signUpBtnText } from './SignIn'
import Questionnaire from './Questionnaire'
import Home from './Home'

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

// NAVIGATION
test('Get Started button navigates to questionnaire', () => { 
    render(<MockHome/>)
    const getStartedBtn = screen.getByRole('button', {name: "Get Started"});
    fireEvent.click(getStartedBtn);
    render(<MockSignUp/>)
    expect(screen.getByRole('heading', {name: "Sign Up"})).toBeInTheDocument();
});

test('Sign Up button navigates to sign up page', () => { 
    render(<MockHome/>)
    const signUpBtn = screen.getByRole('button', {name: "Sign Up"});
    fireEvent.click(signUpBtn);
    render(<MockSignUp/>)
    expect(screen.getByRole('heading', {name: "Sign Up"})).toBeInTheDocument();
});