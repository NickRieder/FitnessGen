import { render, screen } from '@testing-library/react';
import Home from './Home';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

test('Home Page has Sign up Button', () => {
  render(<BrowserRouter><Home/></BrowserRouter>);
  expect(screen.getByRole('button', {name: 'Sign Up'})).toBeInTheDocument();
});
