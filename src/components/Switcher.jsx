// Switcher.js
import React from "react";
import { Route, HashRouter, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./DashBoard/DashBoard";
import BlacklistComponent from "./BlackList/BlackList";
import Login from "./Login";
import Signup from "./Signup";
import Notification from "./Notification/Notification";
import NavBar from "./NavBar/NavBar";

const Switcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* <Route path="/" element={<Dashboard />} /> */}

        {/* <Route path="/" element={<NavBar />} /> */}

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/blacklist" element={<BlacklistComponent />} />

        <Route path="/notification" element={<Notification />} />
        {/* Add more routes here for other components */}
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
