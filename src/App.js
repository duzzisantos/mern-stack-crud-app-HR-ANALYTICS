import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
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

import { Alert } from "react-bootstrap";

function App() {
  const [user, loading] = useAuthState(auth);
  const queryClient = new QueryClient({
    defaultOptions: {
      staleTime: 300000,
      refetchOnInterval: false,
    },
  });

  const { pathname } = window.location;
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} contextSharing={true}>
        {loading && (
          <Alert className="fs-5 fw-semibold">
            Verifying Authentication....
          </Alert>
        )}
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
              <Route
                path="league-table"
                element={<LeagueTable user={user} />}
              />
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
