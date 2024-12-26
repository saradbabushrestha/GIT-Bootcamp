import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import SuperAdminDashboard from "./modules/superadmin";
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
