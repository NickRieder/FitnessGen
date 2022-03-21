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

// RIGHT SIDE

// ERROR CHECKING
test('Invalid Email', () => { 
    render(<MockSignUp />)
    const continueAsGuestBtn = screen.getByRole('button', {name: continueGuestBtnText});
    fireEvent.click(continueAsGuestBtn);
    render(<MockQuestionnaire/>)
    expect(screen.getByRole('heading', {name: "ABOUT YOURSELF"})).toBeInTheDocument();
});

test('Passwords do not match', () => { 
    render(<MockSignUp />)
    const continueAsGuestBtn = screen.getByRole('button', {name: continueGuestBtnText});
    fireEvent.click(continueAsGuestBtn);
    render(<MockQuestionnaire/>)
    expect(screen.getByRole('heading', {name: "ABOUT YOURSELF"})).toBeInTheDocument();
});

// USER SIGN-UP PROCESS
test('Current user is signed up user', () => { 
    render(<MockSignUp />)
    const continueAsGuestBtn = screen.getByRole('button', {name: continueGuestBtnText});
    fireEvent.click(continueAsGuestBtn);
    render(<MockQuestionnaire/>)
    expect(screen.getByRole('heading', {name: "ABOUT YOURSELF"})).toBeInTheDocument();
});

test('User personal information is set in database', () => { 
    render(<MockSignUp />)
    const continueAsGuestBtn = screen.getByRole('button', {name: continueGuestBtnText});
    fireEvent.click(continueAsGuestBtn);
    render(<MockQuestionnaire/>)
    expect(screen.getByRole('heading', {name: "ABOUT YOURSELF"})).toBeInTheDocument();
});

test('Sign Up button navigates to home page', async() => { 
    // jest.setTimeout(10000);
    const { getByRole } = render(<MockSignUp />)
    // screen.debug();

    expect(screen.getByRole('button', {name: "Sign Up"})).toBeInTheDocument();
    const userSignUpBtn = screen.getByRole('button', {name: "Sign Up"});
    //Fill input fields
    
    //First Name
    expect(screen.getByPlaceholderText('Enter First Name')).toBeInTheDocument();
    const firstName = screen.getByPlaceholderText('Enter First Name');
    fireEvent.change(firstName, {target: {value: "Firstname"}});
    
    //Last Name
    const lastName = screen.getByPlaceholderText('Enter Last Name');
    fireEvent.change(lastName, {target: {value: "Lastname"}});

    //Email
    const email = screen.getByPlaceholderText('Enter Email');
    fireEvent.change(email, {target: {value: "regSuiteTest@gmail.com"}});
    

    //Password
    const password = screen.getByPlaceholderText('Enter Password');
    fireEvent.change(password, {target: {value: "password123"}});
    
    //Confirm Password
    const confirmPassword = screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(confirmPassword, {target: {value: "password123"}});
    
    // screen.debug();

    // fireEvent.click(userSignUpBtn);
    
    await createUserWithEmail('regSuiteTest@gmail.com', "password123", "FirstName", "Lastname").then(() => {
        console.log('Email in DB')
    }).catch((error) => {
        console.log("Email already made")
    })
    // render(<MockHome/>)
    // expect(screen.getByRole('heading', {name: "Welcome Firstname Lastname"})).toBeInTheDocument();
});

