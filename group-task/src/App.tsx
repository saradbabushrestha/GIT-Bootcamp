import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../src/layouts/Sidebar";
import Feed from "../src/pages/Feed";
import Profile from "../src/pages/Profile";
import Logout from "../src/pages/Logout";
import SignUp from "../src/pages/SignUp";
import SuperAdminDashboard from "./modules/superadmin";
import AdminDashboard from "./modules/admin";
function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-grow bg-[#f4fafe] p-4">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/admin" element={<AdminDashboard />} />
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
