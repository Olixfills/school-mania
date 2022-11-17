import React from 'react';
import LoginCard from '../LoginCard';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import SingleSubjectHeader from '../SingleSubjectHeader';
import StudentCard from '../StudentCard';
import SubjectCard from '../SubjectCard';
import TopicCard from '../TopicCard';
import { render, screen, fireEvent } from '@testing-library/react';


test("Login Card renders successfully", ()=>{
    render(<LoginCard />);
    const loginCard = screen.getByTestId(/login-card/i)
    expect(loginCard).toBeInTheDocument()
})


test("Sidebar renders successfully", ()=>{
    render(<SideBar />);
    const sidebar = screen.getByTestId(/sidebar/i)
    expect(sidebar).toBeInTheDocument()
})

test("Navbar renders successfully", ()=>{
    render(<NavBar />);
    const navbar = screen.getByTestId(/navbar/i)
    expect(navbar).toBeInTheDocument()
})

test("Subject header image renders successfully", ()=>{
    render(<SingleSubjectHeader />);
    const subj = screen.getByTestId(/subj-header/i)
    expect(subj).toBeInTheDocument()
})

test("Student card renders successfully", ()=>{
    render(<StudentCard />);
    const stud = screen.getByTestId(/stud-card/i)
    expect(stud).toBeInTheDocument()
})

test("Subject card renders successfully", ()=>{
    render(<SubjectCard />);
    const sub = screen.getByTestId(/sub-card/i)
    expect(sub).toBeInTheDocument()
})

test("Topic card renders successfully", ()=>{
    render(<TopicCard />);
    const topic = screen.getByTestId(/topic-card/i)
    expect(topic).toBeInTheDocument()
})