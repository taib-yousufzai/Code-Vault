import { Navbar } from '@/components/Navbar'
import { Search } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to CS Institution</h1>
        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for notes or codes..."
              className="w-full p-4 pl-12 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Recent Updates</h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">New Algorithm Notes Added</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Daily Code Challenge: Binary Trees</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Updated Database Course Materials</li>
            </ul>
          </section>
          
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">Notes</button>
              <button className="p-4 bg-green-600 rounded-lg hover:bg-green-700 transition-colors">Daily Codes</button>
              <button className="p-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">Courses</button>
              <button className="p-4 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">Resources</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

