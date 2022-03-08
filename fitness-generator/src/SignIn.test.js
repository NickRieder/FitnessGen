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

// LEFT SIDE

// NAVIGATION
test('Sign Up button navigates to sign up page', () => { 
    render(<MockSignIn/>)
    const signUpBtn = screen.getByRole('button', {name: signUpBtnText});
    fireEvent.click(signUpBtn);
    render(<MockSignUp/>)
    expect(screen.getByRole('button', {name: signInBtnText})).toBeInTheDocument();
});

test('Continue as Guest button navigates to questionnaire', () => { 
    render(<MockSignIn/>)
    const continueAsGuestBtn = screen.getByRole('button', {name: continueGuestBtnText});
    fireEvent.click(continueAsGuestBtn);
    render(<MockQuestionnaire/>)
    expect(screen.getByRole('heading', {name: "ABOUT YOURSELF"})).toBeInTheDocument();
    // screen.debug();
});

// RIGHT SIDE

// NAVIGATION
test('Sign Up button navigates to home page', () => { 
    render(<MockSignIn/>)
    const userSignInBtn = screen.getByRole('button', {name: "Sign In"});
    fireEvent.click(userSignInBtn);
    render(<MockHome/>)
    expect(screen.getByRole('heading', {name: "Welcome to the fitness generator app."})).toBeInTheDocument();
});