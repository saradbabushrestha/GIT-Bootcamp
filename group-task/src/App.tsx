import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import SuperAdminDashboard from "./modules/superadmin";
import AdminDashboard from "./modules/admin";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-grow bg-[#f4fafe]">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/:id/feed" element={<Feed />} />
            <Route path="/superadmin" element={<SuperAdminDashboard />} />
            <Route path="/:id/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
