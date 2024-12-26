import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../src/Layouts/Sidebar";
import Feed from "../src/Pages/Feed";
import Profile from "../src/Pages/Profile";
import Logout from "../src/Pages/Logout";
import SignUp from "../src/Pages/SignUp";
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
