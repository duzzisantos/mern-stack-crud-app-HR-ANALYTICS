import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { auth } from "./auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Register from "./menu/Register";
import Appraisal from "./menu/Appraisal";
import DashBoard from "./menu/Dashboard";
import EmployeeList from "./menu/Employees";
import UpdateEmployee from "./menu/ManageEmployees";
import Login from "./auth/login";
import SignUp from "./auth/signup";
import Reset from "./auth/reset";
import Settings from "./menu/Settings";
import LeagueTable from "./menu/LeagueTable";
import RecommendationForm from "./menu/RecommendationForm";
import { Alert } from "react-bootstrap";
import Auth from "./auth/auth";

function App() {
  const [user, loading] = useAuthState(auth);
  const queryClient = new QueryClient();

  return (
    <div className="App">
      {user && <Auth />}
      <QueryClientProvider client={queryClient} contextSharing={true}>
        {loading && (
          <Alert className="fs-5 fw-semibold">
            Verifying Authentication....
          </Alert>
        )}
        {user && (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="reset" element={<Reset />} />
            <Route path="auth/settings" element={<Settings />} />
            <Route path="auth/register" element={<Register />} />
            <Route path="auth/appraisal" element={<Appraisal user={user} />} />
            <Route path="auth/dashboard" element={<DashBoard />} />
            <Route path="auth/league-table" element={<LeagueTable />} />
            <Route
              path="auth/recommendations"
              element={<RecommendationForm user={user} />}
            />
            <Route path="auth/table/*" element={<EmployeeList />} />
            <Route
              path="auth/table/update-employee/:ID"
              element={<UpdateEmployee />}
            />
          </Routes>
        )}
      </QueryClientProvider>
    </div>
  );
}

export default App;
