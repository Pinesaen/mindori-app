"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NavigationBar } from "@/components/navigation-bar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Send, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { use } from "react"

// Mock messages data
const messages = [
  {
    id: 1,
    sender: "mentor",
    content: "Hello! How can I help you today?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "student",
    content: "Hi! I need help with my math homework.",
    timestamp: "10:32 AM",
  },
  {
    id: 3,
    sender: "mentor",
    content: "Of course! What specific topic are you working on?",
    timestamp: "10:33 AM",
  },
]

export default function ChatPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  const mentor = {
    id: id,
    name: "Min-Ji Kim",
    year: "3rd Year",
    university: "Seoul National University",
    major: "Computer Science",
    avatar: "/placeholder.svg",
    universityLogo: "/placeholder.svg",
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="p-4 bg-white border-b">
        <div className="flex items-center space-x-4">
          <Link href="/chat">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={mentor.avatar} />
                <AvatarFallback>{mentor.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                <Image
                  src={mentor.universityLogo}
                  alt={`${mentor.university} logo`}
                  width={16}
                  height={16}
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <h2 className="font-semibold">{mentor.name}</h2>
              <p className="text-sm text-gray-500">{mentor.year} • {mentor.major}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-4 overflow-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "student" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === "student"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </footer>

      <NavigationBar activeTab="chat" />
    </div>
  )
}
