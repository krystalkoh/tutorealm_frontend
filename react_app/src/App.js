import "./App.css";
import React, { useState, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBarParent from "./components/NavBarParent";
import NavbarTutor from "./componentsTutor/NavbarTutor";
import jwtDecode from "jwt-decode";
import authService from "./services/AuthService";

//Main
const LandingPage = React.lazy(() => import("./components/LandingPage"));
const LoginPage = React.lazy(() => import("./components/LoginPage"));
const RegisterPage = React.lazy(() => import("./components/RegisterPage"));

//Parents
const ParentRegForm = React.lazy(() => import("./components/ParentRegForm"));
const ParentLogin = React.lazy(() => import("./components/ParentLogin"));
const MyJobs = React.lazy(() => import("./components/MyJobs"));
const CreateJob = React.lazy(() => import("./components/CreateJob"));
const UpdatePersonalDetails = React.lazy(() =>
  import("./components/UpdatePersonalDetails")
);
const TutorList = React.lazy(() => import("./components/TutorList"));

//Tutors
const Registration = React.lazy(() => import("./componentsTutor/Registration"));
const Login = React.lazy(() => import("./componentsTutor/Login"));
const AvailableJobs = React.lazy(() =>
  import("./componentsTutor/AvailableJobs")
);
const AppliedJobs = React.lazy(() => import("./componentsTutor/AppliedJobs"));
const PersonalDetails = React.lazy(() =>
  import("./componentsTutor/PersonalDetails")
);

function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
      <div>
        <main>
          <Suspense fallback={<p>Loading...</p>}>
            <NavBarParent />
            <Routes>
              <Route
                path="/parent"
                element={<Navigate replace to="/parent/jobs" />}
              />
              <Route path="/parent/register" element={<ParentRegForm />} />
              <Route path="/parent/login" element={<ParentLogin />} />
              <Route
                path="/parent/update"
                element={<UpdatePersonalDetails />}
              />
              <Route path="/parent/create" element={<CreateJob />} />
              <Route path="/parent/jobs" element={<MyJobs />} />
              <Route path="/parent/applied/:id" element={<TutorList />} />
            </Routes>
          </Suspense>
        </main>
      </div>
      <div>
        <main>
          <Suspense fallback={<p>Loading...</p>}>
            <NavbarTutor />
            <Routes>
              <Route
                path="/tutor"
                element={<Navigate replace to="/tutor/available" />}
              />
              <Route path="/tutor/register" element={<Registration />} />
              <Route path="/tutor/login" element={<Login />} />
              <Route path="/tutor/available" element={<AvailableJobs />} />
              <Route path="/tutor/applied" element={<AppliedJobs />} />
              <Route path="/tutor/profile" element={<PersonalDetails />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
