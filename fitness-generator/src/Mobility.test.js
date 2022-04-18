import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import SignUp, { signInBtnText, continueGuestBtnText } from './SignUp'
import SignIn from './SignIn'
import Questionnaire from './Questionnaire'
import Home from './Home'
import MobilityTest from './MobilityTest'
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

const MockMobility = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <MobilityTest/>      
            </BrowserRouter>
        </AuthProvider>)
}



// All Tests

test('Posture Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Posture Test"})).toBeInTheDocument();
});

test('Overhead Squat Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Overhead Squat Test"})).toBeInTheDocument();
});

test('Squat Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Squat Test"})).toBeInTheDocument();
});

test('Hip Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Hip Test"})).toBeInTheDocument();
});

test('Ankle Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Ankle Test"})).toBeInTheDocument();
});

test('Windmill Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Windmill Test"})).toBeInTheDocument();
});

test('Lumbar Spine Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Lumbar Spine Test"})).toBeInTheDocument();
});

test('Wall Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Wall Test"})).toBeInTheDocument();
});

test('Shoulder Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Shoulder Test"})).toBeInTheDocument();
});

test('Scapula Test', () => { 
    render(<MockMobility />)
    // screen.debug();
    expect(screen.getByRole('link', {name: "Scapula Test"})).toBeInTheDocument();
});
