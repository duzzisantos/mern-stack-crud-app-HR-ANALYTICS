import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
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

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider contextSharing={false}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset" element={<Reset />} />
          <Route path="auth/settings" element={<Settings />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/appraisal" element={<Appraisal />} />
          <Route path="auth/dashboard" element={<DashBoard />} />
          <Route path="auth/league-table" element={<LeagueTable />} />
          <Route path="auth/table/*" element={<EmployeeList />} />
          <Route
            path="auth/table/update-employee/:ID"
            element={<UpdateEmployee />}
          />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
