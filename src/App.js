import "./App.css";
import { Routes, Route } from "react-router-dom";

import { auth } from "./auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./auth/login";
import SignUp from "./auth/signup";
import Reset from "./auth/reset";
import Navigation from "./auth/auth";
import AddEmployee from "./menu/AddEmployee";
import AppraisalDashboard from "./menu/AppraisalDashboard";
import EmployeeAppraisal from "./menu/EmployeeAppraisal";
import EmployeeList from "./menu/EmployeeList";
import LeagueTable from "./menu/LeagueTable";
import ManageEmployees from "./menu/ManageEmployees";
import RecommendationForm from "./menu/RecommendationForm";
import HRManager from "./menu/HRManager";

function App() {
  const [user] = useAuthState(auth);

  const { pathname } = window.location;
  return (
    <div className="App">
      {user && <Navigation />}

      <Routes>
        {!user && pathname === "/signup" && (
          <Route path="/signup" element={<SignUp />} />
        )}
        {!user && pathname === "/login" && (
          <Route path="/login" element={<Login />} />
        )}
        {!user && pathname === "/" && <Route path="/" element={<Login />} />}
        {user && (
          <>
            <Route path="/" element={<LeagueTable />} />

            <Route path="reset" element={<Reset />} />
            <Route path="settings" element={<HRManager user={user} />} />
            <Route path="register" element={<AddEmployee user={user} />} />
            <Route
              path="appraisal"
              element={<EmployeeAppraisal user={user} />}
            />
            <Route
              path="dashboard"
              element={<AppraisalDashboard user={user} />}
            />
            <Route path="league-table" element={<LeagueTable user={user} />} />
            <Route
              path="recommendations"
              element={<RecommendationForm user={user} />}
            />
            <Route path="table/*" element={<EmployeeList user={user} />} />
            <Route
              path="table/update-employee/:ID"
              element={<ManageEmployees user={user} />}
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
