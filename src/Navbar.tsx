import Link from 'next/link'
import { Search } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">CS Institution</Link>
        <div className="flex items-center space-x-4">
          <Link href="/student" className="hover:text-blue-400 transition-colors">Student Portal</Link>
          <Link href="/admin" className="hover:text-blue-400 transition-colors">Admin</Link>
        </div>
      </div>
    </nav>
  )
}

