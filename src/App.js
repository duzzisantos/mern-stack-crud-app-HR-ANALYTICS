import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { auth } from "./auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Register from "./menu/register";
import Appraisal from "./menu/appraisal";
import DashBoard from "./menu/dashboard";
import EmployeeList from "./menu/table";
import UpdateEmployee from "./menu/update-employee";
import Login from "./auth/login";
import SignUp from "./auth/signup";
import Reset from "./auth/reset";
import Settings from "./menu/settings";
import LeagueTable from "./menu/LeagueTable";
import RecommendationForm from "./components/RecommendationForms/RecommendationForm";
import { Alert } from "react-bootstrap";

function App() {
  const [user, loading] = useAuthState(auth);
  const queryClient = new QueryClient();

  return (
    <div className="App">
      {loading && (
        <Alert className="fs-5 fw-semibold">Verifying Authentication....</Alert>
      )}
      {user && (
        <QueryClientProvider client={queryClient} contextSharing={true}>
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
        </QueryClientProvider>
      )}
    </div>
  );
}

export default App;
