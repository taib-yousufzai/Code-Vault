import React from "react"
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          CS Institution
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/student" className="hover:text-blue-400 transition-colors">
            Student Portal
          </Link>
          <Link to="/admin" className="hover:text-blue-400 transition-colors">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
}

