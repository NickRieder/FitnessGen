import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import SignUp, { signInBtnText, continueGuestBtnText } from './SignUp'
import SignIn, { signUpBtnText } from './SignIn'
import Questionnaire from './Questionnaire'
import Home from './Home'
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

// USER PERSPECTIVE
test('User’s full name is displayed on Home Page', () => { 
    render(<MockHome/>)
    const signUpBtn = screen.getByRole('button', {name: "Sign Up"});
    fireEvent.click(signUpBtn);
    render(<MockSignUp/>)
    expect(screen.getByRole('heading', {name: "Sign Up"})).toBeInTheDocument();
});