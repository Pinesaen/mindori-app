"use client"

import { NavigationBar } from "@/components/navigation-bar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const mentors = [
  {
    id: "1",
    name: "Min-Ji Kim",
    university: "Seoul National University",
    major: "Computer Science",
    year: "3rd Year",
  },
  {
    id: "2",
    name: "Soo-Min Lee",
    university: "Yonsei University",
    major: "English Literature",
    year: "2nd Year",
  },
  {
    id: "3",
    name: "Min-Seok Kim",
    university: "KAIST",
    major: "Computer Science",
    year: "4th Year",
  },
]

export default function ChatListPage() {
  const router = useRouter()

  useEffect(() => {
    const name = localStorage.getItem("userName")
    if (!name) {
      router.push("/")
    }
  }, [router])

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="p-4 bg-white border-b">
        <h1 className="text-2xl font-bold text-blue-700">Chats</h1>
      </header>

      <main className="flex-1 p-4 space-y-4">
        {mentors.map((mentor) => (
          <Link key={mentor.id} href={`/chat/${mentor.id}`}>
            <Card className="hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-700">
                      {mentor.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{mentor.name}</h3>
                    <p className="text-sm text-gray-500">
                      {mentor.year} • {mentor.major}
                    </p>
                    <p className="text-sm text-gray-500">{mentor.university}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </main>

      <NavigationBar />
    </div>
  )
} 