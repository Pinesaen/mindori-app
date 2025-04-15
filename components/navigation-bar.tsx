import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MessageSquare, Calendar, User } from "lucide-react"

export function NavigationBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/home"
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === "/home" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/mentors"
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === "/mentors" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Mentors</span>
        </Link>
        <Link
          href="/chat"
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === "/chat" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs mt-1">Chat</span>
        </Link>
        <Link
          href="/profiles"
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === "/profiles" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Calendar className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  )
}
