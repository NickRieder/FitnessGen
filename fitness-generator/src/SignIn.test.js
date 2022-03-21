import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import SignUp, { signInBtnText, continueGuestBtnText } from './SignUp';
import SignIn, { signUpBtnText } from './SignIn';
import Questionnaire from './Questionnaire';
import Home from './Home';
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

// LEFT SIDE

// NAVIGATION
test('Sign Up button navigates to sign up page', () => { 
    render(<MockSignIn/>)
    // screen.debug();
    const signUpBtn = screen.getByRole('button', {name: signUpBtnText});
    fireEvent.click(signUpBtn);
    render(<MockSignUp/>)
    expect(screen.getByRole('button', {name: signInBtnText})).toBeInTheDocument();
});

// RIGHT SIDE

// NAVIGATION
test('Google Sign-in Method', () => { 
    render(<MockSignIn/>)
    const userSignInBtn = screen.getByRole('button', {name: "Sign In"});
    fireEvent.click(userSignInBtn);
    render(<MockHome/>)
    expect(screen.getByRole('heading', {name: "Welcome to the fitness generator app."})).toBeInTheDocument();
});

test('Correct username and password', () => { 
    render(<MockSignIn/>)
    const userSignInBtn = screen.getByRole('button', {name: "Sign In"});
    fireEvent.click(userSignInBtn);
    render(<MockHome/>)
    expect(screen.getByRole('heading', {name: "Welcome to the fitness generator app."})).toBeInTheDocument();
});