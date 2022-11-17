import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubjectInfo from "./pages/SubjectInfo";
import ErrorPage from './pages/ErrorPage';
import StudentPage from './pages/StudentPage';
import ComingSoon from './pages/ComingSoon';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
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
