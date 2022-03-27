import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import SignUp, { signInBtnText, continueGuestBtnText } from './SignUp'
import SignIn from './SignIn'
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
test('Sign In button navigates to sign in page', () => { 
    render(<MockSignUp/>)
    const signInBtn = screen.getByRole('button', {name: signInBtnText});
    fireEvent.click(signInBtn);
    render(<MockSignIn/>)
    expect(screen.getByRole('button', {name: "Don't have an account? Sign up..."})).toBeInTheDocument();
});

test('Continue as Guest button navigates to questionnaire', () => { 
    render(<MockSignUp/>)
    const continueAsGuestBtn = screen.getByRole('button', {name: continueGuestBtnText});
    fireEvent.click(continueAsGuestBtn);
    render(<MockQuestionnaire/>)
    expect(screen.getByRole('heading', {name: "ABOUT YOURSELF"})).toBeInTheDocument();
});

// RIGHT SIDE

// NAVIGATION
test('Sign Up button navigates to home page', () => { 
    render(<MockSignUp/>)
    const userSignUpBtn = screen.getByRole('button', {name: "Sign Up"});
    fireEvent.click(userSignUpBtn);
    render(<MockHome/>)
    expect(screen.getByRole('heading', {name: "Welcome to the fitness generator app."})).toBeInTheDocument();
});
