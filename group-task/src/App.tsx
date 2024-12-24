import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import Sidebar from "./Layouts/Sidebar"; // Import Sidebar
import Feed from "./Pages/Feed"; // Example Feed page
import Profile from "./Pages/Profile"; // Example Profile page
import Logout from "./Pages/Logout"; // Example Logout page

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
