import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Layouts/Sidebar";
import Feed from "./Pages/Feed";
import Profile from "./Pages/Profile";
import Logout from "./Pages/Logout";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Feed />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
