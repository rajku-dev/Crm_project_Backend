import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login.jsx";
import Sidebar from "./pages/components/sidebar.jsx";
import {store} from './redux/store/store.js';
import { Provider } from "react-redux";


export default function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sidebar" element={<Sidebar />} />
          {/* <Route path="/employee" element={</>}/> */}
        </Routes>
      </Router>
    </Provider>
    </>
  );
}
