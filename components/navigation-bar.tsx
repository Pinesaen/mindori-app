import Link from "next/link"
import { Home, Users, Heart, MessageSquare } from "lucide-react"

interface NavigationBarProps {
  activeTab: "home" | "profiles" | "mentors" | "chat"
}

export function NavigationBar({ activeTab }: NavigationBarProps) {
  const tabs = [
    {
      name: "home",
      icon: Home,
      path: "/",
    },
    {
      name: "profiles",
      icon: Users,
      path: "/profiles",
    },
    {
      name: "mentors",
      icon: Heart,
      path: "/mentors",
    },
    {
      name: "chat",
      icon: MessageSquare,
      path: "/chat/1", // Default to first chat for demo
    },
  ]

  return (
    <nav className="border-t bg-white">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.name

          return (
            <Link
              key={tab.name}
              href={tab.path}
              className={`flex flex-col items-center py-3 px-6 ${isActive ? "text-blue-700" : "text-gray-500"}`}
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-blue-700" : "text-gray-500"}`} />
              <span className="text-xs mt-1 capitalize">{tab.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
