import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login.jsx";
import Sidebar from "./pages/components/sidebar.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sidebar" element={<Sidebar />} />
          {/* <Route path="/employee" element={</>}/> */}
        </Routes>
      </Router>
    </>
  );
}
