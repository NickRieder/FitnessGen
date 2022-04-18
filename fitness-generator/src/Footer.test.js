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

//USER PERSPECTIVE
test('The Footer is at bottom of all pages', () => { 
    render(<MockHome/>)
    const getStartedBtn = screen.getByRole('button', {name: "Get Started"});
    fireEvent.click(getStartedBtn);
    render(<MockSignUp/>)
    expect(screen.getByRole('heading', {name: "Sign Up"})).toBeInTheDocument();
});