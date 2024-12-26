import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Feed from "./Pages/Feed";
import Profile from "./Pages/Profile";
import Logout from "./Pages/Logout";
import SignUp from "./Pages/signUp/SignUp";
import SuperAdminDashboard from "./components/SuperAdmin/SuperAdminDashboard";
function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/superadmin" element={<SuperAdminDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;