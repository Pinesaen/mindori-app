"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NavigationBar } from "@/components/navigation-bar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, Send, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { use } from "react"

// Mock conversations data
const conversations = [
  {
    id: "1",
    mentor: {
      name: "Min-Ji Kim",
      year: "3rd Year",
      university: "Seoul National University",
      major: "Computer Science",
      avatar: "/images/Mentor1.jpg",
      universityLogo: "/images/snu-logo.png",
    },
    lastMessage: "Of course! What specific topic are you working on?",
    timestamp: "10:33 AM",
    unread: true,
  },
  {
    id: "2",
    mentor: {
      name: "Soo-Min Lee",
      year: "2nd Year",
      university: "Yonsei University",
      major: "English Literature",
      avatar: "/images/Mentor2.jpg",
      universityLogo: "/images/yonsei-logo.png",
    },
    lastMessage: "I can help you with your essay structure.",
    timestamp: "Yesterday",
    unread: false,
  },
  {
    id: "3",
    mentor: {
      name: "Min-Seok Kim",
      year: "4th Year",
      university: "Korea University",
      major: "Computer Science",
      avatar: "/images/Mentor3.jpg",
      universityLogo: "/images/korea-logo.png",
    },
    lastMessage: "Let's schedule a session for next week.",
    timestamp: "2 days ago",
    unread: false,
  },
]

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="p-4 bg-white border-b">
        <h1 className="text-xl font-semibold">Messages</h1>
      </header>

      <div className="flex-1 flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r bg-white">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search messages"
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-180px)]">
            {conversations.map((conversation) => (
              <Link
                key={conversation.id}
                href={`/chat/${conversation.id}`}
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center p-4 space-x-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conversation.mentor.avatar} />
                      <AvatarFallback>{conversation.mentor.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                      <Image
                        src={conversation.mentor.universityLogo}
                        alt={`${conversation.mentor.university} logo`}
                        width={16}
                        height={16}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium truncate">{conversation.mentor.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      {conversation.unread && (
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      {conversation.mentor.year} • {conversation.mentor.major}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Chat View */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-medium">Select a conversation</h3>
              <p className="text-sm text-gray-500">Choose a mentor to start chatting</p>
            </div>
          </div>
        </div>
      </div>

      <NavigationBar activeTab="chat" />
    </div>
  )
} 