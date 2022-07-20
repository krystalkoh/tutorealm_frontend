import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";

const ParentRegForm = React.lazy(() => import("./components/ParentRegForm"));
const ParentLogin = React.lazy(() => import("./components/ParentLogin"));
const MyJobs = React.lazy(() => import("./components/MyJobs"));
const CreateJob = React.lazy(() => import("./components/CreateJob"));
const UpdatePersonalDetails = React.lazy(() =>
  import("./components/UpdatePersonalDetails")
);
const TutorList = React.lazy(() => import("./components/TutorList"));

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/parent/jobs" />} />
            <Route path="/parent/register" element={<ParentRegForm />} />
            <Route path="/parent/login" element={<ParentLogin />} />
            <Route path="/parent/update" element={<UpdatePersonalDetails />} />
            <Route path="/parent/create" element={<CreateJob />} />
            <Route path="/parent/jobs" element={<MyJobs />} />
            <Route path="/parent/applied/:id" element={<TutorList />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
