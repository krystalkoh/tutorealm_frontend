import "./App.css";
import React, { useState, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBarParent from "./components/NavBarParent";
import NavbarTutor from "./componentsTutor/NavbarTutor";
import jwtDecode from "jwt-decode";
import authService from "./services/AuthService";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ParentRegForm from "./components/ParentRegForm";
import ParentLogin from "./components/ParentLogin";
import MyJobs from "./components/MyJobs";
import CreateJob from "./components/CreateJob";
import UpdatePersonalDetails from "./components/UpdatePersonalDetails";
import TutorList from "./components/TutorList";
import Registration from "./componentsTutor/Registration";
import Login from "./componentsTutor/Login";
import AvailableJobs from "./componentsTutor/AvailableJobs";
import AppliedJobs from "./componentsTutor/AppliedJobs";
import PersonalDetails from "./componentsTutor/PersonalDetails";

function App() {
  const [userRole, setUserRole] = useState(() => {
    const role = localStorage.getItem("userRole");
    if (role === "Parent") {
      return "Parent";
    } else if (role === "Tutor") {
      return "Tutor";
    } else {
      return null;
    }
  });

  useEffect(() => {
    console.log("App is mounted");
  }, []);

  return (
    <>
      <div>
        <main>
          {userRole === "Parent" ? (
            <NavBarParent />
          ) : userRole === "Tutor" ? (
            <NavbarTutor />
          ) : null}

          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/parent/register" element={<ParentRegForm />} />
            <Route path="/parent/login" element={<ParentLogin />} />
            <Route path="/parent/update" element={<UpdatePersonalDetails />} />
            <Route path="/parent/create" element={<CreateJob />} />
            <Route path="/parent/jobs" element={<MyJobs />} />
            <Route path="/parent/applied/:id" element={<TutorList />} />

            <Route path="/tutor/register" element={<Registration />} />
            <Route path="/tutor/login" element={<Login />} />
            <Route path="/tutor/available" element={<AvailableJobs />} />
            <Route path="/tutor/applied" element={<AppliedJobs />} />
            <Route path="/tutor/profile" element={<PersonalDetails />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
