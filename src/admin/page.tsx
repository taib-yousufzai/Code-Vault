'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Upload, BarChart2, FileText, Code } from 'lucide-react'

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement actual login logic here
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="w-full p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Login
            </button>
          </form>
        </main>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Upload className="w-8 h-8 mb-4 text-blue-400" />
            <h2 className="text-xl font-semibold mb-2">Upload Resources</h2>
            <p className="text-gray-400 mb-4">Add new notes or daily codes</p>
            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Upload
            </button>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FileText className="w-8 h-8 mb-4 text-green-400" />
            <h2 className="text-xl font-semibold mb-2">Manage Notes</h2>
            <p className="text-gray-400 mb-4">Edit or delete existing notes</p>
            <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
              Manage
            </button>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Code className="w-8 h-8 mb-4 text-purple-400" />
            <h2 className="text-xl font-semibold mb-2">Manage Daily Codes</h2>
            <p className="text-gray-400 mb-4">Edit or delete daily code challenges</p>
            <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
              Manage
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <BarChart2 className="w-6 h-6 mr-2" />
            Activity Analytics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Total Uploads</h3>
              <p className="text-3xl font-bold">152</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Active Students</h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Downloads Today</h3>
              <p className="text-3xl font-bold">89</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">New Users</h3>
              <p className="text-3xl font-bold">23</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

