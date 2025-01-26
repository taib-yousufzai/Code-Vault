import { Navbar } from '@/components/Navbar'
import { Search, FileText, Code } from 'lucide-react'

export default function StudentPortal() {
  const resources = [
    { id: 1, type: 'note', title: 'Introduction to Algorithms', subject: 'Algorithms' },
    { id: 2, type: 'code', title: 'Binary Search Implementation', subject: 'Data Structures' },
    { id: 3, type: 'note', title: 'Database Normalization', subject: 'Databases' },
    { id: 4, type: 'code', title: 'Quicksort Algorithm', subject: 'Algorithms' },
    { id: 5, type: 'note', title: 'TCP/IP Protocol Suite', subject: 'Networking' },
    { id: 6, type: 'code', title: 'Linked List Operations', subject: 'Data Structures' },
  ]

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Student Portal</h1>
        
        <div className="mb-8 flex space-x-4">
          <input
            type="text"
            placeholder="Search resources..."
            className="flex-grow p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Subjects</option>
            <option value="algorithms">Algorithms</option>
            <option value="data-structures">Data Structures</option>
            <option value="databases">Databases</option>
            <option value="networking">Networking</option>
          </select>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              {resource.type === 'note' ? (
                <FileText className="w-8 h-8 mb-4 text-blue-400" />
              ) : (
                <Code className="w-8 h-8 mb-4 text-green-400" />
              )}
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-400 mb-4">{resource.subject}</p>
              <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Download
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

