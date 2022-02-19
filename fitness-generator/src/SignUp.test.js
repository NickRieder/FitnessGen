import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { alreadyAccSignIn } from "./SignUp";
import React from 'react';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Questionnaire from './Questionnaire'

// Mock Sign-up page component with BrowserRouter component to 
// use the useNavigate hook
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

// 1. Sign in btn exist
test('Sign In button on page', () => { 
    render(<MockSignUp/>)
    expect(screen.getByRole('button', {name: alreadyAccSignIn})).toBeInTheDocument();
});

// LEFT SIDE

// NAVIGATION
test('Sign In button navigate to sign in page', () => { 
    render(<MockSignUp/>)
    const signInBtn = screen.getByRole('button', {name: alreadyAccSignIn});
    fireEvent.click(signInBtn);
    render(<MockSignIn/>)
    expect(screen.getByRole('button', {name: "Don't have an account? Sign up..."})).toBeInTheDocument();
});

test('Sign In button navigate to questionnaire', () => { 
    render(<MockSignUp/>)
    const signInBtn = screen.getByRole('button', {name: 'OR Continue as Guest...'});
    fireEvent.click(signInBtn);
    render(<MockQuestionnaire/>)
    expect(screen.getByRole('heading', {name: "ABOUT YOURSELF"})).toBeInTheDocument();
    // screen.debug();
});

// RIGHT SIDE

// 