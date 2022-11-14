import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SubjectInfo from "./pages/SubjectInfo";
import ErrorPage from './pages/ErrorPage';
import StudentPage from './pages/StudentPage';
import ComingSoon from './pages/ComingSoon';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,

  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "student",
        element: <StudentPage />,
      },
      {
        path: "subjects/:subjectId",
        element: <SubjectInfo />,
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
