import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Groups from "./Pages/Groups";
import Students from "./Pages/Students";
import "./App.css";

const Routing = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/groups" element={<Groups />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
