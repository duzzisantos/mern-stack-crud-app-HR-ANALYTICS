import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { auth } from "./auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Appraisal from "./menu/Appraisal";
import AddEmployee from "./menu/AddEmployee";
import DashBoard from "./menu/DashBoard";
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

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset" element={<Reset />} />
          <Route path="auth/settings" element={<Settings user={user} />} />
          <Route path="auth/register" element={<AddEmployee user={user} />} />
          <Route path="auth/appraisal" element={<Appraisal user={user} />} />
          <Route path="auth/dashboard" element={<DashBoard user={user} />} />
          <Route
            path="auth/league-table"
            element={<LeagueTable user={user} />}
          />
          <Route
            path="auth/recommendations"
            element={<RecommendationForm user={user} />}
          />
          <Route path="auth/table/*" element={<EmployeeList user={user} />} />
          <Route
            path="auth/table/update-employee/:ID"
            element={<UpdateEmployee user={user} />}
          />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
