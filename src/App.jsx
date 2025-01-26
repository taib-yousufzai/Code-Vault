import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import StudentPortal from "./pages/StudentPortal"
import AdminDashboard from "./pages/AdminDashboard"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<StudentPortal />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

