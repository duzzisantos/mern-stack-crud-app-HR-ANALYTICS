import "./App.css";
import Navigate from "./components/navigate";
import { Routes, Route } from "react-router-dom";
import Register from "./menu/register";
import Appraisal from "./menu/appraisal";
import DashBoard from "./menu/dashboard";
import EmployeeList from "./menu/table";
import UpdateEmployee from "./menu/update-employee";

function App() {
  return (
    <div className="App">
      <Navigate />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="register" element={<Register />} />
        <Route path="appraisal" element={<Appraisal />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="table/*" element={<EmployeeList />} />
        <Route path="update-employee/:ID" element={<UpdateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
