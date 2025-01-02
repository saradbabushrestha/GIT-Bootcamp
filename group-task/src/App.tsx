import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import SuperAdminDashboard from "./modules/superadmin";
import AdminDashboard from "./modules/admin";
import Login from "./pages/Login";
import Error from "./pages/Error";
import ProtectedRoute from "./utils/ProtectedRoute"; 
import { Provider } from 'react-redux'; 
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex h-screen">
          <Sidebar />

          <div className="flex-grow bg-[#f4fafe]">
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/login" element={<Login />} />

              {/* Protected routes */}
              <Route
                path="/:id/feed"
                element={
                  <ProtectedRoute>
                    <Feed />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/:id/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/:id/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/:id/superadmin"
                element={
                  <ProtectedRoute>
                    <SuperAdminDashboard />
                  </ProtectedRoute>
                }
              />

              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
