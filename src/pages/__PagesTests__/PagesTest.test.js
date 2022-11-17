
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { renderWithProviders } from '../../test-utils';
import { render, screen } from '@testing-library/react';
import ComingSoon from '../ComingSoon';
import Dashboard from '../Dashboard';
import Login from '../Login';
import StudentPage from '../StudentPage';
import SubjectInfo from '../SubjectInfo';



describe('Dashboard', ()=>{
    test('Dashboard Page renders', () => {
        renderWithProviders(<BrowserRouter><Dashboard /></BrowserRouter>)
        const dash = screen.getByTestId(/dash/i)
        expect(dash).toBeInTheDocument()
    })
})


test("Coming soon page renders successfully", ()=>{
    render(<ComingSoon />);
    const cspage = screen.getByTestId(/C-Spage/i)
    expect(cspage).toBeInTheDocument()
})


describe('Login', ()=>{
    test('Login Page renders', () => {
        renderWithProviders(<BrowserRouter><Login /></BrowserRouter>)
        const log = screen.getByTestId(/login-test/i)
        expect(log).toBeInTheDocument()
    })
})

describe('Subject Info', ()=>{
    test('Subject Info Page renders', () => {
        renderWithProviders(<BrowserRouter><SubjectInfo /></BrowserRouter>)
        const subj = screen.getByTestId(/subject/i)
        expect(subj).toBeInTheDocument()
    })
})

describe('Student Page', ()=>{
    test('Student Page renders', () => {
        renderWithProviders(<BrowserRouter><StudentPage /></BrowserRouter>)
        const stud = screen.getByTestId(/stud-page/i)
        expect(stud).toBeInTheDocument()
    })
})