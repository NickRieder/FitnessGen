import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import SignUp, { signInBtnText, continueGuestBtnText } from './SignUp'
import SignIn from './SignIn'
import Questionnaire from './Questionnaire'
import Home from './Home'
import { AuthProvider, createUserWithEmail } from "./config/firebase";

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
test('Sign In button navigates to sign in page', () => { 
    render(<MockSignUp />)
    // screen.debug();
    expect(screen.getByRole('button', {name: signInBtnText})).toBeInTheDocument();
    const signInBtn = screen.getByRole('button', {name: signInBtnText});
    fireEvent.click(signInBtn);
    render(<MockSignIn/>)
    expect(screen.getByRole('button', {name: "Don't have an account? Sign up..."})).toBeInTheDocument();
});

test('Continue as Guest button navigates to questionnaire', () => { 
    render(<MockSignUp />)
    const continueAsGuestBtn = screen.getByRole('button', {name: continueGuestBtnText});
    fireEvent.click(continueAsGuestBtn);
    render(<MockQuestionnaire/>)
    expect(screen.getByRole('heading', {name: "ABOUT YOURSELF"})).toBeInTheDocument();
});
